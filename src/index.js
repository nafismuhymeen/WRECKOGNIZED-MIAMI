import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { HashRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <RecoilRoot>
        <App />
      </RecoilRoot>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
