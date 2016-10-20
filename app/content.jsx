import React, { Component } from 'react';
import { render } from 'react-dom';

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = { content: 'My Content' };
    this.update = this.update.bind(this);
  }

  update(e) {
    this.setState({ content: e.target.value });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <Widget content={this.state.content} update={this.update} />
        </div>
      </div>
    );
  }
}

const Widget = (props) => {
  return (
    <div>
      <input type="text" onChange={props.update} />
      <h1>{props.content}</h1>
    </div>
  );
}

export default Content;
