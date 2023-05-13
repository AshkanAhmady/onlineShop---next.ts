import axios from "axios";

const app = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_API_URL,
  //this is for send cookie to backend to backend know the user
  withCredentials: true,
});

const http = {
  get: app.get,
  post: app.post,
  put: app.put,
  delete: app.delete,
};

export default http;
