import styled, { css } from "styled-components";

const FlexDiv = styled.div<{
  direction?: string;
  justify?: string;
  align?: string;
  gap?: string;
  padding?: string;
  margin?: string;
}>`
  ${({ direction, justify, align, gap, padding, margin }) => css`
    display: flex;
    flex-direction: ${direction || "row"};
    justify-content: ${justify || "center"};
    align-items: ${align || "center"};
    gap: ${gap || "0"};
    padding: ${padding || "0"};
    margin: ${margin || "0"};
  `}
`;

export { FlexDiv };
