import React, { Component } from 'react';
import './App.css';
import resumeWord from '/Users/feargalwalsh/Downloads/feargalwalsh.com/src/resumeWord.docx';
import resumePDF from  '/Users/feargalwalsh/Downloads/feargalwalsh.com/src/resumePDF.pdf';


class App extends Component {
  state = { isLoaded: true };
  render() {
    return (  <div id="body">
    <div id="content">
      <h1><a href="/">Feargal Walsh</a></h1>
      <ul>
        <li class="building">currently working at <a href="https://www.obo.pm/" target="_blank">Obo</a></li>
        <li class="studied">studied at <a href="https://www.luc.edu/" target="_blank">Loyola</a> Masters CS </li>
        <li class="lives">lives in <a href="https://goo.gl/maps/hWSw1iW4oT42" target="_blank">San Francisco</a></li>
        <li class="made">made in <a href="https://goo.gl/maps/DP63Mgr9iTn" target="_blank">Ireland</a></li>
        <li class="loves">loves <a href="http://www.ycombinator.com/" target="_blank">YC, </a> Kanye and Yoga.</li>
        <li class="on">on <a href="https://github.com/feargswalsh92" target="_blank">Github </a>and <a href="https://medium.com/@feargswalsh" target="_blank">Medium.</a></li>
        <li class="resume">you can download my resume in <a href = {resumeWord} target = "_blank"> word </a> or <a href = {resumePDF} target = "_blank"> pdf. </a></li>
      </ul>
    </div>
  </div>
    );
  }
}

export default App;
