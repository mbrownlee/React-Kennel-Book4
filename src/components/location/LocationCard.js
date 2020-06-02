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
          {props.locay.area}
          <br />
          {props.locay.address}
        </address>
        <picture>
          <img src={require("./doghouse.jpeg")} alt="Doghouse" />
        </picture>
        <Link to={`/location/${props.locay.id}`}>
          <button>Details</button>
        </Link>
        <button
          type="button"
          onClick={() =>
            props.history.push(`/location/${props.locay.id}/edit`)
          }
        >
          Edit
        </button>
      </div>
    </div>
  );
};

export default LocationCard;
