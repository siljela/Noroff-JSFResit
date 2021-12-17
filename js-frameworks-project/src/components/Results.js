import { useState, useEffect } from "react";
import { API } from "../constants/api";
import CardItem from "./CardItem";

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
           setError("Oh damn. The cards are unavailable. Please try to refresh the page.");
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
        return <div className="load-message">Your cards are loading..</div>;
       }
      
    //    if (error) {
    //     return <div class="error-message">Please refresh the page.</div>;
    //    }

       return (
        <div className="cards">
            {pokeCards.map(function (card) {

                const { id, name, supertype, imageUrl, subtype, artist, rarity } = card;
                return <CardItem key={id} id={id} name={name} imageUrl={imageUrl} supertype={supertype} subtype={subtype} artist={artist} rarity={rarity}/>;
            })}
        </div>
       );
}

export default Cards;