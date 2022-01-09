import { useState, useEffect } from "react";
import Board from "./Board";
import Quote from "./Quote";
import Champs from "./Champs";

const Game = () => {
  const [champs, setChamps] = useState([]);

  useEffect(() => {
    const getChamps = async () => {
      const champsFromServer = await fetchChamps();
      setChamps(champsFromServer);
    };

    getChamps();
  }, []);

  const fetchChamps = async () => {
    const res = await fetch("/champs");
    const data = await res.json();

    return data;
  };

  const deleteChamp = async (id) => {
    const res = await fetch(`/champs/${id}`, {
      method: "DELETE",
    });

    res.status === 200
      ? setChamps(champs.filter((champ) => champ.id !== id))
      : alert("Error Deleting This Task");
  };

  const toggleChamp = (id) => {
    // TODO JSON-SERVER
    setChamps(
      champs.map((champ) =>
        champ.id === id ? { ...champ, flag: !champ.flag } : champ
      )
    );
  };

  const addChamp = async (champ) => {
    const res = await fetch("/champs", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(champ),
    });

    const data = await res.json();

    setChamps([...champs, data]);
  };

  return (
    <div className="w-screen min-h-screen bg-zinc-800">
      <div className="flex flex-row w-960">
        <div className="basis-1/4">
          <Board />
        </div>
        <div className="basis-3/4">
          <div>
            <Quote />
          </div>
          <div>
            <Champs
              champs={champs}
              onDelete={deleteChamp}
              onToggle={toggleChamp}
              onAdd={addChamp}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;
