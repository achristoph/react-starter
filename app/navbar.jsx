import React, { Component } from 'react';
import {render} from 'react-dom';
import { Link } from 'react-router';

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar">
        <div className="logo"/>
        <div className="container">
          <ul className="navbar-list">
            <li className="navbar-item"><Link to="/" className="navbar-link">Home</Link></li>
            <li className="navbar-item"><Link to="/about" className="navbar-link">About</Link></li>
            <li className="navbar-item"><a className="navbar-link" href="#intro">Contact</a></li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
