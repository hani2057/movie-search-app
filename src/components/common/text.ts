import styled, { css } from "styled-components";

export const Text = styled.p<{
  size?: string;
  bold?: boolean;
  pointer?: boolean;
  lineHeight?: string;
  wrap?: string;
  width?: string;
  height?: string;
  padding?: string;
  margin?: string;
  whiteSpace?: string;
}>`
  ${({
    size,
    bold,
    pointer,
    lineHeight,
    wrap,
    width,
    height,
    padding,
    margin,
    whiteSpace,
  }) => css`
    font-size: ${size || "1rem"};
    font-weight: ${bold ? "700" : "400"};
    cursor: ${pointer ? "pointer" : "auto"};
    line-height: ${lineHeight ? lineHeight : "normal"};
    overflow-wrap: ${wrap ? wrap : "break-word"};
    width: ${width ? width : "auto"};
    height: ${height ? height : "auto"};
    padding: ${padding || "0"};
    margin: ${margin || "0"};
    white-space: ${whiteSpace || "normal"};
  `}
`;
