import React, { useState, useEffect } from 'react';
import LocationManager from '../../modules/LocationManager';


const LocationDetail = props => {
  const [location, setLocation] = useState({area: "", address: "" });

  useEffect(() => {
    //get(id) from AnimalManager and hang on to the data; put it into state
    LocationManager.get(props.locationId)
      .then(location => {
        setLocation({
          area: location.area,
          address: location.address
        });
      });
  }, [props.locationId]);

  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={require('./doghouse.jpeg')} alt="doghouse" />
        </picture>
        <h3>Area: <span style={{ color: 'darkslategrey' }}>{location.area}</span></h3>
        <p>Address: {location.address}</p>
      </div>
    </div>
  );
}

export default LocationDetail;