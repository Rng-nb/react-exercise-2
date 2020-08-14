import React, { Component } from 'react';
import PropType from 'prop-types';
import '../Product/Product.css';
import 'bootstrap/dist/css/bootstrap.css';
import pic from '../../assets/product_image_placeholder.png';
class Product extends Component {
  render() {
    return (
      <div className="phoneinfo">
        <div className="phonename">{this.props.name}</div>
        <div className="phonepic">
          <img src={pic} alt="" />
        </div>
        <div className="phonebuy">
          <div className="phoneprice">{this.props.price}</div>
          <button
            className="btn btn-primary mybutton"
            onClick={this.props.onBuy}
          >
            add to car
          </button>
        </div>
      </div>
    );
  }
}

Product.propTypes = {
  name: PropType.string,
  price: PropType.string,
  onBuy: PropType.func,
};
export default Product;
