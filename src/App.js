import React, { Component } from 'react';
import './App.css';







class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="text-center box w3-container w3-container w3-center w3-animate-bottom">
    <strong>The Menu Game</strong>
  </h1>  

  <div className="container box header menuone w3-container w3-center w3-animate-opacity ">
    <h2 className="section-heading col-sm w3-container w3-center w3-animate-opacity">
      Welcome! This is a game (not a menu for a specialty shop.)
    </h2>
    <h6 className="col-sm">To play the game, start by choosing a lunch character. Then an opponent will be chosen for you.
      Press
      the food fight button to start the fun!</h6>
      <a className="navbar-brand text-uppercase text-expanded font-weight-bold d-lg-none" href="#">.</a>
  </div>
      </div>
    );
  }
}



export default App;
