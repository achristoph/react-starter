import React, { Component } from 'react';
import {render} from 'react-dom';
import NavBar from './components/navbar';
import Content from './components/content';
import './styles/normalize.css';
import './styles/skeleton.css';
import './styles/main.css';
import Hello from './components/hello/hello.component';
import Button from './components/button/button.component'
class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <Content/>
        <Hello framework="React" />
        <Button name="Button" />
      </div>
    );
  }
}
render(<App />, document.getElementById('app'));
