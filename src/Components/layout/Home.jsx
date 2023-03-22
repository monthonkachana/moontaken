import React from "react";
import Chart from "../chart/Chart";
import Chart2 from "../chart/Chart2";
import Featured from "../eventname/Eventname";
import Smaillcheck from "../TotalSales/Smaillcheck";
import Smaillorders from "../TotalSales/Smaillorders";
import Smaillticket from "../TotalSales/Smaillticket";
import TotalSales from "../TotalSales/TotalSales";
Chart;
import "./home.scss";

function Home() {
  return (
    <div className="homeContainer">
      <div className="top">
        <Featured />
        <TotalSales />

        <Smaillticket />
        <Smaillorders />
        <Smaillcheck />
      </div>
      <div className="charts">
        <Chart />
        <Chart2 />
      </div>
    </div>
  );
}

export default Home;
