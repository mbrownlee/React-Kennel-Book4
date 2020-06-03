import React, { useState } from "react";
import NavBar from "./nav/NavBar";
import ApplicationViews from "./ApplicationViews";
import "./Kennel.css";

const Kennel = () => {
  const isAuthenticated = () => sessionStorage.getItem("credentials") !== null;

  const [hasUser, setHasUser] = useState(isAuthenticated());

  const setUser = user => {
    sessionStorage.setItem("credentials", JSON.stringify(user));
    setHasUser(isAuthenticated());
  };

  return (
    <>
      <NavBar hasUser={hasUser} />
      <ApplicationViews hasUser={hasUser} setUser={setUser} />
    </>
  );
};

export default Kennel;