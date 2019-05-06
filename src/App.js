import React, { Component } from 'react';
import Container from "./components/Container";
import Subcontainer from "./components/Subcontainer";
import Tile from "./components/Tile";
import './App.scss';

class App extends Component {
  
  state = {
    filler: ["hey ya!", "hey ya!", "hey ya!", "hey ya!", "hey ya!", "hey ya!", "hey ya!", "hey ya!", "hey ya!"]
  }
  
  render() {
    return (
      <Container>
        <Subcontainer>
          {this.state.filler.map(fill => (
            <Tile something={fill} />
          ))}
        </Subcontainer>
      </Container>
    );
  };
}

export default App;
