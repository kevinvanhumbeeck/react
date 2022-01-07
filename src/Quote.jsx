import useFetch from "./useFetch";
import "./Quote.css";

const Quote = () => {
  const {
    data: quote,
    loading,
    error,
  } = useFetch("https://api.quotable.io/random");

  return (
    <div className="Quote">
      {loading && <p>{loading}</p>}
      {quote && <p>{quote}</p>}
      {error && <p>{error}</p>}
    </div>
  );
};

export default Quote;