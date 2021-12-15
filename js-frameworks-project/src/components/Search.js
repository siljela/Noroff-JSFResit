import React from 'react'
import { API } from '../constants/api';
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export const Search = () => {
    const [pokeCards, setCards] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchResults, sortedCards] = useState([]);

    useEffect(() => {

        async function loadCards() {
          try {
            const response = await fetch(API);

            if (response.ok) {
              const results = await response.json();
              const json = results.cards;
              
              setCards(json);
            } else {
              setError("No results to view.");
            }
          } catch (error) {
            setError(error.toString());
          } finally {
            setLoading(false);
          }
        }
        loadCards();
      }, []);
      if (loading) {
        return <div>
            <span className="visually-hidden">Loading...</span>
        </div>;
      }
      if (error) {
        return <div>Unable to locate cards.</div>;
      }

      const searching = (e) => {
        const inputValue = e.target.value.trim().toLowerCase();
        const sorted = Object.values(pokeCards).filter((pokeCard) =>
        pokeCard.name.toLowerCase().includes(inputValue)
        );
        
        sortedCards(sorted);
      };

    return (
        <>
            <input onChange={(e) => searching(e)} placeholder="Search card name" aria-label="Search card name"></input>
            <ul>
            {searchResults.map((pokeCard) => {
              let {
                id,
                name,
                supertype,
                imageUrl,
              } = pokeCard;
              
              return (
                <>
                <Link to={`/cards/${id}`}>
                  <li 
                    key={id}
                    id={id}
                    name={name}
                    supertype={supertype}
                    imageUrl={imageUrl}
                  >
                    {pokeCard.name}
                  </li>
                </Link>
                </>
              );
            })}
            </ul>
        </>
    );
};

// export default Search
