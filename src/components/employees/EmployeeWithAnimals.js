import React, { useState, useEffect } from 'react'
import EmployeeManager from '../../modules/EmployeeManager'
import AnimalCard from '../animal/AnimalCard'

const EmployeeWithAnimals = props => {
  const [employee, setEmployee] = useState({});
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    //got here now make call to get employee with animal
    EmployeeManager.getWithAnimals(props.match.params.employeeId)
      .then(APIResult => {
        setEmployee(APIResult);
        setAnimals(APIResult.animals);
      });
  }, [props.match.params.employeeId]);

  return (
    <>
    <div className="employee-detail">
    <h1>Employee: {employee.name}</h1>
    <p>Specialty: {employee.specialty}</p>
    <h3>Leashes carried: </h3>
    </div>
    <div className="card">

      {animals.map(animal =>
        <AnimalCard
          key={animal.id}
          animal={animal}
          {...props}
        />
      )}
    </div>
    </>
  );
};

export default EmployeeWithAnimals;