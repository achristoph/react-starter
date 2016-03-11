import React, { Component } from 'react';
import {render} from 'react-dom';
import NavBar from './navbar';
import Content from './content';
import '../css/normalize.css';
import '../css/skeleton.css';
import '../css/main.css';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <Content/>
      </div>
    );
  }
}
render(<App />, document.getElementById('app'));
