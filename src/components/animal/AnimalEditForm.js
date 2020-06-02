import React, { useState, useEffect } from "react";
import AnimalManager from "../../modules/AnimalManager";
import "./AnimalForm.css";
import EmployeeManager from "../../modules/EmployeeManager";

const AnimalEditForm = (props) => {
  const [animal, setAnimal] = useState({ name: "", breed: "", employeeId: "" });
  const [employees, setEmployees] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getEmployees = () => {
    return EmployeeManager.getAll().then((employs) => {
      setEmployees(employs);
    });
  };

  const handleFieldChange = (evt) => {
    const stateToChange = { ...animal };
    stateToChange[evt.target.id] = evt.target.value;
    setAnimal(stateToChange);
  };

  const updateExistingAnimal = (evt) => {
    evt.preventDefault();
    setIsLoading(true);

    // This is an edit, so we need the id
    const editedAnimal = {
      id: props.match.params.animalId,
      name: animal.name,
      breed: animal.breed,
      employeeId: animal.employeeId,
    };
    console.log("howdy", editedAnimal);
    AnimalManager.update(editedAnimal).then(() =>
      props.history.push("/animals")
    );
  };
  useEffect(() => {
    getEmployees();
  }, []);
  useEffect(() => {
    AnimalManager.get(props.match.params.animalId).then((animal) => {
      setAnimal(animal);
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="name"
              value={animal.name}
            />
            <label htmlFor="name">Animal name</label>

            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="breed"
              value={animal.breed}
            />
            <label htmlFor="breed">Breed</label>
            <select
              value={parseInt(animal.employeeId)}
              id="employeeId"
              onChange={handleFieldChange}
            >
              {employees.map((employee) => {
                return (
                  <option key={employee.id} value={employee.id}>
                    {employee.name}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="alignRight">
            <button
              type="button"
              disabled={isLoading}
              onClick={updateExistingAnimal}
              className="btn btn-primary"
            >
              Save
            </button>
          </div>
        </fieldset>
      </form>
    </>
  );
};

export default AnimalEditForm;
