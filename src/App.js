import React, { Component } from 'react';
import Container from "./components/Container";
import Subcontainer from "./components/Subcontainer";
import Tile from "./components/Tile";
import './App.scss';

class App extends Component {

  state = {
    filler: [{
      id: 1,
      text: "hey ya!",
    }, {
      id: 2,
      text: "hey ya!",
    },
    {
      id: 3,
      text: "hey ya!",
    },
    {
      id: 4,
      text: "hey ya!",
    },
    {
      id: 5,
      text: "hey ya!",
    },
    {
      id: 6,
      text: "hey ya!",
    },
    {
      id: 7,
      text: "hey ya!",
    },
    {
      id: 8,
      text: "hey ya!",
    },
    {
      id: 9,
      text: "hey ya!",
    },]
  }

  render() {
    return (
      <Container>
        <Subcontainer>
          {this.state.filler.map(fill => (
            <Tile className={fill.id} something={fill.text} key={fill.id} />
          ))}
        </Subcontainer>
      </Container>
    );
  };
}

export default App;
