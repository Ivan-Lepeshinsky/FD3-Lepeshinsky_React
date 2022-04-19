let ShopComponent = React.createClass({
  displayName: "IshopBlock",

  propTypes: {
    shopName: React.PropTypes.string.isRequired,
    product: React.PropTypes.arrayOf(
      React.PropTypes.shape({
        productname: React.PropTypes.string.isRequired,
        productcode: React.PropTypes.number.isRequired,
        productprice: React.PropTypes.oneOfType([
          React.PropTypes.string.isRequired,
          React.PropTypes.number.isRequired,
        ]),
        producturl: React.PropTypes.string.isRequired,
        productremain: React.PropTypes.string.isRequired,
      })
    ),
  },

  render: function () {
    let tableHead = React.DOM.tr(
      { className: shopName },
      React.DOM.td(null, this.props.shopName)
    );
    let cards = [];
    this.props.product.forEach((e) => {
      let card = React.DOM.tr(
        { className: "shopCard", key: e.productcode },
        React.DOM.td({ className: "productName" }, e.productname),
        React.DOM.td({ className: "productPrice" }, e.productprice),
        React.DOM.td(
          { className: "productURL" },
          e.producturl != "Фото"
            ? React.DOM.img({ className: "productImg", src: e.producturl })
            : e.producturl
        ),
        React.DOM.td({ className: "productRemain" }, e.productremain)
      );
      cards.push(card);
    });

    return React.DOM.table(
      null,
      React.DOM.thead(null, tableHead),
      null,
      React.DOM.tbody(null, cards)
    );
  },
});
