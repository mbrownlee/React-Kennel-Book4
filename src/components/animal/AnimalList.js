import React, { useState, useEffect } from "react";
//import the components we will need
import AnimalCard from "./AnimalCard";
import AnimalManager from "../../modules/AnimalManager";
import "./AnimalList.css";

const AnimalList = (props) => {
  // The initial state is an empty array
  //setAnimals sole purpose is to change the value of animals
  //UseState gives you the initial value and a function to change it
  //useState creates the state variables, useEffect watches them
  const [animals, setAnimals] = useState([]);
  useEffect(() => {
    
  }, [animals]);

  const getAnimals = () => {
    // After the data comes back from the API, we
    //  use the setAnimals function to update state
    return AnimalManager.getAll().then((animalsFromAPI) => {
      setAnimals(animalsFromAPI);
    });
  };

  const deleteAnimal = (id) => {
    AnimalManager.delete(id).then(() =>
      AnimalManager.getAll().then(setAnimals)
    );
  };

  // got the animals from the API on the component's first render
  useEffect(() => {
    getAnimals();
  }, []);

  // Finally we use map() to "loop over" the animals array to show a list of animal cards
  return (
    <>
      <div className="container-cards">
        {animals.map((animal) => (
          <AnimalCard
            key={animal.id}
            animal={animal}
            deleteAnimal={deleteAnimal}
            {...props}
          />
        ))}
      </div>
      <section className="section-content">
        <button
          type="button"
          className="btn"
          onClick={() => {
            props.history.push("/animals/new");
          }}
        >
          Admit New Animal
        </button>
      </section>
    </>
  );
};
export default AnimalList;
