import React from "react";
import PropTypes from "prop-types";
import "./igood.css";

class Igood extends React.Component {
  static propTypes = {
    productcode: PropTypes.number.isRequired,
    productname: PropTypes.string.isRequired,
    productprice: PropTypes.number.isRequired,
    producturl: PropTypes.string.isRequired,
    productremain: PropTypes.number.isRequired,
    cbitemSelected: PropTypes.func.isRequired,
    itemSelected: PropTypes.number,
    cbitemDelete: PropTypes.func.isRequired,
  };

  itemSelected = (EO) => {
    this.props.cbitemSelected(this.props.productcode);
  };

  itemDelete = (EO) => {
    EO.stopPropagation();
    confirm(`Удалить товар ${this.props.productname}`)
      ? this.props.cbitemDelete(this.props.productcode)
      : null;
  };
  render() {
    return (
      <tr
        className={
          this.props.itemSelected === this.props.productcode
            ? "shopCard select"
            : "shopCard"
        }
        key={this.props.productcode}
        onClick={this.itemSelected}
      >
        <td className="productName">{this.props.productname}</td>
        <td className="productPrice">{this.props.productprice}</td>
        <td className="productURL">
          <img className="productImg" src={this.props.producturl}></img>
        </td>
        <td className="productRemain">{this.props.productremain}</td>
        <td className="control">
          <button className="add">Редактировать</button>
          <button className="delete" onClick={this.itemDelete}>
            Удалить
          </button>
        </td>
      </tr>
    );
  }
}

export default Igood;
