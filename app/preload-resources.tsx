"use client";

import ReactDOM from "react-dom";

export function PreloadResources() {
  ReactDOM.preload(
    "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200",
    { as: "style" },
  );

  return null;
}
