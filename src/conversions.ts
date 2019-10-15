import {
	Align,
	Dimension,
	Direction,
	Display,
	Edge,
	ExperimentalFeature,
	FlexDirection,
	Justify,
	LogLevel,
	MeasureMode,
	NodeType,
	Overflow,
	PositionType,
	PrintOptions,
	Unit,
	Wrap
} from './constants';

function throwError(func: string, received: any): never {
	throw new Error(`Incorrect value passed to ${func}: '${received}' that has type of ${typeof received}`);
}

type AllValues<T extends Record<PropertyKey, PropertyKey>> = { [P in keyof T]: { key: P; value: T[P] } }[keyof T];

type InvertResult<T extends Record<PropertyKey, PropertyKey>> = {
	[P in AllValues<T>['value']]: Extract<AllValues<T>, { value: P }>['key']
};

type ReverseMapped<T extends Record<number, string>> = { [K in keyof T]: T[K] } & InvertResult<T>;

type GetValues<T extends (...args: any[]) => any> = Exclude<Parameters<T>[0], number>;

function reverseMap<T extends Record<number, string>>(mappings: T): ReverseMapped<T> {
	return Object.keys(mappings).map(Number).reduce((prev: ReverseMapped<T>, key: keyof T) => {
		// TODO: Figure out how to do these types correctly...
		const value = mappings[key] as any;
		prev[key as any] = value;
		prev[value as any] = key as any;
		return prev;
	}, {} as ReverseMapped<T>);
}

type GetKeys<T extends Record<string | number, any>> = Exclude<keyof T, number>;

function createConverter<V extends GetKeys<T>, E extends number, T extends Record<V, E>>(name: string, values: T) {
	function convert<F extends keyof T>(value: F): T[F] {
		const conversion = values[value];

		if (conversion === undefined) {
			return throwError(name, value);
		}

		return conversion;
	}

	return convert;
}

export const convertAlign = createConverter(
	'convertAlign',
	reverseMap({
		[Align.AUTO]: 'auto',
		[Align.FLEX_START]: 'flex-start',
		[Align.CENTER]: 'center',
		[Align.FLEX_END]: 'flex-end',
		[Align.STRETCH]: 'stretch',
		[Align.BASELINE]: 'baseline',
		[Align.SPACE_BETWEEN]: 'space-between',
		[Align.SPACE_AROUND]: 'space-around'
	} as const)
);
export type AlignValues = GetValues<typeof convertAlign>;

export const convertDimension = createConverter(
	'convertDimension',
	reverseMap({
		[Dimension.WIDTH]: 'width',
		[Dimension.HEIGHT]: 'height'
	} as const)
);
export type DimensionValues = GetValues<typeof convertDimension>;

export const convertDirection = createConverter(
	'convertDirection',
	reverseMap({
		[Direction.INHERIT]: 'inherit',
		[Direction.LTR]: 'ltr',
		[Direction.RTL]: 'rtl'
	} as const)
);
export type DirectionValues = GetValues<typeof convertDirection>;

export const convertDisplay = createConverter(
	'convertDisplay',
	reverseMap({
		[Display.FLEX]: 'flex',
		[Display.NONE]: 'none'
	} as const)
);
export type DisplayValues = GetValues<typeof convertDisplay>;

export const convertEdge = createConverter(
	'convertEdge',
	reverseMap({
		[Edge.LEFT]: 'left',
		[Edge.TOP]: 'top',
		[Edge.RIGHT]: 'right',
		[Edge.BOTTOM]: 'bottom',
		[Edge.START]: 'start',
		[Edge.END]: 'end',
		[Edge.HORIZONTAL]: 'horizontal',
		[Edge.VERTICAL]: 'vertical',
		[Edge.ALL]: 'all'
	} as const)
);
export type EdgeValues = GetValues<typeof convertEdge>;

export const convertExperimentalFeature = createConverter(
	'convertExperimentalFeature',
	reverseMap({
		[ExperimentalFeature.FLEX_BASIS]: 'web-flex-basis'
	} as const)
);
export type ExperimentalFeatureValues = GetValues<typeof convertExperimentalFeature>;

export const convertFlexDirection = createConverter(
	'convertFlexDirection',
	reverseMap({
		[FlexDirection.COLUMN]: 'column',
		[FlexDirection.COLUMN_REVERSE]: 'column-reverse',
		[FlexDirection.ROW]: 'row',
		[FlexDirection.ROW_REVERSE]: 'row-reverse'
	} as const)
);
export type FlexDirectionValues = GetValues<typeof convertFlexDirection>;

export const convertJustify = createConverter(
	'convertJustify',
	reverseMap({
		[Justify.FLEX_START]: 'flex-start',
		[Justify.CENTER]: 'center',
		[Justify.FLEX_END]: 'flex-end',
		[Justify.SPACE_BETWEEN]: 'space-between',
		[Justify.SPACE_AROUND]: 'space-around',
		[Justify.SPACE_EVENLY]: 'space-evenly'
	} as const)
);
export type JustifyValues = GetValues<typeof convertJustify>;

export const convertLogLevel = createConverter(
	'convertLogLevel',
	reverseMap({
		[LogLevel.ERROR]: 'error',
		[LogLevel.WARN]: 'warn',
		[LogLevel.INFO]: 'info',
		[LogLevel.DEBUG]: 'debug',
		[LogLevel.VERBOSE]: 'verbose',
		[LogLevel.FATAL]: 'fatal'
	} as const)
);
export type LogLevelValues = GetValues<typeof convertLogLevel>;

export const convertMeasureMode = createConverter(
	'convertMeasureMode',
	reverseMap({
		[MeasureMode.UNDEFINED]: 'undefined',
		[MeasureMode.EXACTLY]: 'exactly',
		[MeasureMode.AT_MOST]: 'at-most'
	} as const)
);
export type MeasureModeValues = GetValues<typeof convertMeasureMode>;

export const convertNodeType = createConverter(
	'convertNodeType',
	reverseMap({
		[NodeType.DEFAULT]: 'default',
		[NodeType.TEXT]: 'text'
	} as const)
);
export type NodeTypeValues = GetValues<typeof convertNodeType>;

export const convertOverflow = createConverter(
	'convertOverflow',
	reverseMap({
		[Overflow.VISIBLE]: 'visible',
		[Overflow.HIDDEN]: 'hidden',
		[Overflow.SCROLL]: 'scroll'
	} as const)
);
export type OverflowValues = GetValues<typeof convertOverflow>;

export const convertPositionType = createConverter(
	'convertPositionType',
	reverseMap({
		[PositionType.RELATIVE]: 'relative',
		[PositionType.ABSOLUTE]: 'absolute'
	} as const)
);
export type PositionValues = GetValues<typeof convertPositionType>;

export const convertPrintOptions = createConverter(
	'convertPrintOptions',
	reverseMap({
		[PrintOptions.LAYOUT]: 'layout',
		[PrintOptions.STYLE]: 'style',
		[PrintOptions.CHILDREN]: 'children'
	} as const)
);
export type PrintOptionValues = GetValues<typeof convertPrintOptions>;

export const convertUnit = createConverter(
	'convertUnit',
	reverseMap({
		[Unit.UNDEFINED]: 'undefined',
		[Unit.POINT]: 'point',
		[Unit.PERCENT]: 'percent',
		[Unit.AUTO]: 'auto'
	} as const)
);
export type UnitValues = GetValues<typeof convertUnit>;

export const convertWrap = createConverter(
	'convertWrap',
	reverseMap({
		[Wrap.NO_WRAP]: 'no-wrap',
		[Wrap.WRAP]: 'wrap',
		[Wrap.WRAP_REVERSE]: 'wrap-reverse'
	} as const)
);
export type WrapValues = GetValues<typeof convertWrap>;
