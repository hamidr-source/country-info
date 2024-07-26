import React from "react";
import Map from "./components/Map";
import Info from "./components/Info"
import Summary from "./components/Summary";

export default function App() {
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col col-md-9">
          <Map />
        </div>
        <div className="col-12 col-md-3">
          <Info />
        </div>
      </div>
      <div className="row mt-3">
        <Summary />
      </div>
    </div>
  );
}
