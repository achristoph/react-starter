import NavBar from './navbar';
import React from 'react';
import { Router, Route, Link, hashHistory } from 'react-router';
const Contact = (props) => <div><h1>Contact {props.params.id}</h1></div>;
export default Contact;
