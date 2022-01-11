import { useState, useEffect } from "react";

const Crypto = () => {
  const [cryptos, setCryptos] = useState([]);

  useEffect(() => {
    const getCryptos = async () => {
      const cryptosFromServer = await fetchCryptos();
      setCryptos(cryptosFromServer);
    };

    getCryptos();
  }, []);

  const fetchCryptos = async () => {
    const res = await fetch(
      // 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=10&convert=USD',
      "http://127.0.0.1:3001/",
      // '/champs',
      {
        method: "GET",
        // mode: "no-cors",
        /*
        headers: {
          'X-CMC_PRO_API_KEY': 'da79ab26-9d80-4402-82d2-3c70743eeadd'
        }
        */
      }
    );

    const data = await res.json();

    return data.data;
  };

  return (
    <div className="italic my-8">
      <table className="border-collapse w-1/3">
        <thead>
          <tr className="border-b border-gray-400/10 text-sky-400">
            <th className="sticky py-2 px-6 text-left">Currency</th>
            <th className="sticky py-2 px-6 text-center">Symbol</th>
            <th className="sticky py-2 px-6 text-right">Price</th>
          </tr>
        </thead>
        <tbody className="text-gray-300 font-medium">
          {cryptos.map((crypto) => (
            <tr className="border-b border-gray-400/10" key={crypto.id}>
              <td className="py-2 px-6 text-left font-medium">{crypto.name}</td>
              <td className="py-2 px-6 text-left">{crypto.symbol}</td>
              <td className="py-2 px-6 text-right whitespace-nowrap">
                &#36; {Math.round(crypto.quote.USD.price * 100) / 100}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Crypto;
