import Champ from "./Champ";

const Champs = ({ champs, onDelete, onShow }) => {
  return (
    <>
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
