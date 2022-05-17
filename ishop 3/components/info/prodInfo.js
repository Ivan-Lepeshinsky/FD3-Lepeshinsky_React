import React from "react";
import PropTypes from "prop-types";
import "./prodInfo.css";

class Productinfo extends React.Component {
  static propTypes = {
    itemSelected: PropTypes.number,
    availProductInfo: PropTypes.shape({
      productname: PropTypes.string.isRequired,
      productcode: PropTypes.number.isRequired,
      productprice: PropTypes.number.isRequired,
      producturl: PropTypes.string.isRequired,
      productremain: PropTypes.number.isRequired,
    }),
    itemEdit: PropTypes.bool.isRequired,
    itemChanged: PropTypes.bool.isRequired,
    cbitemEdit: PropTypes.func.isRequired,
  };

  state = { availProductInfo: this.props.availProductInfo };

  itemEdit = (EO) => {
    this.props.cbitemEdit(false);
  };
  itemChanged = (EO) => {
    // this.props.itemChanged(true);
  };

  render() {
    return this.props.itemSelected != null ? (
      <div>
        <h3>{this.props.availProductInfo.productname}</h3>
        {this.props.itemEdit == true ? (
          <div className="info">
            <span>Наименование</span>
            <input
              value={this.props.availProductInfo.productname}
              onChange={this.itemChanged}
            />
            <span>Цена</span>
            <input
              value={this.props.availProductInfo.productprice}
              onChange={this.itemChanged}
            />
            <span>URL фото</span>
            <input
              value={this.props.availProductInfo.producturl}
              onChange={this.itemChanged}
            />
            <span>Остаток</span>
            <input
              value={this.props.availProductInfo.productremain}
              onChange={this.itemChanged}
            />
            <button onClick={this.itemEdit}>Сохранить</button>
            <button onClick={this.itemEdit}>Отмена</button>
          </div>
        ) : (
          <div className="info">
            <span>
              Название:
              {this.props.availProductInfo.productname}
            </span>
            <br />
            <span>
              Остаток:
              {this.props.availProductInfo.productremain}
            </span>
          </div>
        )}
      </div>
    ) : null;
  }
}

export default Productinfo;
