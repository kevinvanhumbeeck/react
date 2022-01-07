import { useState } from "react";
import "./AddChamp.css";

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
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>
          Name
          <input
            type="text"
            placeholder="Add Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
      </div>
      <div className="form-control">
        <label>
          Type
          <input
            type="text"
            placeholder="Add Type"
            value={type}
            onChange={(e) => setType(e.target.value)}
          />
        </label>
      </div>
      <div className="form-control form-control-check">
        <label>
          Active
          <input
            type="checkbox"
            checked={flag}
            value={flag}
            onChange={(e) => setFlag(e.currentTarget.checked)}
          />
        </label>
      </div>

      <input type="submit" value="Save Task" className="btn btn-block" />
    </form>
  );
};

export default AddChamp;
