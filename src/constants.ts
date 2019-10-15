export const enum JustifyContent {
    JUSTIFY_FLEX_START,
    JUSTIFY_CENTER,
    JUSTIFY_FLEX_END,
    JUSTIFY_SPACE_BETWEEN,
    JUSTIFY_SPACE_AROUND,
    JUSTIFY_SPACE_EVENLY,
}

export const enum Align {
    AUTO,
    FLEX_START,
    CENTER,
    FLEX_END,
    STRETCH,
    BASELINE,
    SPACE_BETWEEN,
    SPACE_AROUND,
}

export const enum Dimension {
    WIDTH,
    HEIGHT,
}

export const enum Direction {
    INHERIT,
    LTR,
    RTL,
}

export const enum Display {
    FLEX,
    NONE,
}

export const enum Edge {
    LEFT,
    TOP,
    RIGHT,
    BOTTOM,
    START,
    END,
    HORIZONTAL,
    VERTICAL,
    ALL,
}

export enum ExperimentalFeature {
    FLEX_BASIS,
}

export enum FlexDirection {
    COLUMN,
    COLUMN_REVERSE,
    ROW,
    ROW_REVERSE,
}

export enum Justify {
    FLEX_START,
    CENTER,
    FLEX_END,
    SPACE_BETWEEN,
    SPACE_AROUND,
    SPACE_EVENLY,
}

export enum LogLevel {
    ERROR,
    WARN,
    INFO,
    DEBUG,
    VERBOSE,
    FATAL,
}

export enum MeasureMode {
    UNDEFINED,
    EXACTLY,
    AT_MOST,
}

export enum NodeType {
    DEFAULT,
    TEXT,
}

export enum Overflow {
    VISIBLE,
    HIDDEN,
    SCROLL,
}

export enum PositionType {
    RELATIVE,
    ABSOLUTE,
}

export enum PrintOptions {
    LAYOUT,
    STYLE,
    CHILDREN,
}

export enum Unit {
    UNDEFINED,
    POINT,
    PERCENT,
    AUTO,
}

export enum Wrap {
    NO_WRAP,
    WRAP,
    WRAP_REVERSE,
}

export enum CSSProp {
    ALIGN_ITEMS = "alignItems",
    ALIGN_SELF = "alignSelf",
    ALIGN_CONTENT = "alignContent",
    DISPLAY = "display",
    BOTTOM = "bottom",
    FLEX = "flex",
    FLEX_GROW = "flexGrow",
    FLEX_SHRINK = "flexShrink",
    FLEX_BASIS = "flexBasis",
    FLEX_DIRECTION = "flexDirection",
    FLEX_WRAP = "flexWrap",
    HEIGHT = "height",
    JUSTIFY_CONTENT = "justifyContent",
    LEFT = "left",
    MARGIN = "margin",
    MARGIN_VERTICAL = "marginVertical",
    MARGIN_HORIZONTAL = "marginHorizontal",
    MARGIN_LEFT = "marginLeft",
    MARGIN_RIGHT = "marginRight",
    MARGIN_TOP = "marginTop",
    MARGIN_BOTTOM = "marginBottom",
    MARGIN_START = "marginStart",
    MARGIN_END = "marginEnd",
    PADDING = "padding",
    PADDING_VERTICAL = "paddingVertical",
    PADDING_HORIZONTAL = "paddingHorizontal",
    PADDING_LEFT = "paddingLeft",
    PADDING_RIGHT = "paddingRight",
    PADDING_TOP = "paddingTop",
    PADDING_BOTTOM = "paddingBottom",
    PADDING_START = "paddingStart",
    PADDING_END = "paddingEnd",
    POSITION = "position",
    RIGHT = "right",
    TOP = "top",
    WIDTH = "width",
    START = "start",
    END = "end",
    MIN_WIDTH = "minWidth",
    MAX_WIDTH = "maxWidth",
    MIN_HEIGHT = "minHeight",
    MAX_HEIGHT = "maxHeight",
    OVERFLOW = "overflow",
    BORDER_WIDTH = "borderWidth",
    BORDER_LEFT_WIDTH = "borderLeftWidth",
    BORDER_START_WIDTH = "borderStartWidth",
    BORDER_END_WIDTH = "borderEndWidth",
    BORDER_TOP_WIDTH = "borderTopWidth",
    BORDER_RIGHT_WIDTH = "borderRightWidth",
    BORDER_BOTTOM_WIDTH = "borderBottomWidth",
}

export type MarginPaddingSpacing = Edge.ALL | Edge.VERTICAL | Edge.HORIZONTAL | Edge.START | Edge.END | Edge.TOP | Edge.BOTTOM | Edge.LEFT | Edge.RIGHT;

export type PositionSpacing = Edge.START | Edge.END | Edge.TOP | Edge.BOTTOM | Edge.LEFT | Edge.RIGHT;

export type BorderSpacing = Edge.ALL | Edge.START | Edge.END | Edge.TOP | Edge.BOTTOM | Edge.LEFT | Edge.RIGHT;
