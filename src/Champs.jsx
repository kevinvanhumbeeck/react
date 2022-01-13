import AddChamp from './AddChamp'
import Champ from './Champ'

const Champs = ({ champs, onDelete, onToggle, onAdd }) => {
  return (
    <>
      <table className="w-1/2">
        <thead>
          <tr className="border-b border-gray-400/10 text-sky-400">
            <th className="w-min py-2 px-2 text-center">
              <input
                className="py-2 px-2 bg-transparent border-none text-gray-700 focus:outline-none"
                type="checkbox"
              />
            </th>
            <th className="sticky py-2 px-2 text-left">
              {champs.length > 0 ? champs.length : 'No'} Champion
              {champs.length !== 1 ? 's' : ''}
            </th>
            <th className="sticky py-2 px-2 text-left">Type</th>
            <th className="sticky py-2 px-2 text-center">Status</th>
            <th className="sticky py-2 px-2 text-center">Actions</th>
          </tr>
        </thead>
        <tbody className="text-gray-300 font-medium">
          {champs.map((champ) => (
            <Champ key={champ.id} champ={champ} onDelete={onDelete} onToggle={onToggle} />
          ))}
        </tbody>
      </table>
      <AddChamp onAdd={onAdd} />
    </>
  )
}

export default Champs
