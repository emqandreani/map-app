import ReactDOM from "react-dom/client";
import { StyleSystemProvider } from "@architecture-it/stylesystem";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

import "./layout/_general.scss";

const rootElement = document.getElementById("root") as HTMLElement;

const root = ReactDOM.createRoot(rootElement);

root.render(
  <StyleSystemProvider>
    <BrowserRouter basename="map">
      <App />
    </BrowserRouter>
  </StyleSystemProvider>,
);
