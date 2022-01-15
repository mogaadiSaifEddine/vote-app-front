import axios from "axios";
const login = (user) => {
  console.log(user);
  return axios.post("http://localhost:5000/api/user/login", user);
};
const register = (user) => {
  console.log(user);
  return axios.post("http://localhost:5000/api/user/register", user);
};
const objectExported = {
  login,
  register,
};
export default objectExported;
