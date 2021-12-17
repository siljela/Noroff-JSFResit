import { useState, useEffect } from "react";
import { grassAPI } from "../constants/api";
import CardItem from "./CardItem";

function GrassCards() {
    const [pokeCards, setCards] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(function () {
        async function fetchData() {
         try {
          const response = await fetch(grassAPI);
      
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
        return <div className="load-message">We're loading the grass cards. Please be patient.</div>;
       }
      
       if (error) {
        return <div className="error-message">Oh no! We apologise, the cards are currently unavailble. Please refresh the page.</div>;
       }

       return (
        <div className="cards">
            {pokeCards.map(function (card) {
                const { id, name, supertype, imageUrl, subtype, artist, rarity } = card;
                return <CardItem key={id} id={id} name={name} imageUrl={imageUrl} supertype={supertype} subtype={subtype} artist={artist} rarity={rarity}/>;
            })}
        </div>
       );
}

export default GrassCards;