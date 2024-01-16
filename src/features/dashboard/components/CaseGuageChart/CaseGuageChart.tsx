import React, { useState, useEffect } from "react";
import { Chart } from "react-google-charts";

const CaseGuageChart = () => {
  const getData = () => {
    return [
      ["Label", "Value"],
      ["New", Math.random() * 100],
      ["High", Math.random() * 100],
      ["Completed", Math.random() * 100],
    ];
  };
  const [data, setData] = useState(getData);

  const options = {
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

  return (
    <Chart
      chartType="Gauge"
      height="inherit"
      data={data}
      options={options}
    />
  );
};

export default CaseGuageChart;
