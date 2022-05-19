import React from "react";
import PropTypes from "prop-types";
import "./br2jsx.css";

class Br2jsx extends React.Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
  };

  render() {
    let regex = /( |<([^>]+)>)/gi;
    let arr = this.props.text.replace(regex, "/").split("/");

    let result = [];
    for (let i = 0; i < arr.length; i++) {
      result.push(arr[i]);
      if (i < arr.length) {
        result.push(<br />);
      }
    }

    return <div>{result}</div>;
  }
}
export default Br2jsx;
