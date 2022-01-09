import AddChamp from "./AddChamp";
import Champ from "./Champ";

const Champs = ({ champs, onDelete, onToggle, onAdd }) => {
  const count = champs.length;
  return (
    <>
      <div>
        {count > 0 ? count : "No"} Champion{count !== 1 ? "s" : ""}
      </div>
      <table className="table-auto">
        <thead>
          <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-left">Champion</th>
            <th className="py-3 px-6 text-left">Type</th>
            <th className="py-3 px-6 text-center">Status</th>
            <th className="py-3 px-6 text-center">Actions</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
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
