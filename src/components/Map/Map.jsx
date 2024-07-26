import React from "react";
import map from "./coords.json";
import ImageMapper from "react-image-mapper";
import IMAGE_URL from "./map.jpg";

export default function Map() {
  return <ImageMapper src={IMAGE_URL} map={map} />;
}
