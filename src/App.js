import React, { Component } from 'react';
import './App.scss';
import Header from './component/Header/Header';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productcount: 0,
    };
  }
  render() {
    return (
      <main className="app">
        <div className="appbody">
          <Header productcount={this.state.productcount} />
        </div>
      </main>
    );
  }
}

export default App;
