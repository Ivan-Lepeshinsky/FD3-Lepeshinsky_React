let filterComponent = React.createClass({
  displayName: "filterBlock",

  propTypes: {
    testArr: React.PropTypes.array.isRequired,
  },

  render: function () {
    let checkBox = React.DOM.input({ type: "checkbox", id: "check" });
    let input = React.DOM.input({ id: "input" });
    let button = React.DOM.button({ id: "button" }, "сброс");
    let textArea = React.DOM.textarea({ id: "textarea" });

    return React.DOM.div(
      { className: "filter" },
      checkBox,
      input,
      button,
      textArea
    );
  },
});
