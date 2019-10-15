import { CSSProp, Unit } from './constants';
import {
    PositionValues,
    JustifyValues,
    FlexDirectionValues,
    WrapValues,
    DisplayValues,
    AlignValues
} from './conversions';

export type CSSValue = string | number | null | undefined;

export type Value = {
    unit: Unit.PERCENT | Unit.POINT;
    value: number;
} | {
    unit: Unit.UNDEFINED | Unit.AUTO;
    value: typeof NaN;
};

export interface ILayoutStyles {
    [CSSProp.WIDTH]?: CSSValue;
    [CSSProp.HEIGHT]?: CSSValue;
    [CSSProp.MIN_HEIGHT]?: CSSValue;
    [CSSProp.MAX_HEIGHT]?: CSSValue;
    [CSSProp.MIN_WIDTH]?: CSSValue;
    [CSSProp.MAX_WIDTH]?: CSSValue;

    [CSSProp.LEFT]?: CSSValue;
    [CSSProp.RIGHT]?: CSSValue;
    [CSSProp.TOP]?: CSSValue;
    [CSSProp.BOTTOM]?: CSSValue;

    [CSSProp.MARGIN]?: CSSValue;
    [CSSProp.MARGIN_LEFT]?: CSSValue;
    [CSSProp.MARGIN_RIGHT]?: CSSValue;
    [CSSProp.MARGIN_TOP]?: CSSValue;
    [CSSProp.MARGIN_BOTTOM]?: CSSValue;

    [CSSProp.PADDING]?: CSSValue;
    [CSSProp.PADDING_LEFT]?: CSSValue;
    [CSSProp.PADDING_RIGHT]?: CSSValue;
    [CSSProp.PADDING_TOP]?: CSSValue;
    [CSSProp.PADDING_BOTTOM]?: CSSValue;

    [CSSProp.ALIGN_CONTENT]?: AlignValues;
    [CSSProp.ALIGN_ITEMS]?: AlignValues;
    [CSSProp.ALIGN_SELF]?: AlignValues;

    [CSSProp.DISPLAY]?: DisplayValues;
    [CSSProp.FLEX]?: number;
    [CSSProp.FLEX_GROW]?: number;
    [CSSProp.FLEX_SHRINK]?: number;
    [CSSProp.FLEX_BASIS]?: CSSValue;
    [CSSProp.FLEX_DIRECTION]?: FlexDirectionValues;
    [CSSProp.FLEX_WRAP]?: WrapValues;

    [CSSProp.JUSTIFY_CONTENT]?: JustifyValues;

    // Borders
    [CSSProp.BORDER_WIDTH]?: number;
    [CSSProp.BORDER_BOTTOM_WIDTH]?: number;
    [CSSProp.BORDER_TOP_WIDTH]?: number;
    [CSSProp.BORDER_LEFT_WIDTH]?: number;
    [CSSProp.BORDER_RIGHT_WIDTH]?: number;

    [CSSProp.POSITION]?: PositionValues;
}

export interface IViewProps {
    style?: ILayoutStyles & {
        background?: number;
        opacity?: number;
    };

    /**
     * Whether to pass down sizing and position properties
     * to child components.
     */
    inherit?: boolean;

    debug?: boolean;
}