import React, { Component } from 'react';
import './App.scss';
import Header from './component/Header/Header';
import ProductList from './component/ProductList/ProductList';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productIphone: [],
      productHuawei: [],
      count: 0,
    };
  }

  dealData = (data) => {
    let productiphone = [];
    let producthuawei = [];

    for (let i = 0; i < data.length; ++i) {
      if (data[i].category === 'iPhone') {
        productiphone.push({ name: data[i].name, price: data[i].price });
      } else {
        producthuawei.push({ name: data[i].name, price: data[i].price });
      }
    }
    this.setState({
      productHuawei: producthuawei,
      productIphone: productiphone,
    });
  };
  componentDidMount() {
    fetch('http://localhost:3000/products')
      .then((response) => response.json())
      .then((data) => {
        this.dealData(data);
      });
  }
  handleIncre = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  render() {
    return (
      <main className="app">
        <div className="appbody">
          <Header productc={this.state.count} />
          <ProductList
            products={this.state.productIphone}
            producttype={'IPhone'}
            onIncre={this.handleIncre}
          />
          <ProductList
            products={this.state.productHuawei}
            producttype={'HuaWei'}
            onIncre={this.handleIncre}
          />
        </div>
      </main>
    );
  }
}

export default App;
