import { MoviesList } from "components/movies-list";
import { SearchBar } from "components/search-bar";
import { FlexDiv } from "components/common";

export const SearchPage = () => {
  return (
    <FlexDiv direction="column">
      <SearchBar />
      <MoviesList />
    </FlexDiv>
  );
};
