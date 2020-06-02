import React, { useEffect, useState } from "react";
import AnimalManager from "../../modules/AnimalManager";
import "./AnimalForm.css";
import EmployeeManager from "../../modules/EmployeeManager";

const AnimalForm = (props) => {
  const [animal, setAnimal] = useState({ name: "", breed: "", employeeId: "" });
  const [employees, setEmployees] = useState([])
  const [isLoading, setIsLoading] = useState(false);

 const getEmployees = () => {
     return EmployeeManager.getAll().then(employs => {
         setEmployees(employs)
     })
    }

  const handleFieldChange = (evt) => {
    const stateToChange = { ...animal };
    stateToChange[evt.target.id] = evt.target.value;
    setAnimal(stateToChange);
  };

  /*  Local method for validation, set loadingStatus, create animal      object, invoke the AnimalManager post method, and redirect to the full animal list
   */
  const constructNewAnimal = (evt) => {
    evt.preventDefault();
    if (animal.name === "" || animal.breed === "" || animal.employeeId === "") {
      window.alert("Please input an animal name and breed");
    } else {
      setIsLoading(true);
      // Create the animal and redirect user to animal list
      AnimalManager.post(animal).then(() => props.history.push("/animals"));
    }
  };

  useEffect(() => {getEmployees()}, []);

  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="name"
              placeholder="Animal name"
            />
            <label htmlFor="name">Name</label>
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="breed"
              placeholder="Breed"
            />
            <label htmlFor="breed">Breed</label>
            <select
              value="{animal.employeeId}"
              id="employeeId"
              onChange={handleFieldChange}
            >
            <option value="">Primary Caretaker</option>
              {employees.map((employee) => (
                <option key={employee.id} value={employee.id}>{employee.name}</option>
              ))}
            </select>
          </div>
          <div className="alignRight">
            <button
              type="button"
              disabled={isLoading}
              onClick={constructNewAnimal}
            >
              Submit
            </button>
          </div>
        </fieldset>
      </form>
    </>
  );
};

export default AnimalForm;
