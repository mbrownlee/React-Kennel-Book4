import React, { useState, useEffect } from 'react';
import LocationManager from '../../modules/LocationManager';


const LocationDetail = props => {
  const [location, setLocation] = useState({area: "", address: "" });
  const [isLoading, setIsLoading] = useState(false);

  LocationManager.get(props.locationId)
    .then(location => {
      setLocation({
        area: location.area,
        address: location.address
      });
    })

  const handleDelete = () => {
    //invoke the delete function in AnimalManger and re-direct to the animal list.
    setIsLoading(true);
    LocationManager.delete(props.locationId).then(() =>
      props.history.push("/location")
    );
  };


  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={require('./doghouse.jpeg')} alt="doghouse" />
        </picture>
        <h3>Area: <span style={{ color: 'darkslategrey' }}>{location.area}</span></h3>
        <p>Address: {location.address}</p>
        <button type="button" disabled={isLoading} onClick={handleDelete}>
          Closed
        </button>
      </div>
    </div>
  );
}


export default LocationDetail;