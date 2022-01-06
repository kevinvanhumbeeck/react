import Champ from "./Champ";

const Champs = ({ champs, onDelete, onShow }) => {
  const count = champs.length;
  return (
    <>
      <div>{count > 0 ? count : "No Champions"}</div>
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
