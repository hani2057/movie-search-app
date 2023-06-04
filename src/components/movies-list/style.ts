import styled from "styled-components";

import { FlexDiv } from "../common";

// MoviesList 관련 컴포넌트들
const MoviesListWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 1.5rem;
  padding: 8rem 1rem;
  overflow-y: auto;

  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const NoResultText = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%);
`;

// 여기부터 MovieItem 관련 컴포넌트들
const MovieItemWrapper = styled(FlexDiv)`
  width: 80%;
  overflow-x: auto;
  justify-self: center;
  border: 1px solid var(--main-color);
  border-radius: 5px;

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

export {
  MoviesListWrapper,
  NoResultText,
  MovieItemWrapper,
  MoviePoster,
  MovieText,
};
