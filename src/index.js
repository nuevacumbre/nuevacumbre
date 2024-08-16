import React from "react";
import { createRoot } from "react-dom/client"; // Importar createRoot

import App from "./App";

// Crear una raíz en el contenedor con id "app"
const root = createRoot(document.getElementById("app"));

// Renderizar el componente App dentro de la raíz
root.render(<App />);
/**
 * Entry point of application, where App is rendered within the div with the id of "app"


import React from "react";
import { render } from "react-dom";

import App from "./App";

render(<App></App>, document.getElementById("app"));
 */
