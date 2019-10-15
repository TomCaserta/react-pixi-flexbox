import { useEffect, useState, useContext } from 'react';
import { YogaNode, Node } from 'yoga-layout';
import { ILayoutStyles } from './props.interface';
import {
	setWidth,
	setHeight,
	setMinHeight,
	setMinWidth,
	setMaxHeight,
	setMaxWidth,
	setAlignContent,
	setAlignItems,
	setDisplay,
	setFlex,
	setFlexGrow,
	setFlexShrink,
	setFlexBasis,
	setFlexDirection,
	setFlexWrap,
	setJustifyContent,
	setBorderWidths,
	setPositionType,
	setPositions,
	setMargins,
	setPaddings
} from './setters';
import { Edge } from './constants';
import React from 'react';

export const YogaContext = React.createContext<YogaNode | undefined>(Node.create());

function getRootNode(node: YogaNode): YogaNode {
	const parent = node!.getParent();
	return !parent ? node : getRootNode(parent);
}

export function useModified(fn: () => any, [ value, node ]: [any, YogaNode | undefined]) {
	const [ previousValue, setPreviousValue ] = useState();
	const [ currNode, setNode ] = useState();

	useEffect(
		() => {
			let nodeChanged = false;
			if (currNode !== node) {
				setNode(node);
				nodeChanged = true;
			}

			if (previousValue !== value || (value && nodeChanged)) {
				setPreviousValue(value);
				fn();
			}
		},
		[ value, node ]
	);
}

export function useCurrentNode(currContext?: YogaNode) {
    const [ currentNode, setCurrentNode ] = useState<YogaNode>();

	useEffect(
		() => {
			if (currContext) {
				const node = Node.create();
				setCurrentNode(node);

				currContext.insertChild(node!, currContext.getChildCount());
			}

			return () => {
				if (currentNode) {
					if (currContext) {
						currContext.removeChild(currentNode);
					}
					currentNode.freeRecursive();
				}
			};
		},
		[ currContext ]
    );

    return currentNode;
}

function getLayout(node: YogaNode) {
    const box = { x: 0, y: 0, width: node.getComputedWidth(), height: node.getComputedHeight() };

    do {
        const layout = node.getComputedLayout();
        box.x += layout.left;
        box.y += layout.right;
    } while (node = node.getParent()!)

    return box;
};

export function useLayout(style: ILayoutStyles) {
	const node = useContext(YogaContext)!;
	const [ layout, setLayout ] = useState({
		x: 0,
		y: 0,
		width: 0,
		height: 0
	});

	useModified(() => setWidth(style.width, node), [ style.width, node ]);
	useModified(() => setHeight(style.height, node), [ style.height, node ]);
	useModified(() => setMinHeight(style.minHeight, node), [ style.minHeight, node ]);
	useModified(() => setMinWidth(style.minWidth, node), [ style.minWidth, node ]);
	useModified(() => setMaxHeight(style.maxHeight, node), [ style.maxHeight, node ]);
	useModified(() => setMaxWidth(style.maxWidth, node), [ style.maxWidth, node ]);

	useModified(() => setAlignContent(style.alignContent, node), [ style.alignContent, node ]);
	useModified(() => setAlignItems(style.alignItems, node), [ style.alignItems, node ]);
	useModified(() => setAlignItems(style.alignSelf, node), [ style.alignSelf, node ]);
	useEffect(() => setDisplay(style.display, node), [ style.display, node ]);
	useModified(() => setFlex(style.flex, node), [ style.flex, node ]);
	useModified(() => setFlexGrow(style.flexGrow, node), [ style.flexGrow, node ]);
	useModified(() => setFlexShrink(style.flexShrink, node), [ style.flexShrink, node ]);
	useModified(() => setFlexBasis(style.flexBasis, node), [ style.flexBasis, node ]);
	useEffect(() => setFlexDirection(style.flexDirection, node), [ style.flexDirection, node ]);
	useModified(() => setFlexWrap(style.flexWrap, node), [ style.flexWrap, node ]);
	useModified(() => setJustifyContent(style.justifyContent, node), [ style.justifyContent, node ]);

	useModified(() => setBorderWidths(Edge.ALL, style.borderWidth, node), [ style.borderWidth, node ]);
	useModified(() => setBorderWidths(Edge.BOTTOM, style.borderBottomWidth, node), [
		style.borderBottomWidth,
		node
	]);
	useModified(() => setBorderWidths(Edge.TOP, style.borderTopWidth, node), [ style.borderTopWidth, node ]);
	useModified(() => setBorderWidths(Edge.LEFT, style.borderLeftWidth, node), [ style.borderLeftWidth, node ]);
	useModified(() => setBorderWidths(Edge.RIGHT, style.borderRightWidth, node), [ style.borderRightWidth, node ]);

	useModified(() => setPositionType(style.position, node), [ style.position, node ]);
	useModified(() => setPositions(Edge.BOTTOM, style.bottom, node), [ style.bottom, node ]);
	useModified(() => setPositions(Edge.TOP, style.top, node), [ style.top, node ]);
	useModified(() => setPositions(Edge.LEFT, style.left, node), [ style.left, node ]);
	useModified(() => setPositions(Edge.RIGHT, style.right, node), [ style.right, node ]);

	useModified(() => setMargins(Edge.ALL, style.margin, node), [ style.margin, node ]);
	useModified(() => setMargins(Edge.BOTTOM, style.marginBottom, node), [ style.marginBottom, node ]);
	useModified(() => setMargins(Edge.TOP, style.marginTop, node), [ style.marginTop, node ]);
	useModified(() => setMargins(Edge.LEFT, style.marginLeft, node), [ style.marginLeft, node ]);
	useModified(() => setMargins(Edge.RIGHT, style.marginRight, node), [ style.marginRight, node ]);

	useModified(() => setPaddings(Edge.ALL, style.padding, node), [ style.padding, node ]);
	useModified(() => setPaddings(Edge.BOTTOM, style.paddingBottom, node), [ style.paddingBottom, node ]);
	useModified(() => setPaddings(Edge.TOP, style.paddingTop, node), [ style.paddingTop, node ]);
	useModified(() => setPaddings(Edge.LEFT, style.paddingLeft, node), [ style.paddingLeft, node ]);
	useModified(() => setPaddings(Edge.RIGHT, style.paddingRight, node), [ style.paddingRight, node ]);

	const updateLayout = () => {
		if (node) {
            const root = getRootNode(node);

			if (root && root.isDirty) {
				root.calculateLayout();
            }

			setLayout(getLayout(node));
		}
	};
	useEffect(updateLayout, [ ...Object.values(style), node ]);

	return [ layout, updateLayout ] as const;
}
