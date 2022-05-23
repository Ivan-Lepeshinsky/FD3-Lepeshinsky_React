"use strict";
import React from "react";
import ReactDOM from "react-dom";
import DoubleButton from "./component/doublebutton";

let colors = ["red", "orange", "yellow", "green", "#00BFFF", "blue", "purple"];

let withColorFrame = (colors) => (Component) => {
  class ComponentWithColorFrame extends React.Component {
    render() {
      let frame = <Component {...this.props} />;
      for (let i = 0; i < colors.length; i++) {
        frame = (
          <div className="border" style={{ border: "solid 5px " + colors[i] }}>
            {frame}
          </div>
        );
      }

      return <div>{frame}</div>;
    }
  }
  return ComponentWithColorFrame;
};

let FramedDoubleButton = withColorFrame(colors)(DoubleButton);
ReactDOM.render(
  <FramedDoubleButton
    caption1="button1"
    caption2="button2"
    cbPressed={(num) => alert(num)}
  >
    Sample text 1
  </FramedDoubleButton>,
  document.getElementById("frame")
);
