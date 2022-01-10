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

  const fetchChamps = async (ids = []) => {
    const path = "/champs";
    let url = path;

    if (ids.length === 1) {
      url = `${path}/${ids[0]}`;
    } else if (ids.length > 1) {
      url = `${path}?id=${ids.join("&id=")}`;
    }

    const res = await fetch(url);
    const data = await res.json();

    return data;
  };

  const deleteChamp = async (id) => {
    const res = await fetch(`/champs/${id}`, {
      method: "DELETE",
    });

    res.status === 200
      ? setChamps(champs.filter((champ) => champ.id !== id))
      : alert("Error Deleting This Champ");
  };

  const toggleChamp = async (id) => {
    const champ = await fetchChamps([id]);
    const updChamp = { ...champ, flag: !champ.flag };
    const res = await fetch(`/champs/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updChamp),
    });

    res.status === 200
      ? setChamps(champs.map((champ) => (champ.id === id ? updChamp : champ)))
      : alert("Error Updating This Champ");
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
    <div className="w-screen min-h-screen antialiased text-gray-400 bg-gray-900">
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
