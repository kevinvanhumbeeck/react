const Champ = ({ champ, onDelete, onShow }) => {
  return (
    <div className="champ">
      <div className="name">Name:</div>
      <div className="value">{champ.name}</div>
      <button
        className="value"
        onClick={() => onDelete(champ.id)}
        style={{
          cursor: "pointer",
          color: "red",
        }}
      >
        X
      </button>
      <button
        className="value"
        onClick={() => onShow(champ.id)}
        style={{
          cursor: "pointer",
          color: "green",
        }}
      >
        {champ.reminder} 0
      </button>
    </div>
  );
};

export default Champ;
