import axios from "axios";
import { header } from "express/lib/request";
import { json } from "express/lib/response";
const headers = {
  "Content-Type": "application/json",
  Authorization: JSON.parse(localStorage.getItem("user")),
};
const data = {
  title: "sujet1",
  description: "dege",
};

const getSujet = () => {
  return axios.get("http://localhost:5000/api/sujet");
};
const addSujet = (sujet) => {
  console.log(headers);
  console.log(sujet);
  return axios.post("http://localhost:5000/api/sujet", data, {
    headers: headers,
  });
};
const objectExported = {
  getSujet,
  addSujet,
};
export default objectExported;
