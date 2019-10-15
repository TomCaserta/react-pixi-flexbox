import { YogaNode } from 'yoga-layout';
import React, { FunctionComponent, isValidElement } from 'react';
import { Container, Graphics } from '@inlet/react-pixi';
import { Graphics as Context } from 'pixi.js';
import { useLayout, useCurrentNode, YogaContext } from './hooks';
import { IViewProps } from './props.interface';

export const ViewProvider: FunctionComponent<{
	currContext?: YogaNode;
}> = ({ children, currContext }) => {
	const currentNode = useCurrentNode(currContext);

	if (!currentNode) {
		return null;
	}

	return <YogaContext.Provider value={currentNode!}>{children}</YogaContext.Provider>;
};
ViewProvider.displayName = 'ViewProvider';

const Box: FunctionComponent<IViewProps> = ({ style = {}, children, inherit }) => {
	const [ layout ] = useLayout(style);

	return (
		<Container>
			{ style.background ? <Graphics
				draw={(g: Context) => {
					g.clear();
					g.beginFill(style.background!, style.opacity);
					g.drawRect(layout.x, layout.y, layout.width, layout.height);
					g.endFill();
				}}
			/> : null }

			{inherit ? (
				React.Children.map(children, (Child) => {
					if (!isValidElement(Child)) {
						return;
					}

					return (
						<Child.type
							{...Child.props}
							x={layout.x}
							y={layout.y}
							width={layout.width}
							height={layout.height}
						/>
					);
				})
			) : (
				children
			)}
		</Container>
	);
};
Box.displayName = 'Box';

export const ViewConsumer: FunctionComponent = ({ children }) => {
	return (
		<YogaContext.Consumer>
			{(context) => (
				<ViewProvider currContext={context}>
					{children}
				</ViewProvider>
			)}
		</YogaContext.Consumer>
	);
};
ViewConsumer.displayName = 'ViewConsumer';

type ExcludeLayoutProps<T> = Exclude<T, 'x' | 'y' | 'width' | 'height'>;
export function withView<P>(Component?: React.ComponentType<P>): FunctionComponent<IViewProps & ExcludeLayoutProps<P>> {
    return ({ style, children, debug, ...restProps }) => {
        return (<ViewConsumer>
            <Box debug style={style} inherit={true}>
                { Component ? (
                    <Component {...restProps as P}>
                        {children}
                    </Component>)
                  : children }
            </Box>
        </ViewConsumer>);
    }
}

export const View = withView();