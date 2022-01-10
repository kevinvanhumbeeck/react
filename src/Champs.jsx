import AddChamp from "./AddChamp";
import Champ from "./Champ";

const Champs = ({ champs, onDelete, onToggle, onAdd }) => {
  return (
    <>
      <table className="border-collapse">
        <thead>
          <tr className="border-b border-gray-400/10 text-gray-300">
            <th className="sticky py-3 px-6 text-left">
              {champs.length > 0 ? champs.length : "No"} Champion
              {champs.length !== 1 ? "s" : ""}
            </th>
            <th className="sticky py-3 px-6 text-left">Type</th>
            <th className="sticky py-3 px-6 text-center">Status</th>
            <th className="sticky py-3 px-6 text-center">Actions</th>
          </tr>
        </thead>
        <tbody className="text-gray-400 font-light">
          {champs.map((champ) => (
            <Champ
              key={champ.id}
              champ={champ}
              onDelete={onDelete}
              onToggle={onToggle}
            />
          ))}
        </tbody>
      </table>
      <AddChamp onAdd={onAdd} />
    </>
  );
};

export default Champs;
