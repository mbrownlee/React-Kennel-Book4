import React, { useState, useEffect } from "react";
import AnimalSpotlight from "../animal/AnimalSpotlight";
import AnimalManager from "../../modules/AnimalManager";
import "./Home.css";

const Home = () => {
  const [spotlightId, setSpotlightId] = useState(0);

  const refreshSpotlightAnimal = () => {
    AnimalManager.getRandomId().then(setSpotlightId);
  };

  useEffect(() => {
    refreshSpotlightAnimal();
  }, []);

  return (
    <>
      <address>
        Visit Us at the Nashville North Location
        <br />
        500 Puppy Way
      </address>
    <div className="homeCard">
      <h1>Animal Spotlight</h1>
      <button className="random" onClick={refreshSpotlightAnimal}>Reload &#x27f3;</button>
      
      {
        spotlightId && <AnimalSpotlight animalId={spotlightId} />
      }
      </div>
      
    </>
  );
};

export default Home;