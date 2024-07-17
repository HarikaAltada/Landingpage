import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import debounce from "lodash.debounce";

const Main = () => {
  const [drinks, setDrinks] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a")
      .then((response) => {
        setDrinks(response.data.drinks);
      });
  }, []);

  const handleSearch = useCallback(
    debounce((query) => {
      if (query) {
        axios
          .get(
            `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`
          )
          .then((response) => {
            setDrinks(response.data.drinks);
          });
      }
    }, 300),
    []
  );

  const handleChange = (e) => {
    const { value } = e.target;
    setSearch(value);
    handleSearch(value);
  };

  return (
    <main className="container mx-auto px-10 py-8" id="product">
      <div className="flex justify-center mb-8">
        <input
          type="text"
          value={search}
          onChange={handleChange}
          className="px-4 py-2 border border-gray-300 rounded-md"
          placeholder="Search for a drink..."
        />
        <button
          onClick={() => handleSearch(search)}
          className="ml-2 px-4 py-2 bg-blue-600 text-white rounded-md"
        >
          Search
        </button>
      </div>
      <section className="text-center mb-8">
        <h1 className="text-4xl font-bold">Our products</h1>
        <p className="text-gray-600">
          Bacardi Breezer, Breezer for short, is a fruit-based alcoholic drink
          which comes in many flavours.
        </p>
      </section>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {drinks &&
          drinks.map((drink) => (
            <div
              key={drink.idDrink}
              className="bg-white shadow rounded-lg p-4 md:w-80 mx-auto"
            >
              <img
                src={drink.strDrinkThumb}
                alt={drink.strDrink}
                className="w-full h-48 object-contain rounded-lg mb-4"
              />
              <h2 className="text-lg font-bold mb-2">{drink.strDrink}</h2>
              <p>{drink.strInstructions}</p>
            </div>
          ))}
      </div>
    </main>
  );
};

export default Main;
