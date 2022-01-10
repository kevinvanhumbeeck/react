import useFetch from './useFetch'

const Quote = () => {
  const { data: quote, loading, error } = useFetch('https://api.quotable.io/random')

  return (
    <div className="italic my-8">
      {loading && <p>{loading}</p>}
      {quote && <p>{quote}</p>}
      {error && <p>{error}</p>}
    </div>
  )
}

export default Quote
