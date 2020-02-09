import React, { Component } from 'react';
import {
  Card, CardImg, CardBody, CardTitle, CardSubtitle
} from 'reactstrap';
import solarBodies from './solarBodies.json'
import './assets/css/App.css';
import SolarBodyCard from './components/SolarBodyCard.jsx';
import ScoreCard from './components/ScoreCard.jsx'

class App extends Component {
  // setting initial state
  state = {
    // importing json data
    solarBodies,
    // what's been clicked
    clicked: [],
    // score counter
    score: 0,
    // high score counter
    highScore: 0
  }

  oLetsDoIt = id => {
    if (!this.state.clicked.includes(id)) {
      this.state.clicked.push(id);
      this.setState({
        score: this.state.score + 1
      });
      if (this.state.score >= this.state.highScore) {
        this.setState({
          highScore: this.state.score + 1
        });
      }
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
            <CardSubtitle>Instructions</CardSubtitle>
            <ScoreCard score={this.state.score} highScore={this.state.highScore} />
            {shuffled.map(item => (
              <SolarBodyCard
                key={item.id}
                id={item.id}
                image={require('./assets/images' + item.image)}
                name={item.name}
                onImgClick={() => this.oLetsDoIt(item.id)}
              />
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
