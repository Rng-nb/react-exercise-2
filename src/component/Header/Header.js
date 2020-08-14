import React, { Component } from 'react';
import PropType from 'process';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="headerdes">Store</div>
        <div className="productNumber">{this.props.productc}</div>
      </div>
    );
  }
}
Header.propTypes = {
  productc: PropType.number,
};
export default Header;
