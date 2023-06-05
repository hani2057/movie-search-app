import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

import { Movie } from "types/movies";

const { persistAtom } = recoilPersist();

export const favedMoviesState = atom<Movie[]>({
  key: "favedMoviesState",
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const favedMovieIdsState = atom<string[]>({
  key: "favedMovieIdsState",
  default: [],
  effects_UNSTABLE: [persistAtom],
});
