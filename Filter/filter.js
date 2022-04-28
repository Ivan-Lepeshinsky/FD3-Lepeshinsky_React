let filterComponent = React.createClass({
  displayName: "filterBlock",

  propTypes: {
    testArr: React.PropTypes.array.isRequired,
  },

  getInitialState: function () {
    return {
      currentArr: this.props.testArr,
      alphabet: false,
      sample: "",
    };
  },

  letterSort: function (EO) {
    this.setState({ sample: EO.target.value }, this.arrSort);
  },

  alphabetSort: function () {
    this.state.alphabet == false
      ? this.setState({ alphabet: true }, this.arrSort)
      : this.setState({ alphabet: false }, this.arrSort);
  },
  reset: function () {
    this.setState({ alphabet: false, sample: "" }, this.arrSort);
  },

  arrSort: function () {
    let arr = this.props.testArr.slice();
    let sample = this.state.sample;
    let sort = this.state.alphabet;
    if (sort) {
      arr = arr.sort();
    }
    if (sample) {
      arr = arr.filter((word) => {
        if (word.includes(sample)) return word;
      });
    }
    this.setState({ currentArr: arr });
  },

  render: function () {
    let checkBox = React.DOM.input({
      type: "checkbox",
      id: "check",
      checked: this.state.alphabet,
      onChange: this.alphabetSort,
    });
    let input = React.DOM.input({
      id: "input",
      value: this.state.sample,
      onChange: this.letterSort,
    });
    let button = React.DOM.button(
      { id: "button", onClick: this.reset },
      "сброс"
    );
    let textArea = React.DOM.div(
      {
        id: "textarea",
      },
      this.state.currentArr.join("\n")
    );

    return React.DOM.div(
      { className: "filter" },
      checkBox,
      input,
      button,
      textArea
    );
  },
});
