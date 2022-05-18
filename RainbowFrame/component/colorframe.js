import React from "react";
import PropTypes from "prop-types";
import "./colorframe.css";

class ColorFrame extends React.Component {
  static propTypes = {
    colors: PropTypes.array.isRequired,
  };

  render() {
    let frame = this.props.children;
    for (let i = 0; i < this.props.colors.length; i++) {
      frame = (
        <div
          className="border"
          style={{ border: "solid 5px " + this.props.colors[i] }}
        >
          {frame}
        </div>
      );
    }

    return <div>{frame}</div>;
  }
}
export default ColorFrame;
