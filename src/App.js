import React, { Component } from 'react';
import './index.css';
import Header from'./header.js';
import Movies from './films.js';
import Shows from './shows.js';
import Slide from './slide.js';

class Clone extends Component {
  
  //main render
  render() {
    return (
      <div>
        <Header />
        <Slide />
        <Movies />
        <Shows/>
      </div>
    );
  }
}

export default Clone;
