import { atom } from "recoil";
import { Movie } from "../types/movies";

export const searchedMoviesState = atom<Movie[]>({
  key: "searchedMoviesState",
  default: [],
});

export const searchKeywordState = atom({
  key: "searchKeywordState",
  default: "",
});

export const searchPageNumState = atom({
  key: "searchPageNumState",
  default: 1,
});

export const searchToTalPagesState = atom({
  key: "searchTotalPagesState",
  default: 0,
});

export const isLoadingState = atom({
  key: "isLoadingState",
  default: false,
});
