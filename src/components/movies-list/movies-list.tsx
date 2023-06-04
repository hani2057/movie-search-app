import { Movie } from "../../types/movies";
import { MovieItem } from "./movie-item";
import { MoviesListWrapper, NoResultText } from "./style";

interface MoviesListProps {
  moviesList: Movie[];
}

export const MoviesList = ({ moviesList }: MoviesListProps) => {
  return (
    <>
      {moviesList.length === 0 ? (
        <NoResultText>검색 결과가 없습니다.</NoResultText>
      ) : (
        <MoviesListWrapper>
          {moviesList.map((movie: Movie) => (
            <MovieItem movie={movie} key={movie.imdbID} />
          ))}
        </MoviesListWrapper>
      )}
    </>
  );
};
