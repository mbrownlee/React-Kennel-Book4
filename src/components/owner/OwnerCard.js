import React from "react";

const OwnerCard = (props) => {
  return (
    <div className="card">
      <div className="ownerCard-content">
        <h3>
          Owner Name: <span className="ownerCard-name">{props.owner.name}</span>
        </h3>
        <picture className="photo">
          <img src={require("./owner.jpeg")} alt="Owner" />
        </picture>
        <p>Phone Number: {props.owner.phoneNumber}</p>
        <button type="button" onClick={() => props.deleteOwner(props.owner.id)}>Unleashed</button>
      </div>
    </div>
  );
};

export default OwnerCard;