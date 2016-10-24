import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom'
import NavBar from './navbar';
import Content from './content';
import '../css/normalize.css';
import '../css/skeleton.css';
import '../css/main.css';

class App extends Component {
  componentWillMount() {
    console.log('mounting');
  }
  componentDidMount() {
    console.log('mounted');
  }
  componentWillUnmount() {
    console.log('unmounting');
  }
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

class Wrapper extends Component {
  constructor() {
    super();
  }
  mount() {
    ReactDOM.render(<App />, document.getElementById('a'))
  }
  unmount() {
    ReactDOM.unmountComponentAtNode(document.getElementById('a'))
  }
  render() {
    return (
      <div>
        <button onClick={this.mount.bind(this)}>Mount</button>
        <button onClick={this.unmount.bind(this)}>Unmount</button>
        <div id="a"></div>
      </div>
    )
  }
}

App.propTypes = {
  name: React.PropTypes.string.isRequired,
}

App.defaultProps = {
  description: 'My Project',
}
render(<Wrapper name="myApp" />, document.getElementById('app'));
// render(<App name="myApp" />, document.getElementById('app'));
