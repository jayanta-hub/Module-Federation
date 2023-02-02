import React from "react";
import ReactDOM from "react-dom";
import BasicCard from "./component/BasicCard/BasicCard";
import LikeAndCommentCountMethod from "./component/LikeAndCommentCountMethod/LikeAndCommentCountMethod";

import "./index.css";

const App = () => (
  <div className="container">
    <BasicCard />
    {LikeAndCommentCountMethod(12000)}
    <div>Name: reusable</div>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
