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
    let arr = this.state.startArr.filter((word) => {
      if (word.includes(sampl)) return word;
    });
    this.setState({ currentArr: arr });
  },

  alphabetSort: function () {
    if (this.state.alphabet == false) {
      this.setState((prevState, props) => {
        return { unsortArr: prevState.currentArr };
      });
      this.setState((prevState, props) => {
        return { alphabet: (prevState.alphabet = true) };
      });
      this.setState((prevState, props) => {
        return { currentArr: prevState.currentArr.sort() };
      });
    } else {
      this.setState((prevState, props) => {
        return { alphabet: (prevState.alphabet = false) };
      });
      this.setState((prevState, props) => {
        return { currentArr: prevState.unsortArr };
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
