import axios from "axios";
import { StorageUser } from "../types";
import url from "./url";

let user = sessionStorage.getItem("user");
let sessionUser: StorageUser = user ? JSON.parse(user) : null;

const axiosInstance = axios.create({
  baseURL: url,
});

axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${
  sessionUser?.token || null
}`;

export const setAuthorizationToken = (token: string) => {
  if (token) {
    axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete axiosInstance.defaults.headers.common["Authorization"];
  }
};

export default axiosInstance;
