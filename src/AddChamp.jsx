import { useState } from 'react'

const AddChamp = ({ onAdd }) => {
  const [name, setName] = useState('')
  const [type, setType] = useState('')
  const [flag, setFlag] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()

    if (!name) {
      alert('Please add a task')
      return
    }

    onAdd({ name, type, flag })

    setName('')
    setType('')
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
        value={type}
        onChange={(e) => setType(e.target.value)}
      />

      <input
        className="w-1/4 py-2 px-6 bg-transparent border-none text-gray-700 focus:outline-none"
        type="checkbox"
        checked={flag}
        value={flag}
        onChange={(e) => setFlag(e.currentTarget.checked)}
      />

      <input type="submit" value="Save Champ" className="" />
    </form>
  )
}

export default AddChamp
