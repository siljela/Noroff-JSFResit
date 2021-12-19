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
        return <div className="error-message">Oh no! The cards are currently unavailble. Please refresh the page in a moment. </div>;
      }

      const searching = (e) => {
        const searchResults = document.querySelector(".homepage-search_results");
        const inputValue = e.target.value.trim().toLowerCase();
        const sorted = Object.values(pokeCards).filter((pokeCard) =>
        pokeCard.name.toLowerCase().includes(inputValue)
        );
        
        if(inputValue === ""){
          searchResults.style.display = "none";
        } else {
          searchResults.style.display = "block";
          sortedCards(sorted);
        }
        // sortedCards(sorted);
      };

    return (
        <>
            <input onChange={(e) => searching(e)} placeholder="Search card name" aria-label="Search pokemon name" className="homepage-search"></input>
            <ul className="homepage-search_results">
            {searchResults.map((pokeCard) => {
              let {
                id,
              } = pokeCard;
              
              return (
                <>
                <Link to={`/cards/${id}`}>
                  <li className="homepage-search_results_name"
                    key={id}
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
