import { Route, Redirect } from "react-router-dom";
import React from "react";
import Home from "./home/Home";
import Login from "./auth/Login";
import AnimalList from "./animal/AnimalList";
import AnimalDetail from "./animal/AnimalDetail";
import AnimalForm from "./animal/AnimalForm";
import LocationList from "./location/LocationList";
import LocationDetail from "./location/LocationDetail";
import LocationForm from "./location/LocationForm";
import EmployeeList from "./employees/EmployeeList";
import EmployeeForm from "./employees/EmployeeForm";
import OwnerList from "./owner/OwnerList";
import OwnerForm from "./owner/OwnerForm";

const ApplicationViews = () => {
  const isAuthenticated = () => sessionStorage.getItem("credentials") !== null;
  return (
    <React.Fragment>
      <Route
        exact
        path="/"
        render={(props) => {
          return <Home />;
        }}
      />
      <Route path="/login" component={Login} />
      <Route
        exact
        path="/animals"
        render={(props) => {
          if (isAuthenticated()) {
            return <AnimalList {...props} />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
      <Route
        path="/animals/:animalId(\d+)"
        render={(props) => {
          // Pass the animalId to the AnimalDetailComponent
          return (
            <AnimalDetail
              animalId={parseInt(props.match.params.animalId)}
              {...props}
            />
          );
        }}
      />
      <Route
        path="/animals/new"
        render={(props) => {
          return <AnimalForm {...props} />;
        }}
      />

      {}
      <Route
        exact
        path="/location"
        render={(props) => {
          if (isAuthenticated()) {
            return <LocationList {...props} />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
      <Route
        path="/location/:locationId(\d+)"
        render={(props) => {
          // Pass the animalId to the AnimalDetailComponent
          return (
            <LocationDetail
              locationId={parseInt(props.match.params.locationId)}
              {...props}
            />
          );
        }}
      />
      <Route
        path="/location/new"
        render={(props) => {
          return <LocationForm {...props} />;
        }}
      />
      <Route
        exact
        path="/employees"
        render={(props) => {
          if (isAuthenticated()) {
            return <EmployeeList {...props} />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
      <Route
        path="/employees/new"
        render={(props) => {
          return <EmployeeForm {...props} />;
        }}
      />
      <Route
        exact
        path="/owner"
        render={(props) => {
          if (isAuthenticated()) {
            return <OwnerList {...props} />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
      <Route
        path="/owner/new"
        render={(props) => {
          return <OwnerForm {...props} />;
        }}
      />
    </React.Fragment>
  );
};

export default ApplicationViews;
