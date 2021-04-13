import React, { Component } from 'react';
import { Provider } from "./Context";
import Header from "./Header";
import Player from "./Player";
import AddPlayerForm from "./AddPlayerForm";
import PlayerList from './PlayerList';

class App extends Component {
  state = {
    players: [
      {
        name: "Guil",
        score: 0,
        id: 1
      },
      {
        name: "Treasure",
        score: 0,
        id: 2
      },
      {
        name: "Ashley",
        score: 0,
        id: 3
      },
      {
        name: "James",
        score: 0,
        id: 4
      }
    ]
  };

  handleScoreChange = (delta, index) => {
    this.setState(prevState => {
      const updatedPlayers = [...prevState.players];
      const updatedPlayer = { ...updatedPlayers[index] };

      updatedPlayer.score += delta;
      updatedPlayers[index] = updatedPlayer;

      return {
        players: updatedPlayers
      }
    });
  }

  prevPlayerId = 4;

  handleRemovePlayer = (id) => {
    this.setState(prevState => {
      return {
        players: prevState.players.filter(p => p.id !== id)
      };
    });
  }

  handleAddPlayer = (name) => {
    this.setState((prevState) => {
      return {
        players: [
          ...prevState.players,
          {
            name,
            score: 0,
            id: this.prevPlayerId += 1
          }
        ]

      }
    })
  }

  getHighestScore = () => {
    let highestScore;

    const scores = this.state.players.map(p => p.score);
    highestScore = Math.max(...scores);

    return highestScore > 0 ? highestScore : null;
  }

  render() {
    const highestScore = this.getHighestScore();

    return (
      <Provider value={this.state.players}>
        <div className="scoreboard">
          <Header />

          {/* Players list */}
          <PlayerList
            removePlayer={this.handleRemovePlayer}
            changeScore={this.handleScoreChange}
            highestScore={highestScore}
          />
          <AddPlayerForm
            addPlayer={this.handleAddPlayer}
          />
        </div>
      </Provider>
    );
  }
}

export default App;
