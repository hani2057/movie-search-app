import { useState, ChangeEvent, KeyboardEvent } from "react";
import { TbSearch } from "react-icons/tb";
import { useSetRecoilState } from "recoil";

import { getMovies } from "../../api/get-movies";
import { searchedMoviesState } from "../../store/search-state";

import {
  SearchBarWrapper,
  SearchBtn,
  SearchInput,
  SearchInputWrapper,
} from "./style";

export const SearchBar = () => {
  const [keyword, setKeyword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const setSearchedMovies = useSetRecoilState(searchedMoviesState);

  // 검색어가 빈 문자열이 아닌지 검사한 뒤 검색 결과 저장
  const inspectAndSearch = async () => {
    if (!keyword.trim().length) setErrMsg("검색어를 입력해주세요");
    else {
      const res = await getMovies({ keyword, pageNum: 1 });
      if (res.Response === "False") alert(res.Error);
      else setSearchedMovies(res.Search);
      // 검색어 초기화
      setKeyword("");
    }
  };

  return (
    <SearchBarWrapper>
      <SearchInputWrapper errMsg={errMsg}>
        <TbSearch fontSize={20} />
        <SearchInput
          value={keyword}
          onChange={(e) => {
            setErrMsg("");
            setKeyword(e.target.value);
          }}
          autoFocus
          placeholder="영화를 검색해보세요"
          type="text"
          onKeyUp={(e) => {
            if (e.key === "Enter") inspectAndSearch();
          }}
        />
      </SearchInputWrapper>

      <SearchBtn onClick={() => inspectAndSearch()}>검색</SearchBtn>
    </SearchBarWrapper>
  );
};
