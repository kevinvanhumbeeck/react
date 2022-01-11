import { useState, useEffect } from 'react'
import Crypto from './Crypto'
import Quote from './Quote'
import Champs from './Champs'
import ReactLogo from './images/ReactLogo'

const Game = () => {
  const [champs, setChamps] = useState([])
  const headers = { 'Content-Type': 'application/json' }

  useEffect(() => {
    const getChamps = async () => {
      const champsFromServer = await fetchChamps()
      setChamps(champsFromServer)
    }

    getChamps()
  }, [])

  const fetchChamps = async (ids = []) => {
    const path = '/champs'
    let url = path

    if (ids.length === 1) {
      url = `${path}/${ids[0]}`
    } else if (ids.length > 1) {
      url = `${path}?id=${ids.join('&id=')}`
    }

    const res = await fetch(url)
    const data = await res.json()

    return data
  }

  const deleteChamp = async (id) => {
    const res = await fetch(`/champs/${id}`, {
      method: 'DELETE'
    })

    res.status === 200
      ? setChamps(champs.filter((champ) => champ.id !== id))
      : alert('Error Deleting This Champ')
  }

  const toggleChamp = async (id) => {
    const champ = await fetchChamps([id])
    const updChamp = { ...champ, flag: !champ.flag }
    const res = await fetch(`/champs/${id}`, {
      method: 'PUT',
      headers,
      body: JSON.stringify(updChamp)
    })

    res.status === 200
      ? setChamps(champs.map((champ) => (champ.id === id ? updChamp : champ)))
      : alert('Error Updating This Champ')
  }

  const addChamp = async (champ) => {
    const res = await fetch('/champs', {
      method: 'POST',
      headers,
      body: JSON.stringify(champ)
    })

    const data = await res.json()

    setChamps([...champs, data])
  }

  return (
    <div className="w-screen min-h-screen antialiased font-Rajdhani text-gray-400 bg-gray-900 bg-graddy bg-no-repeat bg-right-top bg-[length:1440px_616px]">
      <nav className="sticky top-0 bg-black/50 p-4 text-xl">
        <ul className="flex">
          <li className="mr-6">
            <button className="text-gray-200 hover:text-white">
              <ReactLogo className="w-auto h-8 mx-auto" />
            </button>
          </li>
          <li className="mr-6">
            <button className="text-gray-200 hover:text-white border-b-2 border-sky-400">
              Home
            </button>
          </li>
          <li className="mr-6">
            <button className="text-gray-200 hover:text-white hover:border-b-2 border-sky-400">
              About
            </button>
          </li>
          <li className="mr-6">
            <button className="text-gray-200 hover:text-white hover:border-b-2 border-sky-400">
              Contact
            </button>
          </li>
        </ul>
      </nav>
      <div className="flex flex-row">
        <div className="basis-1/4">
          <Crypto />
        </div>
        <div className="basis-3/4">
          <div>
            <Quote />
          </div>
          <div>
            <Champs
              champs={champs}
              onDelete={deleteChamp}
              onToggle={toggleChamp}
              onAdd={addChamp}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Game
