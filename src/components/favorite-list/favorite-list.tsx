import { useRecoilValue } from "recoil";

import {
  MoviesListWrapper,
  NoResultText,
} from "../../components/movies-list/style";
import { MovieItem } from "../../components/movie-item";
import { favedMoviesState } from "../../store/favorite-state";
import { Movie } from "../../types/movies";

export const FavoriteList = () => {
  const favedMovies = useRecoilValue(favedMoviesState);

  return (
    <>
      {favedMovies.length === 0 ? (
        <NoResultText>즐겨찾기한 영화가 없습니다.</NoResultText>
      ) : (
        <MoviesListWrapper>
          {favedMovies.map((movie: Movie) => (
            <MovieItem movie={movie} key={movie.imdbID} />
          ))}
        </MoviesListWrapper>
      )}
    </>
  );
};
