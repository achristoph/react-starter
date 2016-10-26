import NavBar from './navbar';
import React from 'react';

const About = (props) => <div><NavBar /><h1>About {props.params.id}</h1>{props.children}</div>;
export default About;
