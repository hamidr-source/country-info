import React from "react";
import map from "./coords.json";
import ImageMapper from "react-image-mapper";
import IMAGE_URL from "./map.jpg";

export default function Map({ handleClick }) {
  return (
    <ImageMapper
      onClick={(e) => handleClick(e.name)}
      src={IMAGE_URL}
      map={map}
      width={800}
      imgWidth={1000}
    />
  );
}
