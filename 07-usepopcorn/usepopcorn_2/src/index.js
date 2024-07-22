import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./box_style.css";
import App from "./App";
import StarRating from "./StarRating";
import TextExpander from "./TextExpander.js";

function Test() {
  const [movieRating, setMovieRating] = React.useState(0);
  return (
    <div>
      <StarRating color="coral" onSetRating={setMovieRating} />
      <p>This movie was rated {movieRating} start</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
