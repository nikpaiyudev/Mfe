import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
// Mount function to start up
const mount = (el) => {
  ReactDOM.render(<App />, el);
};

if (process.env.NODE_ENV === "development") {
  const root = document.querySelector("#marketing-dev-root");
  if (root) {
    mount(root);
  }
}

export { mount };
