import React, { Component } from 'react';
import PropType from 'process';
import '../Header/Header';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="headerdes">Store</div>
        <div className="productNumber">{this.props.productcount}</div>
      </div>
    );
  }
}
Header.propTypes = {
  productcount: PropType.number,
};
export default Header;
