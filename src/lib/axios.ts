import Axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY as string;
const BASE_URL = "http://www.omdbapi.com/";

export const axios = Axios.create({
  baseURL: BASE_URL,
});

axios.interceptors.request.use(
  (req) => {
    req.params.apikey = API_KEY;
    return req;
  },
  (err) => Promise.reject(err)
);

axios.interceptors.response.use(
  (res) => {
    return res.data;
  },
  (err) => Promise.reject(err)
);
