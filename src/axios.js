import axios from "axios";
import cookies from "js-cookie";

// axios.defaults.baseURL = "http://localhost:5000";
// axios.defaults.headers.common["Authorization"] =
//   "Bearer " + cookies.get("accesstoken");
// const tok = cookies.get("accesstoken");
// console.log(tok);

export default axios.create({
  baseURL: `http://localhost:5000`,
  headers: {
    Authorization: cookies.get("accesstoken"),
  },
});
