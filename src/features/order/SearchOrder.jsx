import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (query) {
      navigate(`/order/${query}`);
    }
    setQuery("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search order"
        className="w-28 rounded-full bg-blue-100 px-4 py-2 text-sm transition-all  duration-300 placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50 focus:ring-offset-1 sm:w-64 sm:focus:w-72"
      />
    </form>
  );
}

export default SearchOrder;
