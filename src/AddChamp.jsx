import { useState } from "react";

const AddChamp = ({ onAdd }) => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [flag, setFlag] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      alert("Please add a task");
      return;
    }

    onAdd({ name, type, flag });

    setName("");
    setType("");
    setFlag(false);
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Add Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="text"
        placeholder="Add Type"
        value={type}
        onChange={(e) => setType(e.target.value)}
      />

      <input
        type="checkbox"
        checked={flag}
        value={flag}
        onChange={(e) => setFlag(e.currentTarget.checked)}
      />

      <input type="submit" value="Save Champ" className="btn btn-block" />
    </form>
  );
};

export default AddChamp;
