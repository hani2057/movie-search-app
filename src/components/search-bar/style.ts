import styled from "styled-components";

const SearchBarWrapper = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  padding: 2rem;
  padding-top: 3rem;
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
  background-color: #ffffff;
  z-index: 1;
`;

const SearchInputWrapper = styled.div<{ errMsg: string }>`
  width: calc(100% - 4rem);
  height: 2.5rem;
  border: 2px solid var(--main-color);
  border-radius: 5px;
  padding: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  &::after {
    content: "${({ errMsg }) => errMsg}";
    position: absolute;
    bottom: -1rem;
    font-size: 0.7rem;
    color: red;
  }
`;

const SearchInput = styled.input`
  width: calc(100% - 30px);
  border: none;
  outline: none;

  &::placeholder {
    color: var(--gray-color);
  }
`;

const SearchBtn = styled.button`
  width: 3rem;
  height: 2.5rem;
  padding: 0.5rem;
  background-color: var(--main-color);
  color: #ffffff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export { SearchBarWrapper, SearchInputWrapper, SearchInput, SearchBtn };
