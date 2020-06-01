import React, { useState, useEffect } from "react";
//import the components we will need
import EmployeeCard from "./EmployeeCard";
import EmployeeManager from "../../modules/EmployeeManager";
import "./EmployeeList.css"

const EmployeeList = (props) => {
  // The initial state is an empty array
  const [employees, setEmployees] = useState([]);

  const getEmployees = () => {
    // After the data comes back from the API, we
    //  use the setAnimals function to update state
    return EmployeeManager.getAll().then((employeesFromAPI) => {
      setEmployees(employeesFromAPI);
    });
  };
  const deleteEmployee = (id) => {
    EmployeeManager.delete(id).then(() =>
      EmployeeManager.getAll().then(setEmployees)
    );
  };

  // got the animals from the API on the component's first render
  useEffect(() => {
    getEmployees();
  }, []);

  // Finally we use map() to "loop over" the animals array to show a list of animal cards
  return (
    <>
      <div className="container-cards">
        {employees.map((employee) => (
          <EmployeeCard
            key={employee.id}
            employee={employee}
            deleteEmployee={deleteEmployee}
          />
        ))}
      </div>
      <section className="section-content">
        <button
          type="button"
          className="btn"
          onClick={() => {
            props.history.push("/employees/new");
          }}
        >
          New Employee
        </button>
      </section>
    </>
  );
};
export default EmployeeList;
