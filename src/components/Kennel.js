import React, { useState } from "react";
import NavBar from "./nav/NavBar";
import ApplicationViews from "./ApplicationViews";
import "./Kennel.css";

const Kennel = () => {
  const isAuthenticated = () => {
    if (
      sessionStorage.getItem("credentials") !== null ||
      localStorage.getItem("credentials") !== null
    ) {
      return true;
    } else {
      return false;
    }
  };

  const [hasUser, setHasUser] = useState(isAuthenticated());
  const [checkedBox, setCheckedBox] = useState(false);

  const clearUser = () => {
    localStorage.clear();
    sessionStorage.clear();
    setHasUser(isAuthenticated());
  };

  const setUser = (user) => {
    if (checkedBox) {
      localStorage.setItem("credentials", JSON.stringify(user));
      setHasUser(isAuthenticated());
    } else if (!checkedBox) {
      sessionStorage.setItem("credentials", JSON.stringify(user));
      setHasUser(isAuthenticated());
    }
  };

  return (
    <>
      <NavBar hasUser={hasUser} clearUser={clearUser} />
      <ApplicationViews
        hasUser={hasUser}
        setUser={setUser}
        checkedBox={checkedBox}
        setCheckedBox={setCheckedBox}
      />
    </>
  );
};

export default Kennel;
