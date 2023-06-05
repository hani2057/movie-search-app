import { useState } from "react";
import { Movie } from "../../types/movies";
import { MovieItemWrapper, MoviePoster, MovieText } from "./style";
import { Modal } from "../../components/common";

interface MovieItemProps {
  movie: Movie;
}

export const MovieItem = ({
  movie: { Poster, Title, Year, Type },
}: MovieItemProps) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <MovieItemWrapper direction="column" onClick={() => setModalOpen(true)}>
        <MoviePoster src={Poster} />
        <MovieText bold={true}>{Title}</MovieText>
        <MovieText>{`${Year}, ${Type}`}</MovieText>
      </MovieItemWrapper>

      <Modal
        isOpen={modalOpen}
        setIsOpen={setModalOpen}
        type={"add"}
        title={Title}
      />
    </>
  );
};
