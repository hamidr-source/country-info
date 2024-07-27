import React from "react";

export default function Info({ info }) {
  console.log(info);
  return (
    <div class="card">
      <img class="card-img-top" src="" alt="Card image cap" />
      {info && (
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Capital: {info.capital}</li>
          <li class="list-group-item">
            Official languages: {info.officialLAnguages}
          </li>
          <li class="list-group-item">Population: {info.populationEstimate}</li>
          <li class="list-group-item">Currency: {info.currency}</li>
        </ul>
      )}
    </div>
  );
}
