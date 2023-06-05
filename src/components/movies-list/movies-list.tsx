import { useEffect, useRef, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";

import {
  searchPageNumState,
  searchedMoviesState,
} from "../../store/search-state";
import { Movie } from "../../types/movies";
import { MovieItem } from "../movie-item";
import { MoviesListWrapper, NoResultText } from "./style";

interface MoviesListProps {
  moviesList: Movie[];
}

export const MoviesList = () => {
  const scrollTarget = useRef<HTMLDivElement | null>(null);
  const [targetDetected, setTargetDetected] = useState(false);

  const moviesList = useRecoilValue(searchedMoviesState);
  const setPageNum = useSetRecoilState(searchPageNumState);

  // scrollTarget이 감지되면 pageNum + 1
  useEffect(() => {
    if (scrollTarget.current === null) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setPageNum((prev) => prev + 1);
    });
    observer.observe(scrollTarget.current as Element);

    return () => observer.disconnect();
  }, [scrollTarget.current, setPageNum]);

  // 렌더링된 이후 ref.current 지정
  useEffect(() => {
    if (!targetDetected) return;
  }, [targetDetected]);

  return (
    <>
      {moviesList.length === 0 ? (
        <NoResultText>검색 결과가 없습니다.</NoResultText>
      ) : (
        <MoviesListWrapper>
          {moviesList.map((movie: Movie) => (
            <MovieItem movie={movie} key={movie.imdbID} />
          ))}
          <div
            ref={(el) => {
              scrollTarget.current = el;
              setTargetDetected(Boolean(el));
            }}
          >
            loading
          </div>
        </MoviesListWrapper>
      )}
    </>
  );
};
