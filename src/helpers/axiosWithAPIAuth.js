import axios from "axios";
export default function axiosWithAPIAuth() {
  return axios.create({
    headers: {
      "Content-Type": "application/json"
    }
  });
}
