import axios from "axios";
import { getUserFromSessionStorage } from "../context/AppContext";
import url from "./url";

const axiosInstance = axios.create({
  url,
  headers: {
    Authorization: `Bearer ${getUserFromSessionStorage()?.token || null}`,
  },
});

export default axiosInstance;
