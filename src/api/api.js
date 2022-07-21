import axios from "axios";

const apisURL = {
  development: "http://localhost/4000",
  production: "aqui vocês vao colocar a url da api deployed no heroku",
};

const api = axios.create({
  baseURL: apisURL[process.env.NODE_ENV],
});

export { api };
