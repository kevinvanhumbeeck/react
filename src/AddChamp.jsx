import { useState } from 'react'

const AddChamp = ({ onAdd }) => {
  const [name, setName] = useState('')
  const [typeId, setType] = useState(0)
  const [flag, setFlag] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()

    if (!name) {
      alert('Please add a task')
      return
    }

    onAdd({ name, typeId, flag })

    setName('')
    setType(0)
    setFlag(false)
  }

  return (
    <form onSubmit={onSubmit} className="w-1/3">
      <input
        className="w-1/4 py-2 px-6 appearance-none bg-transparent border-none text-gray-700 focus:outline-none"
        type="text"
        placeholder="Add Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        className="w-1/4 py-2 px-6 appearance-none bg-transparent border-none text-gray-700 focus:outline-none"
        type="text"
        placeholder="Add Type"
        value={typeId}
        onChange={(e) => setType(parseInt(e.target.value))}
      />

      <input
        className="w-1/4 py-2 px-6 bg-transparent border-none text-gray-700 focus:outline-none"
        type="checkbox"
        checked={flag}
        value={flag}
        onChange={(e) => setFlag(e.currentTarget.checked)}
      />

      <button
        type="submit"
        value="Save Champ"
        className="bg-sky-400 hover:bg-teal-400 text-white py-1/2 px-2 rounded"
      >
        Save Champ
      </button>
    </form>
  )
}

export default AddChamp
