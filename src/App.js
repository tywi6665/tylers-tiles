import React, { Component } from 'react';
import Container from "./components/Container";
import Subcontainer from "./components/Subcontainer";
import Tile from "./components/Tile";
import './App.scss';

class App extends Component {

  state = {
    questions: []
  };

  componentDidMount() {
    this.fetchData()
  }

  fetchData = () => {
    fetch("https://opentdb.com/api.php?amount=9&category=17&type=multiple", {
      method: "get"
    }).then(res => {
      return res.json();
    }).then(data => {
      this.setState({ questions: data.results })
    });
  };

  render() {
    return (
      <Container>
        <Subcontainer>
          {this.state.questions.map((question, i) => (
            <Tile className={i} 
              title={question.question.replace(/&quot;/g, "").replace(/&#039/g, "")} 
              incorrectAnswers={question.incorrect_answers}
              correctAnswer={question.correct_answer} 
              key={i}
              />
          ))}
        </Subcontainer>
      </Container>
    );
  };
}

export default App;
