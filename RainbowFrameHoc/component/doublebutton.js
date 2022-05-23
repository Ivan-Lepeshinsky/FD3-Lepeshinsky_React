import React from "react";
import PropTypes from "prop-types";

class DoubleButton extends React.Component {
  static propTypes = {
    caption1: PropTypes.string.isRequired,
    caption2: PropTypes.string.isRequired,
    cbPressed: PropTypes.func.isRequired,
  };
  pressed = (eo) => {
    this.props.cbPressed(eo.target.getAttribute("code"));
  };

  render() {
    return (
      <React.Fragment>
        <input
          type="button"
          value={this.props.caption1}
          onClick={this.pressed}
          code={1}
        ></input>
        {this.props.children}
        <input
          type="button"
          value={this.props.caption2}
          onClick={this.pressed}
          code={2}
        ></input>
      </React.Fragment>
    );
  }
}

export default DoubleButton;
