import React, { useEffect, useState } from "react";
import wiki from "wikijs";
import Map from "./components/Map";
import Info from "./components/Info";
import Summary from "./components/Summary";

export default function App() {
  const [selectedCountry, setSelectedCountry] = useState("iran");
  const [summary, setSummary] = useState("");
  const [info, setInfo] = useState(null)

  useEffect(() => {
    async function fetchData() {
      const page = await wiki().page(selectedCountry);
      const [summary, info] = await Promise.all([page.summary(), page.info()]);

      setSummary(summary)
      setInfo(info)
    }

    fetchData();
  }, [selectedCountry]);

  function handleClick(countryName) {
    setSelectedCountry(countryName);
  }

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col col-md-9">
          <Map handleClick={handleClick} />
        </div>
        <div className="col-12 col-md-3">
          <Info info={info} />
        </div>
      </div>
      <div className="row mt-3">
        <Summary summary={summary} />
      </div>
    </div>
  );
}
