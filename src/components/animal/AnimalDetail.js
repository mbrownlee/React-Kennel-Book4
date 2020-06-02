import React, { useState, useEffect } from "react";
import AnimalManager from "../../modules/AnimalManager";
import "./AnimalDetail.css";
import EmployeeManager from "../../modules/EmployeeManager";

const AnimalDetail = (props) => {
  const [animal, setAnimal] = useState({ name: "", breed: "", employeeId: "" });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let theAnimal = {};
    // full disclosure there was some instructor assistance on this
    AnimalManager.get(props.animalId).then((animal) => {
      theAnimal = animal;
      console.log(animal, "hey")
      return EmployeeManager.get(animal.employeeId).then((employee) => {
        theAnimal.caretaker = employee.name;
        setAnimal(theAnimal);
      });
    });
  }, [props.animalId]);

  const handleDelete = () => {
    //invoke the delete function in AnimalManger and re-direct to the animal list.
    setIsLoading(true);
    AnimalManager.delete(props.animalId).then(() =>
      props.history.push("/animals")
    );
  };

  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={require("./dog.svg")} alt="My Dog" />
        </picture>
        <h3>
          Name: <span style={{ color: "darkslategrey" }}>{animal.name}</span>
        </h3>
        <p>Breed: {animal.breed}</p>
        <p>Caretaker: {animal.caretaker || "not assigned"} </p>
        <button
          type="button"
          onClick={() => props.history.push(`/animals/${animal.id}/edit`)}
        >
          Edit
        </button>

        <button type="button" disabled={isLoading} onClick={handleDelete}>
          Discharge
        </button>
      </div>
    </div>
  );
};

export default AnimalDetail;
