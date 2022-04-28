let filterComponent = React.createClass({
  displayName: "filterBlock",

  propTypes: {
    testArr: React.PropTypes.array.isRequired,
  },

  getInitialState: function () {
    return {
      startArr: this.props.testArr,
      currentArr: this.props.testArr,
      unsortArr: null,
      alphabet: false,
    };
  },

  letterSort: function (EO) {
    let sampl = EO.target.value;
    this.setState({ sample: sampl });
    let arr = this.state.startArr.filter((word) => {
      if (word.includes(sampl)) return word;
    });
    this.setState({ currentArr: arr });
  },

  alphabetSort: function () {
    if (this.state.alphabet == false) {
      let arr = this.state.currentArr.sort();
      this.setState({
        unsortArr: this.state.currentArr,
        alphabet: true,
        currentArr: arr,
      });
    } else {
      let arr = this.state.unsortArr;
      this.setState({
        alphabet: false,
        currentArr: arr,
      });
    }
  },

  render: function () {
    let checkBox = React.DOM.input({
      type: "checkbox",
      id: "check",
      defaultChecked: false,
      onChange: this.alphabetSort,
    });
    let input = React.DOM.input({ id: "input", onChange: this.letterSort });
    let button = React.DOM.button({ id: "button" }, "сброс");
    let textArea = React.DOM.textarea({
      id: "textarea",
      value: this.state.currentArr.join("\n"),
    });

    return React.DOM.div(
      { className: "filter" },
      checkBox,
      input,
      button,
      textArea
    );
  },
});
