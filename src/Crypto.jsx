import { useState, useEffect } from 'react'

const Crypto = () => {
  const [cryptos, setCryptos] = useState([])

  useEffect(() => {
    const getCryptos = async () => {
      const cryptosFromServer = await fetchCryptos()
      setCryptos(cryptosFromServer)
    }

    getCryptos()
  })

  const fetchCryptos = async () => {
    const res = await fetch(
      'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=10&convert=USD',
      {
        method: 'GET',
        // mode: "no-cors",
        headers: {
          'X-CMC_PRO_API_KEY': 'da79ab26-9d80-4402-82d2-3c70743eeadd'
        }
      }
    )

    const data = await res.json()

    return data
  }

  console.log(cryptos)

  return <div className="italic my-8"></div>
}

export default Crypto
