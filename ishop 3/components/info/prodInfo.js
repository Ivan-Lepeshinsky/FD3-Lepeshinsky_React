import React from "react";
import PropTypes from "prop-types";
import "./prodInfo.css";

class Productinfo extends React.Component {
  static propTypes = {
    itemSelected: PropTypes.number,
    availProductInfo: PropTypes.arrayOf(
      PropTypes.shape({
        productname: PropTypes.string.isRequired,
        productcode: PropTypes.number.isRequired,
        productprice: PropTypes.number.isRequired,
        producturl: PropTypes.string.isRequired,
        productremain: PropTypes.number.isRequired,
      })
    ),
    itemEdit: PropTypes.bool.isRequired,
    itemChanged: PropTypes.bool.isRequired,
    cbitemEdit: PropTypes.func.isRequired,
    cbitemChanged: PropTypes.func.isRequired,
  };

  state = { availProductInfo: this.props.availProductInfo };

  itemEdit = (EO) => {
    this.props.cbitemEdit(false);
  };
  itemChanged = (EO) => {
    let value = EO.target.value;
    let id = EO.target.id;
    let valueChanged = this.state.availProductInfo;
    valueChanged[this.props.itemSelected][id] = value;
    this.setState({ availProductInfo: valueChanged });
    this.props.cbitemChanged(true);
  };

  render() {
    return this.props.itemSelected != null ? (
      <div>
        <h3>
          {this.state.availProductInfo[this.props.itemSelected].productname}
        </h3>
        {this.props.itemEdit == true ? (
          <div className="info">
            <span>Наименование</span>
            <input
              value={
                this.state.availProductInfo[this.props.itemSelected].productname
              }
              onChange={this.itemChanged}
              id="productname"
            />
            <span>Цена</span>
            <input
              value={
                this.state.availProductInfo[this.props.itemSelected]
                  .productprice
              }
              onChange={this.itemChanged}
              id="productprice"
            />
            <span>URL фото</span>
            <input
              value={
                this.state.availProductInfo[this.props.itemSelected].producturl
              }
              onChange={this.itemChanged}
              id="producturl"
            />
            <span>Остаток</span>
            <input
              value={
                this.state.availProductInfo[this.props.itemSelected]
                  .productremain
              }
              onChange={this.itemChanged}
              id="productremain"
            />
            <button onClick={this.itemEdit}>Сохранить</button>
            <button onClick={this.itemEdit}>Отмена</button>
          </div>
        ) : (
          <div className="info">
            <span>
              Название:
              {this.state.availProductInfo[this.props.itemSelected].productname}
            </span>
            <br />
            <span>
              Остаток:
              {
                this.state.availProductInfo[this.props.itemSelected]
                  .productremain
              }
            </span>
          </div>
        )}
      </div>
    ) : null;
  }
}

export default Productinfo;
