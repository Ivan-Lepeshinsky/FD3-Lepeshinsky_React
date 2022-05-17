"use strict";
import React from "react";
import ReactDOM from "react-dom";
import Ishop from "./components/ishop/ishop";
import goods from "./components/Json/goods.json";

let shopName = "ISHOP";

ReactDOM.render(
  <Ishop shopName={shopName} product={goods} />,
  document.getElementById("shop")
);
