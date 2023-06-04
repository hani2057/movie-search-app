import { Movie } from "../../types/movies";
import { MovieItemWrapper, MoviePoster, MovieText } from "./style";

interface MovieItemProps {
  movie: Movie;
}

export const MovieItem = ({
  movie: { Poster, Title, Year, Type },
}: MovieItemProps) => {
  return (
    <MovieItemWrapper direction="column">
      <MoviePoster src={Poster} />
      <MovieText bold={true}>{Title}</MovieText>
      <MovieText>{`${Year}, ${Type}`}</MovieText>
    </MovieItemWrapper>
  );
};
