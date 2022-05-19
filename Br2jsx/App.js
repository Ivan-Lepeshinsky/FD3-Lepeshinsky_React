"use strict";
import React from "react";
import ReactDOM from "react-dom";
import Br2jsx from "./component/br2jsx";

ReactDOM.render(
  <Br2jsx text="первый<br>второй<br/>третий<br />последний"></Br2jsx>,
  document.getElementById("br2jsx")
);
