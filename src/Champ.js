const Champ = ({ champ, onDelete, onShow }) => {
  const cls = `value btn${champ.reminder ? " on" : ""}`;

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
        className={cls}
        onClick={() => onShow(champ.id)}
        style={{ cursor: "pointer" }}
      >
        {champ.reminder ? "On" : "Off"}
      </button>
    </div>
  );
};

export default Champ;
