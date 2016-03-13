import React, { Component } from 'react';
import {render} from 'react-dom';

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar">
        <div className="logo"/>
        <div className="container">
          <ul className="navbar-list">
            <li className="navbar-item"><a className="navbar-link" href="#intro">Intro</a></li>
            <li className="navbar-item"><a className="navbar-link" href="#intro">Code</a></li>
            <li className="navbar-item"><a className="navbar-link" href="#intro">Example</a></li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;