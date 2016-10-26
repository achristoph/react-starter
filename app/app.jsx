import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router';

// import Home from './home'
import About from './about'
import NavBar from './navbar';
import Content from './content';
import '../css/normalize.css';
import '../css/skeleton.css';
import '../css/main.css';

const Home = () => <div><h1>Home</h1><NavBar /></div>;
// const About = () => <div><h1>About</h1><NavBar /></div>;

class App extends Component {
  constructor() {
    super();
    this.update = this.update.bind(this);
    this.state = { val: 0 };
  }
  componentWillMount() {
    this.setState({ m: 2 });
    console.log('mounting');
  }
  componentDidMount() {
    console.log('mounted');
  }
  componentWillUnmount() {
    console.log('unmounting');
  }
  update() {
    this.setState({ val: this.state.val + 1 });
  }
  render() {
    return (
      <div>
        <NavBar />
        <button onClick={this.update}>
          {this.state.val * this.state.m}
          {this.props.val}
        </button>
        {this.props.description}
        <Content content="data" />
      </div>
    );
  }
}

class Wrapper extends Component {
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
  name: 'app',
  value: 0
}

// render(<Wrapper name="myApp" />, document.getElementById('app'));
let router = <Router history={browserHistory}>
  <Route path="/" component={App}></Route>
  <Route path="/about" component={About}></Route>
</Router>
render(router, document.getElementById('app'));
