import styled from "styled-components";

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

export { MoviesListWrapper, NoResultText };
