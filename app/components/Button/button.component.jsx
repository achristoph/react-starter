import React, { Component } from 'react';
import {render} from 'react-dom';
import styles from './button.component.css';

class ButtonComponent extends Component {
  render() {
    return (
      <div>
      <input type="submit" value="Submit" className="text" />
      </div>
    );
  }
}

export default ButtonComponent;
