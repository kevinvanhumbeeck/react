/* eslint-disable jsx-a11y/anchor-is-valid */
import Champ from "./Champ";

const Champs = ({ champs, onDelete, onShow }) => {
  const count = champs.length;
  return (
    <>
      <a href="#" className="neon-button">
        {count > 0 ? count : "No"} Champion{count !== 1 ? "s" : ""}
      </a>
      {champs.map((champ) => (
        <Champ
          key={champ.id}
          champ={champ}
          onDelete={onDelete}
          onShow={onShow}
        />
      ))}
    </>
  );
};

export default Champs;
