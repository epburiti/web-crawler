import axios from "axios";

const api = axios.create({
  baseURL: "http://testapp.axreng.com:3000",
});

export default api;
