let shopProdact = React.createClass({
  displayname: "igood",

  propTypes: {
    productname: React.PropTypes.string.isRequired,
    productcode: React.PropTypes.number.isRequired,
    productprice: React.PropTypes.number.isRequired,
    producturl: React.PropTypes.string.isRequired,
    productremain: React.PropTypes.number.isRequired,
    cbitemSelected: React.PropTypes.func.isRequired,
    itemSelected: React.PropTypes.number,
    cbitemDelete: React.PropTypes.func.isRequired,
  },

  itemSelected: function (EO) {
    this.props.cbitemSelected(this.props.productcode);
  },

  itemDelete: function (EO) {
    EO.stopPropagation();
    confirm(`Удалить товар ${this.props.productname}`)
      ? this.props.cbitemDelete(this.props.productcode)
      : null;
  },

  render: function () {
    return React.DOM.tr(
      {
        className:
          this.props.itemSelected === this.props.productcode
            ? "shopCard select"
            : "shopCard",
        key: this.props.productcode,
        onClick: this.itemSelected,
      },
      React.DOM.td({ className: "productName" }, this.props.productname),
      React.DOM.td({ className: "productPrice" }, this.props.productprice),
      React.DOM.td(
        { className: "productURL" },
        React.DOM.img({ className: "productImg", src: this.props.producturl })
      ),
      React.DOM.td({ className: "productRemain" }, this.props.productremain),
      React.DOM.td(
        { className: "control" },
        React.DOM.button(
          { className: "delete", onClick: this.itemDelete },
          "Удалить"
        )
      )
    );
  },
});
