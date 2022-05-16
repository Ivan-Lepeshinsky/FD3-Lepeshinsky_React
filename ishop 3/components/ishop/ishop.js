import React from "react";
import PropTypes from "prop-types";
import Igood from "../igood/igood";
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

  state = { goodsAvailiable: this.props.product, itemSelected: null };

  cbitemDelete = (code) => {
    let arr = this.state.goodsAvailiable.filter((e) => e.productcode != code);
    this.setState({ goodsAvailiable: arr });
  };

  cbitemSelected = (code) => {
    this.setState({ itemSelected: code });
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
      />
    ));

    let productInfo =
      this.state.itemSelected != null ? (
        <div>
          <h3>{this.props.product[this.state.itemSelected].productname}</h3>
          <span>
            Название:
            {this.props.product[this.state.itemSelected].productname}
          </span>
          <br />
          <span>
            Остаток:
            {this.props.product[this.state.itemSelected].productremain}
          </span>
        </div>
      ) : null;

    return (
      <div>
        <table>
          <thead>{tableHead}</thead>
          <tbody>
            {tableTitle}
            {cards}
          </tbody>
        </table>
        <button disabled="disabled">добавить товар</button>
        <div>{productInfo}</div>
      </div>
    );
  }
}

export default Ishop;
