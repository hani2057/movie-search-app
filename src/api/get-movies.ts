import { axios } from "lib/axios";
import { MoviesApiRes } from "types/movies";

interface GetMoviesParams {
  keyword: string;
  pageNum: number;
}

export const getMovies = async ({
  keyword,
  pageNum,
}: GetMoviesParams): Promise<MoviesApiRes> =>
  await axios.get("", {
    params: { s: keyword, page: pageNum },
  });
