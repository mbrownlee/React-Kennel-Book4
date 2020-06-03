import React, { useState, useEffect } from 'react';
import EmployeeManager from '../../modules/EmployeeManager';
import './EmployeeForm.css'
import LocationManager from "../../modules/LocationManager";

const EmployeeForm = props => {
  const [employee, setEmployee] = useState({ name: "", specialty: "", locationId: "" });
  const [locations, setLocations] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getLocations = () => {
   
    return LocationManager.getAll().then(locations => {
      console.log(locations, "hey ho")
      setLocations(locations)
    })
  }

  const handleFieldChange = evt => {
    const stateToChange = { ...employee };
    stateToChange[evt.target.id] = evt.target.value;
    setEmployee(stateToChange);
  };

  /*  Local method for validation, set loadingStatus, create animal      object, invoke the AnimalManager post method, and redirect to the full animal list
  */
  const constructNewEmployee = evt => {
    evt.preventDefault();
    if (employee.name === "" || employee.specialty === "" || employee.locationId === "") {
      window.alert("Fill out the damn form");
    } else {
      setIsLoading(true);
   
      const theEmployee = {
        name: employee.name,
        specialty: employee.specialty,
        locationId: parseInt(employee.locationId)
      }
      EmployeeManager.post(theEmployee)
        .then(() => props.history.push("/employees"));
    }
  };

  useEffect(() => {getLocations()}, []);

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
              placeholder="Employee Name"
            />
            <label htmlFor="name">Name</label>
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="specialty"
              placeholder="Special Skills"
            />
            <label htmlFor="specialty">specialty</label>
            <select
              id="locationId"
              onChange={handleFieldChange}
            >
            <option value="">Primary Location</option>
              {locations.map((location) => (
                <option key={location.id} value={location.id}>{location.area}</option>
              ))}
            </select>
          </div>
          <div className="alignRight">
            <button
              type="button"
              disabled={isLoading}
              onClick={constructNewEmployee}
            >Submit</button>
          </div>
        </fieldset>
      </form>
    </>
  );
};

export default EmployeeForm