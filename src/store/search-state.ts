import { atom } from "recoil";
import { Movie } from "../types/movies";

export const searchedMoviesState = atom<Movie[]>({
  key: "searchedMoviesState",
  default: [],
});
