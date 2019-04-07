import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

componentWillMount() {
  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.onload = () => {
      this.setState({
          isLoaded: true
      });
  };
  script.src = 
  function(w,d,v3){
    w.chaportConfig = { appId : '5c984a0d8102813e60ae8741' };
    if(w.chaport)return;v3=w.chaport={};v3._q=[];v3._l={};v3.q=function(){v3._q.push(arguments)};v3.on=function(e,fn){if(!v3._l[e])v3._l[e]=[];v3._l[e].push(fn)};
    var s=d.createElement('script');s.type='text/javascript';s.async=true;
    s.src='https://app.chaport.com/javascripts/insert.js';
    var ss=d.getElementsByTagName('script')[0];ss.parentNode.insertBefore(s,ss)}(window, document);
    document.head.appendChild(script);
}

getInitialState() {
  return {
      isLoaded: false
  }
}

class App extends Component {
  render() {
    return (  <div id="body">
    <div id="content">
      <h1><a href="/">Feargal Walsh</a></h1>
      <ul>
        <li class="building">Currently working at <a href="https://www.obo.pm/" target="_blank">Obo</a></li>
        <li class="studied">Studied at <a href="https://www.luc.edu/" target="_blank">Loyola</a> Masters CS </li>
        <li class="lives">Lives in <a href="https://goo.gl/maps/hWSw1iW4oT42" target="_blank">San Francisco</a></li>
        <li class="made">Made in <a href="https://goo.gl/maps/DP63Mgr9iTn" target="_blank">Ireland</a></li>
        <li class="loves">Loves <a href="http://www.ycombinator.com/" target="_blank">YC, </a>Eternal Sunshine of the Spotless Mind, Kanye and Yoga.</li>
        <li class="on">On <a href="https://github.com/feargswalsh92" target="_blank">Github</a>, <a href="https://medium.com/@feargswalsh" target="_blank">Medium</a></li>
      </ul>
    </div>
    <div>
            {
                this.state.isLoaded ? <div>Loaded!</div> : <div>Loading...</div>
            }
      </div>
  </div>
    );
  }
}

export default App;
