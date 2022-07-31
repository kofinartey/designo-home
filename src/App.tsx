import React from "react";
import ReactDOM from "react-dom";
import Button from "./components/button/Button";
import Header from "./header/Header";

import "./index.css";

const App = () => (
  <div className="">
    <Header />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
