import React, { Component } from 'react';
var Image1 = require('react-svg?es5=1!./img/logo.svg');

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Image1 width="200" />

          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );



  }
}

export default App;
