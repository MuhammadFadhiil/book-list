import axios from "axios";
export default axios.create({
  baseURL: "http://104.248.149.85/be",
  // baseURL: "http://localhost:3000",
  headers: {
    "Content-type": "application/json"
  }
});