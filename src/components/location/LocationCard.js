import React from "react";
import { Link } from "react-router-dom";

const LocationCard = (props) => {
  return (
    <div className="card">
      <div className="locationCard-content">
        <h2>
          Student Kennels
          <br />
          <small>Loving care when you're not there.</small>
        </h2>
        <address>
          {props.location.area}
          <br />
          {props.location.address}
        </address>
        <picture>
          <img src={require("./doghouse.jpeg")} alt="Doghouse" />
        </picture>
        <Link to={`/location/${props.location.id}`}>
          <button>Details</button>
        </Link>
        <button
          type="button"
          onClick={() => props.deleteLocation(props.location.id)}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default LocationCard;
