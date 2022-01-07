const Champ = ({ champ, onDelete, onToggle }) => {
  return (
    <div className="champ">
      <div className="name">{champ.name}</div>
      <button
        className="value btn"
        onClick={() => onDelete(champ.id)}
        style={{ cursor: "pointer" }}
      >
        X
      </button>
      <button
        className={`value btn ${champ.flag ? "on" : ""}`}
        onClick={() => onToggle(champ.id)}
        style={{ cursor: "pointer" }}
      >
        {champ.flag ? "On" : "Off"}
      </button>
    </div>
  );
};

export default Champ;
