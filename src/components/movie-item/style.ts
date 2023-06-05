import styled from "styled-components";

import { FlexDiv } from "../common";

const MovieItemWrapper = styled(FlexDiv)`
  width: 80%;
  overflow-x: auto;
  justify-self: center;
  border: 1px solid var(--main-color);
  border-radius: 5px;
  position: relative;

  &:hover {
    box-shadow: 0 0 1rem var(--main-color);
  }
`;

const MoviePoster = styled.img`
  width: 100%;
  aspect-ratio: 3 / 4;
`;

const MovieText = styled.p<{
  bold?: boolean;
}>`
  font-size: 0.8rem;
  font-weight: ${({ bold }) => (bold ? "700" : "400")};
  white-space: nowrap;
  overflow-x: hidden;
  text-overflow: ellipsis;
  text-align: center;
  width: 100%;
  padding: 0.3rem 0.5rem;
`;

const FavedIcon = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 1.8rem;

  & svg {
    stroke: var(--main-color);
    stroke-width: 1px;
    color: var(--main-color);
  }
`;

export { MovieItemWrapper, MoviePoster, MovieText, FavedIcon };
