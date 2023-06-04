import { useRecoilValue } from "recoil";

import { searchedMoviesState } from "../store/search-state";
import { MoviesList } from "../components/movies-list";
import { SearchBar } from "../components/search-bar";
import { FlexDiv } from "../components/common";

export const SearchPage = () => {
  const moviesList = useRecoilValue(searchedMoviesState);
  console.log("moviesList", moviesList);

  return (
    <FlexDiv direction="column">
      <SearchBar />
      <MoviesList moviesList={moviesList} />
    </FlexDiv>
  );
};
