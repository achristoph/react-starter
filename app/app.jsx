import React, { Component } from 'react';
import {render} from 'react-dom';
import NavBar from './navbar';
import Content from './content';
import '../css/normalize.css';
import '../css/skeleton.css';
import '../css/main.css';
import Hello from './hello';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <Content/>
        <Hello compiler="TypeScript" framework="React" />
      </div>
    );
  }
}
render(<App />, document.getElementById('app'));
