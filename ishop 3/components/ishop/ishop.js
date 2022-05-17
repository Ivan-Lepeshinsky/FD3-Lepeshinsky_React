import React from "react";
import PropTypes from "prop-types";
import Igood from "../igood/igood";
import Productinfo from "../info/prodInfo";
import "./ishop.css";

class Ishop extends React.Component {
  static propTypes = {
    shopName: PropTypes.string.isRequired,
    product: PropTypes.arrayOf(
      PropTypes.shape({
        productname: PropTypes.string.isRequired,
        productcode: PropTypes.number.isRequired,
        productprice: PropTypes.number.isRequired,
        producturl: PropTypes.string.isRequired,
        productremain: PropTypes.number.isRequired,
      })
    ),
  };

  state = {
    goodsAvailiable: this.props.product,
    itemSelected: null,
    itemEdit: false,
    itemChanged: false,
  };

  cbitemDelete = (code) => {
    let arr = this.state.goodsAvailiable.filter((e) => e.productcode != code);
    this.setState({ goodsAvailiable: arr });
  };

  cbitemSelected = (code) => {
    this.setState({ itemSelected: code });
  };

  cbitemEdit = (code) => {
    this.setState({ itemEdit: code });
  };
  cbitemChanged = (code) => {
    this.setState({ itemChanged: code });
  };
  render() {
    let tableHead = (
      <tr className="shopName">
        <td>{this.props.shopName}</td>
      </tr>
    );
    let tableTitle = (
      <tr className="shopCard">
        <td className="productName">Наименование</td>
        <td className="productPrice">Цена</td>
        <td className="productURL">Фото</td>
        <td className="productRemain">Остаток на складе</td>
        <td className="productRemain">Управление</td>
      </tr>
    );
    let cards = this.state.goodsAvailiable.map((e) => (
      <Igood
        key={e.productcode}
        productcode={e.productcode}
        productname={e.productname}
        productprice={e.productprice}
        producturl={e.producturl}
        productremain={e.productremain}
        cbitemSelected={this.cbitemSelected}
        itemSelected={this.state.itemSelected}
        cbitemDelete={this.cbitemDelete}
        cbitemEdit={this.cbitemEdit}
        itemEdit={this.state.itemEdit}
        itemChanged={this.state.itemChanged}
      />
    ));

    let productInfo = (
      <Productinfo
        itemSelected={this.state.itemSelected}
        availProductInfo={this.state.goodsAvailiable}
        itemEdit={this.state.itemEdit}
        itemChanged={this.state.itemChanged}
        cbitemEdit={this.cbitemEdit}
        cbitemChanged={this.cbitemChanged}
      />
    );

    return (
      <div>
        <table>
          <thead>{tableHead}</thead>
          <tbody>
            {tableTitle}
            {cards}
          </tbody>
        </table>
        <button disabled={this.state.itemChanged == true ? "disabled" : false}>
          Новый товар
        </button>
        <div>{productInfo}</div>
      </div>
    );
  }
}

export default Ishop;
