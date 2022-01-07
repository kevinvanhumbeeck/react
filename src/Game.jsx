import React from "react";
import Board from "./Board";
import Quote from "./Quote";
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

  toggleChamp = (id) => {
    this.setState({
      champs: this.state.champs.map((champ) =>
        champ.id === id ? { ...champ, flag: !champ.flag } : champ
      ),
    });
  };

  log() {}

  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>
            <Quote />
          </div>
          <div>
            <Champs
              champs={this.state.champs}
              onDelete={this.deleteChamp}
              onToggle={this.toggleChamp}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Game;
