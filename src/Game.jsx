import { useState } from "react";
import Board from "./Board";
import Quote from "./Quote";
import Champs from "./Champs";
import AddChamp from "./AddChamp";

const Game = () => {
  const [champs, setChamps] = useState(require("./Champs-sample.json"));

  const deleteChamp = (id) => {
    setChamps(champs.filter((champ) => champ.id !== id));
  };

  const toggleChamp = (id) => {
    setChamps(
      champs.map((champ) =>
        champ.id === id ? { ...champ, flag: !champ.flag } : champ
      )
    );
  };

  const addChamp = (champ) => {
    setChamps([...champs, champ]);
  };

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
            champs={champs}
            onDelete={deleteChamp}
            onToggle={toggleChamp}
          />
          <AddChamp onAdd={addChamp} />
        </div>
      </div>
    </div>
  );
};

export default Game;
