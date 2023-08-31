import { useCallback, useRef, useState } from "react";
import { useDrag, useDrop } from "react-dnd";
import { TiHeartFullOutline, TiHeartOutline } from "react-icons/ti";
import { useSetRecoilState, useRecoilState } from "recoil";

import { Modal } from "components/common";
import { favedMovieIdsState, favedMoviesState } from "store/favorite-state";
import { searchedMoviesState } from "store/search-state";
import { Movie } from "types/movies";
import { FavedIcon, MovieItemWrapper, MoviePoster, MovieText } from "./style";

interface MovieItemProps {
  movie: Movie;
  idx: number;
  type: "search" | "faved";
}
export const MovieItem = ({
  movie: { Poster, Title, Year, Type, imdbID, isFaved },
  idx,
  type,
}: MovieItemProps) => {
  // 즐겨찾기 관련 state
  const [modalOpen, setModalOpen] = useState(false);
  const [movieFaved, setMovieFaved] = useState(isFaved);
  const [favedMovies, setFavedMovies] = useRecoilState(favedMoviesState);
  const setFavedMovieIds = useSetRecoilState(favedMovieIdsState);
  const [searchedMoviesList, setSearchedMovies] =
    useRecoilState(searchedMoviesState);

  // 드래그 앤 드롭 관련 state
  const dragRef = useRef<HTMLDivElement>(null);

  // 드래그된 영화의 id와 옮길 idx를 받아 순서를 바꾸어 favedMovies에 저장
  const changeOrder = useCallback(
    (sourceIdx: number, destinationIdx: number) => {
      // const sourceIdx = favedMovies.map((movie) => movie.imdbID).indexOf(imdbID);
      const favedList = [...favedMovies];
      const [draggedMovie] = favedList.splice(sourceIdx, 1);
      favedList.splice(destinationIdx, 0, draggedMovie);
      setFavedMovies(favedList);
    },
    []
  );

  const [, drop] = useDrop({
    accept: "movie",
    hover: (item: { idx: number }) => {
      if (!dragRef.current) return;

      const sourceIdx = item.idx;
      const destinationIdx = idx;

      if (sourceIdx === destinationIdx) return;

      changeOrder(sourceIdx, destinationIdx);
      item.idx = destinationIdx;
    },
  });

  const [{ isDragging }, drag] = useDrag(() => ({
    type: "movie",
    item: () => ({ idx }),
    collect: (monitor) => ({ isDragging: monitor.isDragging() }),
  }));

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

  drag(drop(dragRef));

  return (
    <>
      <MovieItemWrapper
        direction="column"
        onClick={() => setModalOpen(true)}
        ref={type === "faved" ? dragRef : null}
        style={{ opacity: isDragging ? "0" : "1" }}
      >
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
