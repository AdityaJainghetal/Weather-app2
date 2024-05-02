import React, { useState } from "react";
import CurrentLocation from "./CurrentLocation";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation />
      </div>
      <div className="footer-info">
        <a href="">
          Download Source Code
        </a>{" "}
        | Developed by{" "}
        <a target="_blank" href=" ">
          Gaurav Ghai
        </a>{" "}
        | Powered by{" "}
        <a target="_blank" href=" ">
          HTML HINTS
        </a>
      </div>
    </React.Fragment>
  );
}

export default App;
