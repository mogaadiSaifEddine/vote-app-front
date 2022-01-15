import logo from "./logo.svg";
import "./App.css";
import Login from "./auth/Login";
import ListSujet from "./Sujet/ListSujet";
import { Redirect, Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import { useEffect } from "react";

function App() {
  useEffect(() => {});
  const history = createBrowserHistory();
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user);
  return (
    <div className="App">
      <Router history={history}>
        <>
          <Route path="/login" component={Login} />
          <Route path="/Listsujet" component={ListSujet} />
        </>
      </Router>
    </div>
  );
}

export default App;
