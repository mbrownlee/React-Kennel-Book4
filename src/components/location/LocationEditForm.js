import React, { useState, useEffect } from "react"
import LocationManager from "../../modules/LocationManager"
import "./LocationForm.css"

const LocationEditForm = props => {
  const [locay, setLocay] = useState({ area: "", address: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = evt => {
    const stateToChange = { ...locay };
    stateToChange[evt.target.id] = evt.target.value;
    setLocay(stateToChange);
  };

  const updateExistingLocation = evt => {
    evt.preventDefault()
    setIsLoading(true);

    // This is an edit, so we need the id
    const editedLocation = {
      id: props.match.params.locayId,
      area: locay.area,
      address: locay.address
    };

    LocationManager.update(editedLocation)
      .then(() => props.history.push("/location"))
  }

  useEffect(() => {
    LocationManager.get(props.match.params.locayId)
      .then(locay => {
        setLocay(locay);
        setIsLoading(false);
      });
  }, [props.match.params.locayId]);

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
              id="area"
              value={locay.area}
            />
            <label htmlFor="area">Area Location</label>

            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="address"
              value={locay.address}
            />
            <label htmlFor="address">Address</label>
          </div>
          <div className="alignRight">
            <button
              type="button" disabled={isLoading}
              onClick={updateExistingLocation}
              className="btn btn-primary"
            >Save</button>
          </div>
        </fieldset>
      </form>
    </>
  );
}

export default LocationEditForm