// import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'
import Navbar from './Components/Navbar/Navbar';
import News from './Components/News/News';

export default class App extends Component {
  
  render() {
    return (
      <div>
        <Navbar></Navbar>
        <News></News>
      </div>
    )
  }
}
