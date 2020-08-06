import axios from "axios";

const baseURL = process.env.URL_BACKEND
  ? process.env.URL_BACKEND
  : "https://backend-proffy.herokuapp.com";

//Trocar para http://localhost:3333

const api = axios.create({
  baseURL: baseURL,
});

export default api;
