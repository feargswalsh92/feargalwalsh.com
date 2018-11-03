import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (  <div id="body">
    <div id="content">
      <h1><a href="/">Feargal Walsh</a></h1>
      <ul>
        <li class="building">Currently working at <a href="https://www.obo.pm/" target="_blank">Obo</a></li>
        <li class="studied">Studied at <a href="https://www.luc.edu/" target="_blank">Loyola</a> Masters CS </li>
        <li class="lives">Lives in <a href="https://goo.gl/maps/hWSw1iW4oT42" target="_blank">San Mateo</a>, works out of <a href="https://goo.gl/maps/6XYusnNUhK82" target="_blank">the local library(sometimes)</a></li>
        <li class="made">Made in <a href="https://goo.gl/maps/DP63Mgr9iTn" target="_blank">Ireland</a></li>
        <li class="loves">Loves <a href="http://www.ycombinator.com/" target="_blank">YC, </a>Eternal Sunshine of the Spotless Mind, Kanye and Yoga.</li>
        <li class="on">On <a href="https://github.com/feargswalsh92" target="_blank">Github</a>, <a href="https://medium.com/@feargswalsh" target="_blank">Medium</a></li>
      </ul>
    </div>
  </div>
    );
  }
}

export default App;
 