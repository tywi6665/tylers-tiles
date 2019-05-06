import React, { Component } from 'react';
import Container from "./components/Container";
import Subcontainer from "./components/Subcontainer";
import Tile from "./components/Tile";
import './App.scss';

class App extends Component {

  state = {
    filler: [{
      id: 1,
      title: "Color Gradient",
      text: "hey ya!",
    }, {
      id: 2,
      title: "Color Gradient",
      text: "hey ya!",
    },
    {
      id: 3,
      title: "Color Gradient",
      text: "hey ya!",
    },
    {
      id: 4,
      title: "Color Gradient",
      text: "hey ya!",
    },
    {
      id: 5,
      title: "Color Gradient",
      text: "hey ya!",
    },
    {
      id: 6,
      title: "Color Gradient",
      text: "hey ya!",
    },
    {
      id: 7,
      title: "Color Gradient",
      text: "hey ya!",
    },
    {
      id: 8,
      title: "Color Gradient",
      text: "hey ya!",
    },
    {
      id: 9,
      title: "Color Gradient",
      text: "hey ya!",
    }]
  }

  render() {
    return (
      <Container>
        <Subcontainer>
          {this.state.filler.map(fill => (
            <Tile className={fill.id} title={fill.title} something={fill.text} key={fill.id} />
          ))}
        </Subcontainer>
      </Container>
    );
  };
}

export default App;
