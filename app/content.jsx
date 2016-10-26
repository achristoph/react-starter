import React, { Component } from 'react';
import { render, ReactDOM } from 'react-dom';

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = { content: 'My Content', red: 0 };
    this.update = this.update.bind(this);
  }

  update(e) {
    this.setState({ content: e.target.value, red: this.refs.red.value });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <Widget content={this.state.content} update={this.update} />
          <Slider ref="red" update={this.update} />
          {this.state.red}
        </div>
      </div>
    );
  }
}
class Slider extends React.Component {
  render() {
    return (
      <input type="range" min="0" max="255" onChange={this.props.update} />
    );
  }
}
const Widget = (props) => {
  return (
    <div>
      <input type="text" onChange={props.update} />
      <h5>{props.content}</h5>
    </div>
  );
}
class Button extends React.Component {
  render(){
    return <button>{this.props.children}</button>
  }
}
export default Content;
