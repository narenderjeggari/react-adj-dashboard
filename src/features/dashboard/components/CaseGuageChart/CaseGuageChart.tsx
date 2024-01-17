import React, { useState, useEffect } from "react";
import { Chart } from "react-google-charts";

const CaseGuageChart = () => {
  const getData = () => {
    return [
      ["Label", "Value"],
      ["My Slef", Math.random() * 100],
      ["My Unit", Math.random() * 100],
      ["Others Unit", Math.random() * 100],
    ];
  };
  const [data, setData] = useState(getData);

  const options = {
    width: 500,
    height: 150,
    greenFrom: 75,
    greenTo: 100,
    redFrom: 0,
    redTo: 50,
    yellowFrom: 50,
    yellowTo: 75,
    minorTicks: 5,
  };

  useEffect(() => {
    const id = setInterval(() => {
      setData(getData());
    }, 3000);

    return () => {
      clearInterval(id);
    };
  });

  return <Chart chartType="Gauge" data={data} options={options} />;
};

export default CaseGuageChart;
