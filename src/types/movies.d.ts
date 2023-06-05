export interface MovieRes {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

export interface MoviesApiRes {
  Response: string;
  Search: MovieRes[];
  totalResults: string;
  Error?: string;
}

export interface Movie extends MovieRes {
  isFaved: boolean;
}

// 나중에 api 요청 함수에 구분해서 사용할 것
// export interface MoviesApiResSuccess {
//   Response: string;
//   Search: Movie[];
//   totalResults: string;
// }

// export interface MoviesApiResFail {
//   Response: string;
//   Error: string;
// }
