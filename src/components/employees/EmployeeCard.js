import React from "react";

const EmployeeCard = (props) => {
  return (
    <div className="card">
      <div className="employeeCard-content">
        <h3>
          Employee Name:{" "}
          <span className="employeeCard-name">{props.employee.name}</span>
        </h3>
        <picture className="photo">
          <img src={require("./download.jpeg")} alt="Employee" />
        </picture>
        <p>Soecialty: {props.employee.specialty}</p>
        <button
          type="button"
          onClick={() => {
            props.history.push(`/employees/${props.employee.id}/details`);
          }}
        >
          Details
        </button>
        <button
          type="button"
          onClick={() =>
            props.history.push(`/employees/${props.employee.id}/edit`)
          }
        >
          Edit
        </button>
        <button
          type="button"
          onClick={() => props.deleteEmployee(props.employee.id)}
        >
          Left the DogHouse
        </button>
      </div>
    </div>
  );
};

export default EmployeeCard;
