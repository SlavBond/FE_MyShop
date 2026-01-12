import React from 'react';
import { css } from 'styled-components';

export type TSizeStylesProps = {
    $width?: string;
    $minWidth?: string;
    $maxWidth?: string;
    $height?: string;
    $minHeight?: string;
    $maxHeight?: string;
    $bxSizing?: string;
}
export const sizeStyles = css<TSizeStylesProps>`
  ${(props) => props.$width && `width: ${props.$width};`};  
  ${(props) => props.$height && `height: ${props.$height};`};
  ${(props) => props.$minWidth && `min-width: ${props.$minWidth};`};
  ${(props) => props.$bxSizing && `box-sizing: ${props.$bxSizing}`}
  ${(props) => props.$maxWidth && `max-width: ${props.$maxWidth};`};
  ${(props) => props.$minHeight && `min-height: ${props.$minHeight};`};
  ${(props) => props.$maxHeight && `max-height: ${props.$maxHeight};`};
`;

export type TPositionStylesProps = {
    $position?: 'static' | 'relative' | 'absolute' | 'sticky' | 'fixed';
    $top?: string;
    $left?: string;
    $right?: string;
    $bottom?: string;
}
export const positionStyles = css<TPositionStylesProps>`
  ${(props) => props.$position && `position: ${props.$position}`};
  ${(props) => props.$top && `top: ${props.$top}`};
  ${(props) => props.$right && `right: ${props.$right}`};
  ${(props) => props.$bottom && `bottom: ${props.$bottom}`};
  ${(props) => props.$left && `left: ${props.$left}`};
`;

export type TFlexStyles = {
    $display?: 'flex' | 'inline-flex';
    $flexWrap?: 'wrap' | 'wrap-reverse';
    $flexDirection?: 'row-reverse' | 'column' | 'column-reverse';
    $justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
    $alignItems?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
    $order?: string;
    $gap?: string;
    $flex?: string;
}
export const flexStyles = css<TFlexStyles>`
  ${(props) => (props.$display ? `display: ${props.$display}` : 'display: flex')};
  ${(props) => props.$flexWrap && `flex-wrap: ${props.$flexWrap}`};
  ${(props) => props.$flexDirection && `flex-direction: ${props.$flexDirection}`};
  ${(props) => props.$justifyContent && `justify-content: ${props.$justifyContent}`};
  ${(props) => props.$alignItems && `align-items: ${props.$alignItems}`};
  ${(props) => props.$order && `order: ${props.$order}`};
  ${(props) => props.$gap && `gap: ${props.$gap}`};
  ${(props) => props.$flex && `flex: ${props.$flex}`};
`;

export type TFontsStyleProps = {
    $fontSize?: string;
    $fontFamily?: string;
    $fontWeight?: string;
    $fontStyle?: 'normal' | 'italic';
    $textAlign?: 'start' | 'end' | 'left' | 'right' | 'center' | 'justify' | 'match-parent' | 'justify-all';
    $textTransform?: 'capitalize' | 'uppercase' | 'lowercase';
    $lineHeight?: string;
    $color?: string
}
export const fontsStyle = css<TFontsStyleProps>`
  ${(props) => props.$fontSize && `font-size: ${props.$fontSize}`};
  ${(props) => props.$fontFamily && `font-family: ${props.$fontFamily}`};
  ${(props) => props.$fontWeight && `font-weight: ${props.$fontWeight}`};
  ${(props) => props.$fontStyle && `font-style: ${props.$fontStyle}`};
  ${(props) => props.$textAlign && `text-align: ${props.$textAlign}`};
  ${(props) => props.$textTransform && `text-transform: ${props.$textTransform}`};
  ${(props) => props.$lineHeight && `line-height: ${props.$lineHeight}`};
  ${(props) => props.$color && `color: ${props.$color}`};
`;

export type TBorderStylesProps = {
    $borderWidth?: string;
    $borderTopWidth?: string;
    $borderRightWidth?: string;
    $borderBottomWidth?: string;
    $borderLeftWidth?: string;
    $borderStyle?: 'dotted' | 'inset' | 'hidden' | 'dashed' | 'solid' | 'double' | 'groove' | 'ridge' | 'outset';
    $borderTopStyle?: 'dotted' | 'inset' | 'hidden' | 'dashed' | 'solid' | 'double' | 'groove' | 'ridge' | 'outset';
    $borderRightStyle?: 'dotted' | 'inset' | 'hidden' | 'dashed' | 'solid' | 'double' | 'groove' | 'ridge' | 'outset';
    $borderBottomStyle?: 'dotted' | 'inset' | 'hidden' | 'dashed' | 'solid' | 'double' | 'groove' | 'ridge' | 'outset';
    $borderLeftStyle?: 'dotted' | 'inset' | 'hidden' | 'dashed' | 'solid' | 'double' | 'groove' | 'ridge' | 'outset';
    $borderColor?: string;
    $borderTopColor?: string;
    $borderRightColor?: string;
    $borderBottomColor?: string;
    $borderLeftColor?: string;
    $borderRadius?: string;
    $border?: string;
}
export const borderStyle = css<TBorderStylesProps>`
  ${(props) => props.$borderWidth && `border-width: ${props.$borderWidth}`};
  ${(props) => props.$borderTopWidth && `border-top-width: ${props.$borderTopWidth}`};
  ${(props) => props.$borderRightWidth && `border-right-width: ${props.$borderRightWidth}`};
  ${(props) => props.$borderBottomWidth && `border-bottom-width: ${props.$borderBottomWidth}`};
  ${(props) => props.$borderLeftWidth && `border-left-width: ${props.$borderLeftWidth}`};
  ${(props) => props.$borderStyle && `border-style: ${props.$borderStyle}`};
  ${(props) => props.$borderTopStyle && `border-top-style: ${props.$borderTopStyle}`};
  ${(props) => props.$borderRightStyle && `border-right-style: ${props.$borderRightStyle}`};
  ${(props) => props.$borderBottomStyle && `border-bottom-style: ${props.$borderBottomStyle}`};
  ${(props) => props.$borderLeftStyle && `border-left-style: ${props.$borderLeftStyle}`};
  ${(props) => props.$borderColor && `border-color: ${props.$borderColor}`};
  ${(props) => props.$borderTopColor && `border-top-color: ${props.$borderTopColor}`};
  ${(props) => props.$borderRightColor && `border-right-color: ${props.$borderRightColor}`};
  ${(props) => props.$borderBottomColor && `border-bottom-color: ${props.$borderBottomColor}`};
  ${(props) => props.$borderLeftColor && `border-left-color: ${props.$borderLeftColor}`};
  ${(props) => props.$borderRadius && `border-radius: ${props.$borderRadius}`};
  ${(props) => props.$border && `border: ${props.$border}`};
`;

export type TIndentationStyledProps = {
    $margin?: string;
    $marginTop?: string;
    $marginRight?: string;
    $marginBottom?: string;
    $marginLeft?: string;
    $padding?: string;
    $paddingTop?: string;
    $paddingRight?: string;
    $paddingBottom?: string;
    $paddingLeft?: string;
    $whiteSpace?: string;
}
export const indentationStyled = css<TIndentationStyledProps>`
  ${(props) => props.$margin && `margin: ${props.$margin}`};
  ${(props) => props.$marginTop && `margin-top: ${props.$marginTop}`};
  ${(props) => props.$marginRight && `margin-right: ${props.$marginRight}`};
  ${(props) => props.$marginBottom && `margin-bottom: ${props.$marginBottom}`};
  ${(props) => props.$marginLeft && `margin-left: ${props.$marginLeft}`};
  ${(props) => props.$padding && `padding: ${props.$padding}`};
  ${(props) => props.$paddingTop && `padding-top: ${props.$paddingTop}`};
  ${(props) => props.$paddingRight && `padding-right: ${props.$paddingRight}`};
  ${(props) => props.$paddingBottom && `padding-bottom: ${props.$paddingBottom}`};
  ${(props) => props.$paddingLeft && `padding-left: ${props.$paddingLeft}`};
  ${(props) => props.$whiteSpace && `white-space: ${props.$whiteSpace}`};
`;

export type TBackgroundColorStyledProps = {
    $backgroundColor?: string
}
export const backgroundColorStyled = css<TBackgroundColorStyledProps>`
  background-color:${(props) => props.$backgroundColor && props.$backgroundColor};
`;

export type TOverflowStyledProps = {
    $overflow?: 'auto' | 'hidden' | 'scroll' | 'visible' | 'inherit';
    $overflowX?: 'auto' | 'hidden' | 'scroll' | 'visible';
    $overflowY?: 'auto' | 'hidden' | 'scroll' | 'visible';
}
export const overflowStyled = css<TOverflowStyledProps>`
  ${(props) => props.$overflow && `overflow: ${props.$overflow}`};
  ${(props) => props.$overflowX && `$overflow-x: ${props.$overflowX}`};
  ${(props) => props.$overflowY && `$overflow-y: ${props.$overflowY}`};
`;

export type TBoxSizingStyled = {
    $boxSizing?: 'content-box' | 'border-box' | 'padding-box' | 'inherit';
}
export const boxSizingStyled = css<TBoxSizingStyled>`
  ${(props) => props.$boxSizing && `box-sizing: ${props.$boxSizing}`};
`;

export type TCursorStyled = {
    $cursor?: React.CSSProperties['cursor'];
}
export const cursorStyled = css<TCursorStyled>`
  ${(props) => props.$cursor && `cursor: ${props.$cursor}`};
`;

export type TDisabledStyled = {
    $disabledStyled?: boolean
}
export const disabledStyled = css<TDisabledStyled>`
  ${(props) => props.$disabledStyled && `
       opacity: .5;
       pointer-events: none;
  `}
`;

export type TBoxShadowStyled = {
    $boxShadow?: string
}
export const boxShadowStyled = css<TBoxShadowStyled>`
  ${(props) => props.$boxShadow && `box-shadow: ${props.$boxShadow}`}
`;

export type TPointerEventsStyled = {
    $pointerEvents?: 'none'
}
export const pointerEventsStyled = css<TPointerEventsStyled>`
  ${(props) => props.$pointerEvents && `pointer-events: ${props.$pointerEvents}`}
`;

export type TZIndexStyled = {
    $zIndex?: string,
}
export const zIndex = css<TZIndexStyled>`
  ${(props) => props.$zIndex && `z-index: ${props.$zIndex}`}
`;
