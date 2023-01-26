import axios from "axios";

export const api = axios.create({
  baseURL: "https://moviesapi-5jmb.onrender.com",
});
