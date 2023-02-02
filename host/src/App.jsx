import React from "react";
import ReactDOM from "react-dom";
import SearchAppBar from "./component/SearchAppBar/SearchAppBar";

import "./index.css";
import BasicCard from "reusable/BasicCard";
import LikeAndCommentCountMethod from "reusable/LikeAndCommentCountMethod";
const App = () => (
  <div className="container">
    <SearchAppBar />
    <BasicCard />
    <div>Name: host</div>
    <h1>{LikeAndCommentCountMethod(101232)}</h1>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
