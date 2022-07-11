import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { CelebritiesProvider } from "./context/CelebritiesContext";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <CelebritiesProvider>
      <App />
    </CelebritiesProvider>
  </StrictMode>
);
