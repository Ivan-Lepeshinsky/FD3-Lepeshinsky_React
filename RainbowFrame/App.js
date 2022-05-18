"use strict";
import React from "react";
import ReactDOM from "react-dom";
import ColorFrame from "./component/colorframe";

ReactDOM.render(
  <ColorFrame
    colors={["red", "orange", "yellow", "green", "#00BFFF", "blue", "purple"]}
  >
    Привет
  </ColorFrame>,
  document.getElementById("frame")
);
