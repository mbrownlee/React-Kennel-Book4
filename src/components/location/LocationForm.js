import React, { useState } from 'react';
import LocationManager from '../../modules/LocationManager';
import './LocationForm.css'

const LocationForm = props => {
  const [location, setLocation] = useState({ area: "", address: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = evt => {
    const stateToChange = { ...location };
    stateToChange[evt.target.id] = evt.target.value;
    setLocation(stateToChange);
  };

  /*  Local method for validation, set loadingStatus, create animal      object, invoke the AnimalManager post method, and redirect to the full animal list
  */
  const constructNewLocation = evt => {
    evt.preventDefault();
    if (location.area === "" || location.addrss === "") {
      window.alert("Please complete form");
    } else {
      setIsLoading(true);
      // Create the animal and redirect user to animal list
      LocationManager.post(location)
        .then(() => props.history.push("/location"));
    }
  };

  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="area"
              placeholder="Area located"
            />
            <label htmlFor="area">Area</label>
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="address"
              placeholder="Address"
            />
            <label htmlFor="address">Address</label>
          </div>
          <div className="alignRight">
            <button
              type="button"
              disabled={isLoading}
              onClick={constructNewLocation}
            >Submit</button>
          </div>
        </fieldset>
      </form>
    </>
  );
};

export default LocationForm