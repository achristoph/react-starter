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
            <li className="navbar-item"><Link to="/" activeStyle={{color:'green'}} className="navbar-link">Home</Link></li>
            <li className="navbar-item"><Link to="/about" activeStyle={{color:'green'}} className="navbar-link">About</Link></li>
            <li className="navbar-item"><Link to="/about/contact" activeStyle={{color:'green'}} className="navbar-link">Contact</Link></li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
