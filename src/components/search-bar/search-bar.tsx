import { useState, ChangeEvent, KeyboardEvent, useEffect } from "react";
import { TbSearch } from "react-icons/tb";
import { useRecoilState, useSetRecoilState } from "recoil";

import { getMovies } from "../../api/get-movies";
import {
  searchKeywordState,
  searchPageNumState,
  searchToTalPagesState,
  searchedMoviesState,
} from "../../store/search-state";

import {
  SearchBarWrapper,
  SearchBtn,
  SearchInput,
  SearchInputWrapper,
} from "./style";

export const SearchBar = () => {
  const [inputValue, setInputValue] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const [keyword, setKeyword] = useRecoilState(searchKeywordState);
  const [pageNum, setPageNum] = useRecoilState(searchPageNumState);
  const [totalPages, setTotalPages] = useRecoilState(searchToTalPagesState);
  const setSearchedMovies = useSetRecoilState(searchedMoviesState);

  // 검색어가 빈 문자열이 아닌지 검사한 뒤 키워드 변경
  const handleSearch = () => {
    if (!inputValue.trim().length) setErrMsg("검색어를 입력해주세요");
    else {
      setSearchedMovies([]);
      setKeyword(inputValue);
      setPageNum(1);
      setInputValue("");
    }
  };

  // 영화 정보 요청 및 검색 결과 저장
  const getMoviesList = async (keyword: string, pageNum: number) => {
    if (!totalPages || pageNum < totalPages) {
      const res = await getMovies({ keyword, pageNum });
      if (res.Response === "False") setErrMsg(res.Error || "");
      else {
        setSearchedMovies((prev) => [...prev, ...res.Search]);
        setTotalPages(Math.ceil(Number(res.totalResults) / 10));
        if (pageNum === 1) window.scrollTo(0, 0);
      }
    }
  };

  // 검색어 또는 페이지가 바뀔 때마다 영화 api 요청
  useEffect(() => {
    if (!keyword.length) return;
    getMoviesList(keyword, pageNum);
  }, [keyword, pageNum]);

  return (
    <SearchBarWrapper>
      <SearchInputWrapper errMsg={errMsg}>
        <TbSearch fontSize={20} />
        <SearchInput
          value={inputValue}
          onChange={(e) => {
            setErrMsg("");
            setInputValue(e.target.value);
          }}
          autoFocus
          placeholder="영화를 검색해보세요"
          type="text"
          onKeyUp={(e) => {
            if (e.key === "Enter") handleSearch();
          }}
        />
      </SearchInputWrapper>

      <SearchBtn
        onClick={(e) => {
          e.preventDefault();
          handleSearch();
        }}
      >
        검색
      </SearchBtn>
    </SearchBarWrapper>
  );
};
