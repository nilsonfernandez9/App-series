import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// State
import ShowsState from "./context/shows/showsState";
import AlertsState from "./context/alerts/alertsState";

ReactDOM.render(
  <ShowsState>
    <AlertsState>
      <App />
    </AlertsState>
  </ShowsState>,
  document.getElementById("root")
);

reportWebVitals();
