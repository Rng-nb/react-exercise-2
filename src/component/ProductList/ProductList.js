import React, { Component } from 'react';
import Product from '../Product/Product';
import PropType from 'prop-types';
import '../ProductList/ProductList.css';

class ProductList extends Component {
  render() {
    return (
      <div className="productlist">
        <div className="productname">{this.props.producttype}</div>
        <div className="productlistflex">
          {this.props.products.map((item) => (
            <Product
              key={item.name}
              name={item.name}
              price={item.price}
              onBuy={this.props.onIncre}
            />
          ))}
        </div>
      </div>
    );
  }
}

ProductList.propTypes = {
  producttype: PropType.string,
  products: PropType.arrayOf(PropType.object),
  onIncre: PropType.func,
};
export default ProductList;
