import React, { Component } from 'react';
import { render } from 'react-dom';
import NavBar from './navbar';
import Content from './content';
import '../css/normalize.css';
import '../css/skeleton.css';
import '../css/main.css';

class App extends Component {

  render() {
    return (
      <div>
        <NavBar />
          {this.props.description}
        <Content content="data" />
      </div>
    );
  }
}

App.propTypes = {
  name: React.PropTypes.string.isRequired,
}

App.defaultProps = {
  description: 'My Project',
}

render(<App name="myApp" />, document.getElementById('app'));
