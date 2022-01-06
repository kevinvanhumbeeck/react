/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Board from "./Board";
import Champs from "./Champs";

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      champs: require("./Champs-sample.json"),
    };
  }

  deleteChamp = (id) => {
    this.setState({
      champs: this.state.champs.filter((champ) => champ.id !== id),
    });
  };

  showState = (id) => {
    this.setState({
      champs: this.state.champs.map((champ) =>
        champ.id === id ? { ...champ, reminder: !champ.reminder } : champ
      ),
    });
  };

  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>
            <a href="#" className="neon-button">
              Neon
            </a>
          </div>
          <div>
            <Champs
              champs={this.state.champs}
              onDelete={this.deleteChamp}
              onShow={this.showState}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Game;
