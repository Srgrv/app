import axios from "axios";

const instanceSamuraiJS = axios.create({
  baseURL: `https://social-network.samuraijs.com/api/1.0/`,
  headers: {
    "API-KEY": "d0ce4cd8-d0d2-4152-99ad-f6e1407cb23f",
  },
});

const instanceJSONPlaceholder = axios.create({
  baseURL: `https://jsonplaceholder.typicode.com/`,
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
});

export { instanceSamuraiJS, instanceJSONPlaceholder };
