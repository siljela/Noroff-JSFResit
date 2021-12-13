import { useState, useEffect } from "react";
import { API } from "../constants/api";

function Cards() {
    const [pokeCards, setCards] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(function () {
        async function fetchData() {
         try {
          const response = await fetch(API);
      
          if (response.ok) {
           const results = await response.json();
           const json = results.cards;
        //    console.log(json);
           setCards(json);
          } else {
           setError("An error occured");
          }
         } catch (error) {
          setError(error.toString());
         } finally {
          setLoading(false);
         }
        }
        fetchData();
       }, []);

       if (loading) {
        return <div>Loading...</div>;
       }
      
       if (error) {
        return <div>ERROR: An error occured</div>;
       }

       return (
        <>
         {pokeCards.map(function (card) {
          return <div key={card.id}>{card.name}</div>;
         })}
        </>
       );
}

export default Cards;