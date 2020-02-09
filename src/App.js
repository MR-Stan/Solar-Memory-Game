import React, { Component } from 'react';
import {
  Card, CardImg, CardText, CardBody, CardTitle,
} from 'reactstrap';
import solarBodies from './solarBodies.json'
import './assets/css/App.css';

class App extends Component {
  // setting initial state
  state = {
    solarBodies, // importing json data
    clicked: [], // keeps track of what's been clicked 
    score: 0, // score counter
    highScore: 0 // high score counter
  }

  oLetsDoIt = id => {
    if (!this.state.clicked.includes(id)) {
      this.state.clicked.push(id);
      this.setState({
        score: this.state.score + 1,
        highScore: function () {
          if (this.score > this.state.highScore) {
            return this.score;
          }
        }
      });
    }
    else {
      this.setState({
        clicked: [],
        score: 0
      });
    }
  }

  render() {
    const shuffled = shuffle(this.state.solarBodies);
    return (
      <div>
        <Card>
          <CardImg></CardImg>
          <CardBody>
            <CardTitle>Welcome</CardTitle>
            <CardText>Instructions</CardText>
            {shuffled.map(item => (
              <Card key={item.id + 1}>
                <CardImg key={item.id} src={item.image}></CardImg>
                {<CardText key={item.id - 1}>Test</CardText>}
              </Card>
            ))}
          </CardBody>
        </Card>
      </div>
    )
  }

}


function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const tempArr = array[i];
    array[i] = array[j];
    array[j] = tempArr;
  }
  return array;
}

export default App;
