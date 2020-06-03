import React, { useState, useEffect } from "react";
import LocationManager from "../../modules/LocationManager";
import EmployeeCard from '../employees/EmployeeCard'


const LocationDetail = (props) => {
  const [location, setLocation] = useState({
    area: "",
    address: "",
    employees: [],
  });
  const [employees, setEmployees] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    LocationManager.getWithEmployees(props.locationId)
    .then((location) => {
      setLocation({
        area: location.area,
        address: location.address,
        employees: location.employees,
      });
      setEmployees(location.employees);
    });
  }, [props.locationId]);

  const handleDelete = () => {
    //invoke the delete function in AnimalManger and re-direct to the animal list.
    setIsLoading(true);
    LocationManager.delete(props.locationId).then(() =>
      props.history.push("/location")
    );
  };

  return (
    <>
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={require("./doghouse.jpeg")} alt="doghouse" />
          </picture>
          <h3>
            Area:{" "}
            <span style={{ color: "darkslategrey" }}>{location.area}</span>
          </h3>
          <p>Address: {location.address}</p>
          <button type="button" disabled={isLoading} onClick={handleDelete}>
            Closed
          </button>
        </div>
      </div>
      <div className="card">
        {employees.map((employee) => (
          <EmployeeCard key={employee.id} employee={employee} {...props} />
        ))}
      </div>
    </>
  );
};

export default LocationDetail;
