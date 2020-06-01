import { Route } from "react-router-dom";
import React from "react";
import Home from "./home/Home";
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
  return (
    <React.Fragment>
      <Route
        exact
        path="/"
        render={(props) => {
          return <Home />;
        }}
      />
      <Route
        exact
        path="/animals"
        render={(props) => {
          return <AnimalList {...props} />;
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
          return <LocationList {...props} />;
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
          return <EmployeeList {...props} />;
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
          return <OwnerList {...props} />;
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
