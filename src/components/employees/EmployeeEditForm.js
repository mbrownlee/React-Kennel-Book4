import React, { useState, useEffect } from "react"
import EmployeeManager from "../../modules/EmployeeManager"
import "./EmployeeForm.css"
import LocationManager from "../../modules/LocationManager";

const EmployeeEditForm = props => {
  const [employee, setEmployee] = useState({ name: "", specialty: "", locationId: "" });
  const [locations, setLocations] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getLocations = () => {
    return LocationManager.getAll().then((locations) => { setLocations(locations)
  });
  }

  const handleFieldChange = evt => {
    const stateToChange = { ...employee };
    stateToChange[evt.target.id] = evt.target.value;
    setEmployee(stateToChange);
  };

  const updateExistingEmployee = evt => {
    evt.preventDefault()
    setIsLoading(true);

    // This is an edit, so we need the id
    const editedEmployee = {
      id: props.match.params.employeeId,
      name: employee.name,
      specialty: employee.specialty,
      locationId: parseInt(employee.locationId)
    };

    EmployeeManager.update(editedEmployee)
      .then(() => props.history.push("/employees"))
  }
  useEffect(() => {
    getLocations();
  }, []);

  useEffect(() => {
    EmployeeManager.get(props.match.params.employeeId)
      .then(employee => {
        setEmployee(employee);
        setIsLoading(false);
      });
  }, [props.match.params.employeeId]);

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
              value={employee.name}
            />
            <label htmlFor="name">Employee name</label>

            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="specialty"
              value={employee.specialty}
            />
            <label htmlFor="specialty">Specialty</label>
            <select
              value={employee.locationId}
              id="locationId"
              onChange={handleFieldChange}
            >
              {locations.map((location) => {
                return (
                  <option key={location.id} value={location.id}>
                    {location.area}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="alignRight">
            <button
              type="button" disabled={isLoading}
              onClick={updateExistingEmployee}
              className="btn btn-primary"
            >Save</button>
          </div>
        </fieldset>
      </form>
    </>
  );
}

export default EmployeeEditForm