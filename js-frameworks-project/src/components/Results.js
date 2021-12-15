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
        <div className="cards">
            {pokeCards.map(function (card) {

                const { id, name, supertype } = card;
                return <CardItem key={id} id={id} name={name} supertype={supertype} />;
            })}
        </div>
       );
}

export default Cards;