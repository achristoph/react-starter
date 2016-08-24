import React, { Component } from 'react';
import {render} from 'react-dom';

class Content extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="twelve column">Hello World</div>
        </div>
      </div>
    );
  }
}

export default Content;
