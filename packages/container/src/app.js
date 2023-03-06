import React from "react";
import { mount } from "marketing/MarketingApp";
import MarketingApp from "./components/marketingApp";

const App = () => {
  return (
    <div>
      <h1>Hi there!</h1>
      <hr />
      <MarketingApp />
    </div>
  );
};

export default App;
