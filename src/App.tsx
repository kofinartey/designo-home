import React from "react";
import ReactDOM from "react-dom";
import HomeApp from "./HomeApp";

import "./index.css";

const App = () => (
  <div className="">
    <HomeApp />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
