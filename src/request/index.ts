import axios from "axios";

const baseURL =
  "https://www.fastmock.site/mock/bf1fcb3c2e2945669c2c8d0ecb8009b8/api";
const timeout = 5000;
const service = axios.create({
  baseURL,
  timeout,
  headers: {
    "Content-type": "application/json;charset=utf-8",
  },
});

service.interceptors.request.use((config) => {
  config.headers = config.headers || {};
  if (localStorage.getItem("token")) {
    config.headers.token = localStorage.getItem("token") || "";
  }
  return config;
});

service.interceptors.response.use(
  (res) => {
    const code: number = res.status;
    console.log(res);
    if (code === 200) {
      return res.data;
    } else {
      return Promise.reject(res.data);
    }
  },
  (err) => {
    console.log(err);
  }
);

export default service;
