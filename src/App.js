import React, { Component } from 'react';
import './App.css';
import Character from './components/characters/index';



var characterArray = [

  {
    name: "Larry the 'Drunken fu Master'",
    attack: 50,
    quote: "i..is..Larry...",
    healthPoints: 100,
    counterAttack: 10,
    image: "https://i.pinimg.com/originals/08/40/44/084044820134d07109d72db7383790b2.gif"
    //image: 'https://ih0.redbubble.net/image.384728485.0260/sticker,375x360-bg,ffffff.u5.png'
  },
  {
    name: "Sally the 'Melt n pet'",
    attack: 20,
    quote: "Hello. I am Sally. I like melting things and staring at things in a creepy manner.",
    healthPoints: 100,
    counterAttack: 5,
    image: "https://media.giphy.com/media/26xBK9cIkUSQ104k8/source.gif"
    // image: "https://orig00.deviantart.net/901a/f/2014/308/7/3/magic_pizza__by_mmidori31-d858pn8.gif"
  },
  {
    name: "Henry and The El Niño",
    attack: 10,
    quote: "Hi, I'm Henry and this is my friend THE EL NINO.",
    healthPoints: 100,
    counterAttack: 10,
    image: "https://media.giphy.com/media/l3q2tvaYp4KseN22A/source.gif"
    //image: "https://ih0.redbubble.net/image.498597179.5929/sticker,375x360-bg,ffffff.u2.png"
  },
  {
    name: "Abby the 'Bowler'",
    attack: 100,
    quote: "I'm Abby. I like bowling every Saturday Night.",
    healthPoints: 100,
    counterAttack: 15,
    image: "https://media.giphy.com/media/d1FL4zXfIQZMWFQQ/giphy.gif"
    //image: "https://i.pinimg.com/originals/86/ae/0b/86ae0b2400c92d333751c8d9a9ae68e4.png"
  },
  {
    name: "Bob",
    attack: 5,
    quote: "I'm Bob. You can call me Bobby for short.",
    healthPoints: 100,
    counterAttack: 5,
    image: "https://media.giphy.com/media/l3q2rXZur7pydrDwI/source.gif"
    //   //image: "https://i.pinimg.com/originals/86/ae/0b/86ae0b2400c92d333751c8d9a9ae68e4.png"
  }
];


class App extends Component {
  state = {
    selectedChar:null
  };

  handleCharClick = (name) => {
    this.setState({selectedChar:name});
  };


  render() {
    return (
      <div className="App">
        <h1 className="text-center box w3-container w3-container w3-center w3-animate-bottom">
          <strong>The Menu Game</strong>
        </h1>

        <div className="container box rounded menutwo ">

          <h3 style={{color:"black", fontSize:"40px"}}>Choose your lunch player...</h3>
          <div id="characters">
            {characterArray.map(e => <Character name={e.name} img={e.image} handleClick={this.handleCharClick} />)}
          </div>


        </div>
      </div>
    );
  }
}



export default App;
