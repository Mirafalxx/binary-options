import React, { useEffect, useState } from "react";
import Chart from "./components/Chart";
import PeriodBar from "./components/PeriodBar";
import SideBar from "./components/SideBar";
import { init, registerOverlay } from "klinecharts";
import "./App.scss";
import rect from "./components/extenstion/rect";
import circle from "./components/extenstion/circle";
import { ChartProvider } from "./utils/ChartContext";
import ChartTest from "./components/ChartTest";

const App = () => {
  const [chartOpt, setChartOpt] = useState(null);

  useEffect(() => {
    let chart;
    chart = init("demo-chart");
    window.chart = chart;
    setChartOpt(chart);
    chart.setStyles({
      grid: false,
    });
  }, []);

  useEffect(() => {
    registerOverlay(rect);
    // registerOverlay(circle);
  }, []);

  return (
    <ChartProvider chartSettings={chartOpt}>
      <main className="main">
        <div className="container">
          {/* <PeriodBar /> */}
          <div className="chart-content">
            {/* <Chart /> */}
            <ChartTest />
            <SideBar />
          </div>
        </div>
      </main>
    </ChartProvider>
  );
};

export default App;
