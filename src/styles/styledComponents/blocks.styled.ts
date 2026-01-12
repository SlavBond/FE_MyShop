import styled, { css } from 'styled-components';
import * as mixins from './mixins.styled';


const StSkeleton = css`
  overflow: hidden;
  position: relative;
  
  &:after {
    content: '';
    height: 100%;
    width: 20%;
    position: absolute;
    top: 0;
    left: 0;
    transform: skewX(15deg);
    opacity: .3;
    background-color: var(--neutral-1);
    animation: linearAnim 2s infinite linear
  }

  @keyframes linearAnim {
    0% {
      left: 0;
    }
    100% {
      left: 100%;
    }
  }
`;

type TFlexIsLoadingProps = {
    $isLoading?: boolean
}

type TFlexStyledProps = mixins.TFlexStyles
    & mixins.TSizeStylesProps
    & mixins.TPositionStylesProps
    & mixins.TBorderStylesProps
    & mixins.TFontsStyleProps
    & mixins.TIndentationStyledProps
    & mixins.TBackgroundColorStyledProps
    & mixins.TOverflowStyledProps
    & mixins.TBoxSizingStyled
    & mixins.TDisabledStyled
    & mixins.TZIndexStyled
    & TFlexIsLoadingProps
    & mixins.TBoxShadowStyled;

export const StFlex = styled.div<TFlexStyledProps>`
  ${mixins.sizeStyles}
  ${mixins.flexStyles}
  ${mixins.positionStyles}
  ${mixins.borderStyle}
  ${mixins.fontsStyle}
  ${mixins.indentationStyled}
  ${mixins.backgroundColorStyled}
  ${mixins.overflowStyled}
  ${mixins.boxSizingStyled}
  ${mixins.disabledStyled}
  ${mixins.boxShadowStyled}
  ${mixins.zIndex}

  ${(props) => props.$isLoading && StSkeleton}
`;

type TStParagraphProps = mixins.TSizeStylesProps
    & mixins.TPositionStylesProps
    & mixins.TBorderStylesProps
    & mixins.TFontsStyleProps
    & mixins.TIndentationStyledProps
    & mixins.TBackgroundColorStyledProps
    & mixins.TBoxShadowStyled
    & mixins.TPointerEventsStyled
export const StParagraph = styled.p<TStParagraphProps>`
  ${mixins.sizeStyles}
  ${mixins.positionStyles}
  ${mixins.borderStyle}
  ${mixins.fontsStyle}
  ${mixins.indentationStyled}
  ${mixins.backgroundColorStyled}
  ${mixins.boxShadowStyled}
  ${mixins.pointerEventsStyled}
`;

type TStSpanProps = mixins.TSizeStylesProps
    & mixins.TPositionStylesProps
    & mixins.TBorderStylesProps
    & mixins.TFontsStyleProps
    & mixins.TIndentationStyledProps
    & mixins.TBackgroundColorStyledProps
    & mixins.TBoxShadowStyled
    & mixins.TPointerEventsStyled
export const StSpan = styled.span<TStSpanProps>`
  ${mixins.sizeStyles}
  ${mixins.positionStyles}
  ${mixins.borderStyle}
  ${mixins.fontsStyle}
  ${mixins.indentationStyled}
  ${mixins.backgroundColorStyled}
  ${mixins.boxShadowStyled}
  ${mixins.pointerEventsStyled}
`;

type TStLinkProps = mixins.TSizeStylesProps
    & mixins.TPositionStylesProps
    & mixins.TBorderStylesProps
    & mixins.TFontsStyleProps
    & mixins.TIndentationStyledProps
    & mixins.TBackgroundColorStyledProps
    & mixins.TBoxShadowStyled
export const StLink = styled.a<TStLinkProps>`
  ${mixins.sizeStyles}
  ${mixins.positionStyles}
  ${mixins.borderStyle}
  ${mixins.fontsStyle}
  ${mixins.indentationStyled}
  ${mixins.backgroundColorStyled}
  ${mixins.boxShadowStyled}
`;

type TStInputProps = mixins.TBorderStylesProps
    & mixins.TFontsStyleProps
    & mixins.TIndentationStyledProps
    & mixins.TSizeStylesProps
    & mixins.TCursorStyled
interface IStInputProps {
    $disabledBg?: string;
}
export const StInput = styled.input<TStInputProps & IStInputProps>`
    ${mixins.borderStyle}
    ${mixins.fontsStyle}
    ${mixins.indentationStyled}
    ${mixins.sizeStyles}
    ${mixins.cursorStyled}
    
    outline: none;
    
    &:disabled {
        ${(props) => props.$disabledBg && `background-color: ${props.$disabledBg}`}
    }
`;

export const StCopyBlockMain = styled.div`
  flex: 1 1 auto;
  padding: 0 5px;
  white-space: pre-line;
`;

