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
    cbitemEdit: PropTypes.func.isRequired,
  };
  itemEdit = (EO) => {
    this.props.cbitemEdit(false);
  };

  render() {
    return this.props.itemSelected != null ? (
      <div>
        <h3>{this.props.availProductInfo.productname}</h3>
        {this.props.itemEdit == true ? (
          <div className="info">
            <span>Наименование</span>
            <input value={this.props.availProductInfo.productname} />
            <span>Цена</span>
            <input value={this.props.availProductInfo.productprice} />
            <span>URL фото</span>
            <input value={this.props.availProductInfo.producturl} />
            <span>Остаток</span>
            <input value={this.props.availProductInfo.productremain} />
            <button onClick={this.itemEdit}>Сохранить</button>
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
