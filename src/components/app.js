import React, { Component } from 'react';
import Navbar from './navbar';
import Days from './days';
import '../App.css';

export default class App extends Component {
  render() {
    return (
      <div className='App'>
        <Navbar />
        <div className="container">
          <h2>Add your favorite TV shows to keep track of when new episodes air!</h2>
          <Days />
        </div>
      </div>
    );
  }
}
