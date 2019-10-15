import { getValue } from './value';
import {
	Unit,
	FlexDirection,
	Wrap,
	Align,
	Justify,
	Overflow,
	Display,
	MarginPaddingSpacing,
	BorderSpacing,
	PositionSpacing,
	PositionType,
    Edge
} from './constants';
import { YogaNode } from 'yoga-layout';
import {
	convertFlexDirection,
	FlexDirectionValues,
	WrapValues,
	convertWrap,
	AlignValues,
	convertAlign,
	JustifyValues,
	convertJustify,
	OverflowValues,
	convertOverflow,
	DisplayValues,
	convertDisplay,
	convertPositionType,
	PositionValues
} from './conversions';
import { CSSValue } from './props.interface';

function debug(name: string, ...value: any[]) {
	console.log(name, ...value);
}

export function setWidth(width: CSSValue, node: YogaNode | undefined) {
	if (!node) {
		return;
	}

	const boxedValue = getValue(width);
	debug('setWidth', width, boxedValue, node);

	switch (boxedValue.unit) {
		case Unit.POINT:
		case Unit.UNDEFINED:
			node.setWidth(boxedValue.value);
			break;
		case Unit.PERCENT:
			node.setWidthPercent(boxedValue.value);
			break;
		case Unit.AUTO:
			node.setWidthAuto();
			break;
	}
}

export function setHeight(height: CSSValue, node: YogaNode | undefined) {
	if (!node) {
		return;
	}
	const boxedValue = getValue(height);
	debug('setHeight', height, boxedValue, node);

	switch (boxedValue.unit) {
		case Unit.POINT:
		case Unit.UNDEFINED:
			node.setHeight(boxedValue.value);
			break;
		case Unit.PERCENT:
			node.setHeightPercent(boxedValue.value);
			break;
		case Unit.AUTO:
			node.setHeightAuto();
			break;
	}
}

export function setMinWidth(width: CSSValue, node: YogaNode | undefined) {
	if (!node) {
		return;
	}
	const boxedValue = getValue(width);
	debug('setMinWidth', width, boxedValue, node);

	switch (boxedValue.unit) {
		case Unit.POINT:
		case Unit.UNDEFINED:
			node.setMinWidth(boxedValue.value);
			break;
		case Unit.PERCENT:
			node.setMinWidthPercent(boxedValue.value);
			break;
		case Unit.AUTO:
			throw new Error('Minimum width cannot be auto');
	}
}

export function setMinHeight(height: CSSValue, node: YogaNode | undefined) {
	if (!node) {
		return;
	}
	const boxedValue = getValue(height);
	debug('setMinHeight', height, boxedValue, node);

	switch (boxedValue.unit) {
		case Unit.POINT:
		case Unit.UNDEFINED:
			node.setMinHeight(boxedValue.value);
			break;
		case Unit.PERCENT:
			node.setMinHeightPercent(boxedValue.value);
			break;
		case Unit.AUTO:
			throw new Error('Minimum height cannot be auto');
	}
}

export function setMaxWidth(width: CSSValue, node: YogaNode | undefined) {
	if (!node) {
		return;
	}
	const boxedValue = getValue(width);
	debug('setMaxWidth', width, boxedValue, node);

	switch (boxedValue.unit) {
		case Unit.POINT:
		case Unit.UNDEFINED:
			node.setMaxWidth(boxedValue.value);
			break;
		case Unit.PERCENT:
			node.setMaxWidthPercent(boxedValue.value);
			break;
		case Unit.AUTO:
			throw new Error('Maximum width cannot be auto');
	}
}

export function setMaxHeight(height: CSSValue, node: YogaNode | undefined) {
	if (!node) {
		return;
	}
	const boxedValue = getValue(height);
	debug('setMaxHeight', height, boxedValue, node);

	switch (boxedValue.unit) {
		case Unit.POINT:
		case Unit.UNDEFINED:
			node.setMaxHeight(boxedValue.value);
			break;
		case Unit.PERCENT:
			node.setMaxHeightPercent(boxedValue.value);
			break;
		case Unit.AUTO:
			throw new Error('Maximum height cannot be auto');
	}
}

export function setFlex(flex: number = 0, node: YogaNode | undefined) {
	if (!node) {
		return;
	}
	debug('setFlex', flex, node);
	node.setFlex(flex);
}

export function setFlexGrow(flex: number = 0, node: YogaNode | undefined) {
	if (!node) {
		return;
	}
	debug('setFlexGrow', flex, node);
	node.setFlexGrow(flex);
}

export function setFlexShrink(flex: number = 0, node: YogaNode | undefined) {
	if (!node) {
		return;
	}
	debug('setFlexShrink', flex, node);
	node.setFlexShrink(flex);
}

export function setFlexBasis(flexBasis: CSSValue, node: YogaNode | undefined) {
	if (!node) {
		return;
	}
	const boxedValue = getValue(flexBasis);
	debug('setFlexBasis', flexBasis, boxedValue, node);

	switch (boxedValue.unit) {
		case Unit.POINT:
		case Unit.UNDEFINED:
			node.setFlexBasis(boxedValue.value);
			break;
		case Unit.PERCENT:
			node.setFlexBasisPercent(boxedValue.value);
			break;
		case Unit.AUTO:
			// TODO: Bad typing?
			(node as any).setFlexBasisAuto();
	}
}

export function setFlexDirection(flexDirection: undefined | null | FlexDirectionValues, node: YogaNode | undefined) {
	if (!node) {
		return;
	}
	if (!flexDirection) {
		debug('setFlexDirection', 'DEFAULT', FlexDirection.COLUMN, node);
		node.setFlexDirection(FlexDirection.COLUMN);
		return;
	}

	debug('setFlexDirection', 'NOT_DEFAULT', flexDirection, node);
	node.setFlexDirection(convertFlexDirection(flexDirection));
}

export function setFlexWrap(flexWrap: undefined | null | WrapValues, node: YogaNode | undefined) {
	if (!node) {
		return;
	}
	if (!flexWrap) {
		debug('setFlexWrap', 'DEFAULT', Wrap.NO_WRAP, node);
		node.setFlexWrap(Wrap.NO_WRAP);
		return;
	}

	debug('setFlexWrap', 'NOT_DEFAULT', flexWrap, node);
	node.setFlexWrap(convertWrap(flexWrap));
}

export function setAlignSelf(alignSelf: undefined | null | AlignValues, node: YogaNode | undefined) {
	if (!node) {
		return;
	}
	if (!alignSelf) {
		debug('setAlignSelf', 'DEFAULT', Align.AUTO, node);
		node.setAlignSelf(Align.AUTO);
		return;
	}

	debug('setAlignSelf', 'NOT_DEFAULT', alignSelf, node);
	node.setAlignSelf(convertAlign(alignSelf));
}

export function setAlignItems(alignItems: undefined | null | AlignValues, node: YogaNode | undefined) {
	if (!node) {
		return;
	}
	if (!alignItems) {
		debug('setAlignItems', 'DEFAULT', Align.STRETCH, node);
		node.setAlignItems(Align.STRETCH);
		return;
	}

	debug('setAlignItems', 'NOT_DEFAULT', alignItems, node);
	node.setAlignItems(convertAlign(alignItems));
}

export function setAlignContent(alignContent: undefined | null | AlignValues, node: YogaNode | undefined) {
	if (!node) {
		return;
	}
	if (!alignContent) {
		debug('setAlignContent', 'DEFAULT', Align.FLEX_START, node);
		node.setAlignContent(Align.FLEX_START);
		return;
	}

	debug('setAlignContent', 'NOT_DEFAULT', alignContent, node);
	node.setAlignContent(convertAlign(alignContent));
}

export function setJustifyContent(justifyContent: undefined | null | JustifyValues, node: YogaNode | undefined) {
	if (!node) {
		return;
	}
	if (!justifyContent) {
		debug('setJustifyContent', 'DEFAULT', Justify.FLEX_START, node);
		node.setJustifyContent(Justify.FLEX_START);
		return;
	}

	debug('setJustifyContent', 'NOT_DEFAULT', justifyContent, node);
	node.setJustifyContent(convertJustify(justifyContent));
}

export function setOverflow(overflow: undefined | null | OverflowValues, node: YogaNode | undefined) {
	if (!node) {
		return;
	}
	if (!overflow) {
		debug('setOverflow', 'DEFAULT', Overflow.VISIBLE, node);
		node.setOverflow(Overflow.VISIBLE);
		return;
	}

	debug('setOverflow', 'NOT_DEFAULT', overflow, node);
	node.setOverflow(convertOverflow(overflow));
}

export function setDisplay(display: undefined | null | DisplayValues, node: YogaNode | undefined) {
	if (!node) {
		return;
	}
	if (!display) {
		debug('setDisplay', 'DEFAULT', Display.FLEX, node);
		node.setDisplay(Display.FLEX);
		return;
	}

	debug('setDisplay', 'NOT_DEFAULT', display, node);
	node.setDisplay(convertDisplay(display));
}

export function setMargins(marginType: MarginPaddingSpacing, margin: CSSValue, node: YogaNode | undefined) {
	if (!node) {
		return;
	}
	marginType = transformRL2SE(marginType);
	const value = getValue(margin);
	debug('setMargins', marginType, margin, value, node);

	switch (value.unit) {
		case Unit.UNDEFINED:
		case Unit.POINT:
			node.setMargin(marginType, value.value);
			break;
		case Unit.AUTO:
			node.setMarginAuto(marginType);
			break;
		case Unit.PERCENT:
			node.setMarginPercent(marginType, value.value);
			break;
	}
}

export function setPaddings(paddingType: MarginPaddingSpacing, padding: CSSValue, node: YogaNode | undefined) {
	if (!node) {
		return;
	}
	paddingType = transformRL2SE(paddingType);
	const value = getValue(padding);
	debug('setPaddings', paddingType, padding, value, node);

	switch (value.unit) {
		case Unit.UNDEFINED:
		case Unit.POINT:
			node.setPadding(paddingType, value.value);
			break;
		case Unit.PERCENT:
			node.setPaddingPercent(paddingType, value.value);
			break;
		case Unit.AUTO:
			throw new Error('Padding auto is not a valid value');
	}
}

export function setBorderWidths(borderType: BorderSpacing, border: number | undefined, node: YogaNode | undefined) {
	if (!node) {
		return;
	}
	borderType = transformRL2SE(borderType);
	const value = getValue(border);
	debug('setBorderWidths', borderType, border, value, node);

	node.setBorder(borderType, value.value);
}

export function setPositions(positionType: PositionSpacing, position: CSSValue, node: YogaNode | undefined) {
	if (!node) {
		return;
	}
	positionType = transformRL2SE(positionType);
	const value = getValue(position);
	debug('setPositions', positionType, position, value, node);

	switch (value.unit) {
		case Unit.UNDEFINED:
		case Unit.POINT:
			node.setPosition(positionType, value.value);
			break;
		case Unit.PERCENT:
			node.setPositionPercent(positionType, value.value);
			break;
		case Unit.AUTO:
			throw new Error('Position auto is not a valid value');
	}
}

export function setPositionType(position: undefined | null | PositionValues, node: YogaNode | undefined) {
	if (!node) {
		return;
	}

	if (!position) {
		debug('setPositionType', 'DEFAULT', PositionType.RELATIVE, node);
		node.setPositionType(PositionType.RELATIVE);
		return;
	}

	debug('setPositionType', 'NOT_DEFAULT', position, node);
	node.setPositionType(convertPositionType(position));
}

export function transformRL2SE<T extends Edge>(spacingType: T) {
	switch (spacingType) {
		case Edge.LEFT:
			return Edge.START;
		case Edge.RIGHT:
			return Edge.END;
	}

	return spacingType;
}
