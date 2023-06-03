import { ChangeEvent, KeyboardEvent } from "react";
import { TbSearch } from "react-icons/tb";

import {
  SearchBarWrapper,
  SearchBtn,
  SearchInput,
  SearchInputWrapper,
} from "./style";
import { useState } from "react";

export const SearchBar = () => {
  const [keyword, setKeyword] = useState("");
  const [errMsg, setErrMsg] = useState("");

  // 검색어가 빈 문자열이 아닌지 검사한 뒤 검색 요청
  const inspectAndSearch = () => {
    if (!keyword.trim().length) setErrMsg("검색어를 입력해주세요");
    else fetchSearchByKeyword(keyword);
  };

  const fetchSearchByKeyword = (keyword: string) => {};

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
