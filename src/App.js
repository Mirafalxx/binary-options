import React from "react";
import Chart from "./components/Chart";
import PeriodBar from "./components/PeriodBar";
import SideBar from "./components/SideBar";
import "./App.scss";

const App = () => {
  return (
    <main className="main">
      <div className="container">
        {/* <PeriodBar /> */}
        <div className="chart-content">
          <Chart />
          <SideBar />
        </div>
      </div>
    </main>
  );
};

export default App;
