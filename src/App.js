import React, { useState } from "react";
import "./App.css";
import CompoundInterestCalculator from "./Components/CompoundInterestCalculator";
import SIPCalculator from "./Components/SIPCalculator";
import Tabs from "./Components/Tabs";

function App() {
  const [activeTab, setActiveTab] = useState("compound");

  return (
    <div className="App">
      <h1>Investment Calculators</h1>
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="content">
        {activeTab === "compound" && <CompoundInterestCalculator />}
        {activeTab === "sip" && <SIPCalculator />}
      </div>
    </div>
  );
}

export default App;
