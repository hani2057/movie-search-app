import { useState } from "react";
import { TiHeartFullOutline, TiHeartOutline } from "react-icons/ti";
import { useSetRecoilState, useRecoilState } from "recoil";

import { Movie } from "../../types/movies";
import { Modal } from "../../components/common";
import {
  favedMovieIdsState,
  favedMoviesState,
} from "../../store/favorite-state";
import { searchedMoviesState } from "../../store/search-state";
import { FavedIcon, MovieItemWrapper, MoviePoster, MovieText } from "./style";

interface MovieItemProps {
  movie: Movie;
}

export const MovieItem = ({
  movie: { Poster, Title, Year, Type, imdbID, isFaved },
}: MovieItemProps) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [movieFaved, setMovieFaved] = useState(isFaved);

  const setFavedMovies = useSetRecoilState(favedMoviesState);
  const setFavedMovieIds = useSetRecoilState(favedMovieIdsState);
  const [searchedMoviesList, setSearchedMovies] =
    useRecoilState(searchedMoviesState);

  console.log(searchedMoviesList);

  // favedList로부터 영화를 제거
  const removeFromFavedList = () => {
    setFavedMovies((prev) => prev.filter((movie) => movie.imdbID !== imdbID));
    setFavedMovieIds((prev) => prev.filter((id) => id !== imdbID));
    setSearchedMovies((prev) =>
      prev.map((movie) =>
        movie.imdbID === imdbID ? { ...movie, isFaved: false } : movie
      )
    );
    setMovieFaved(false);
    setModalOpen(false);
  };

  // favedList에 영화 추가
  const addToFavedList = () => {
    setFavedMovies((prev) => [
      ...prev,
      { Poster, Title, Year, Type, imdbID, isFaved: true },
    ]);
    setFavedMovieIds((prev) => [...prev, imdbID]);
    setSearchedMovies((prev) =>
      prev.map((movie) =>
        movie.imdbID === imdbID ? { ...movie, isFaved: true } : movie
      )
    );
    setMovieFaved(true);
    setModalOpen(false);
  };

  // 모달 버튼 클릭시 isFavd 상태에 따라 favedMovie에 추가 또는 제거
  const handleModalBtnClick = () => {
    isFaved ? removeFromFavedList() : addToFavedList();
  };

  return (
    <>
      <MovieItemWrapper direction="column" onClick={() => setModalOpen(true)}>
        <FavedIcon>
          {movieFaved ? <TiHeartFullOutline /> : <TiHeartOutline />}
        </FavedIcon>
        <MoviePoster src={Poster} />
        <MovieText bold={true}>{Title}</MovieText>
        <MovieText>{`${Year}, ${Type}`}</MovieText>
      </MovieItemWrapper>

      <Modal
        isOpen={modalOpen}
        setIsOpen={setModalOpen}
        title={Title}
        isFaved={isFaved}
        handleBtnClickFunc={handleModalBtnClick}
      />
    </>
  );
};
