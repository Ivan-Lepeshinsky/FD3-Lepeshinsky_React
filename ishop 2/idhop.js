let ShopComponent = React.createClass({
  displayName: "IshopBlock",

  propTypes: {
    shopName: React.PropTypes.string.isRequired,
    product: React.PropTypes.arrayOf(
      React.PropTypes.shape({
        productname: React.PropTypes.string.isRequired,
        productcode: React.PropTypes.number.isRequired,
        productprice: React.PropTypes.number.isRequired,
        producturl: React.PropTypes.string.isRequired,
        productremain: React.PropTypes.number.isRequired,
      })
    ),
  },

  getInitialState: function () {
    return {
      itemSelected: null,
      itemDelete: [],
    };
  },

  cbitemDelete: function (code) {
    let arr = this.state.itemDelete.slice();
    arr.push(code);
    arr.sort();
    this.setState({ itemDelete: arr });
  },

  cbitemSelected: function (code) {
    this.setState({ itemSelected: code });
  },

  render: function () {
    let tableHead = React.DOM.tr(
      { className: shopName },
      React.DOM.td(null, this.props.shopName)
    );
    let tableTitle = React.DOM.tr(
      { className: "shopCard" },
      React.DOM.td({ className: "productName" }, "Наименование"),
      React.DOM.td({ className: "productPrice" }, "Цена"),
      React.DOM.td({ className: "productURL" }, "Фото"),
      React.DOM.td({ className: "productRemain" }, "Остаток на складе")
    );

    let cards = this.props.product.map((e) =>
      React.createElement(shopProdact, {
        key: e.productcode,
        productcode: e.productcode,
        productname: e.productname,
        productprice: e.productprice,
        producturl: e.producturl,
        productremain: e.productremain,
        cbitemSelected: this.cbitemSelected,
        itemSelected: this.state.itemSelected,
        cbitemDelete: this.cbitemDelete,
        itemDelete: this.state.itemDelete,
      })
    );

    return React.DOM.table(
      null,
      React.DOM.thead(null, tableHead),
      null,
      React.DOM.tbody(null, tableTitle, cards)
    );
  },
});
