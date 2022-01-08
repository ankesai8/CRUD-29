import axios from "axios";

axios.defaults.baseURL = "https://611f24619771bf001785c6fb.mockapi.io/user/";
const methods = {
  put: axios.put,
  post: axios.post,
  get: axios.get,
  delete: axios.delete,
  };
export default methods;
