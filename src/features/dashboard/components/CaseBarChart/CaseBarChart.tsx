import React from "react";
import { Chart } from "react-google-charts";

const CaseBarChart = () => {
  const options = {
    chart: {
        title: 'Case Status'
    }
  };
  const data = [
    ["Employee Name", "New", "High", "In Progress", "Completed"],
    ["Tiger Nixon", 5, 2, 10, 15],
    ["Garrett Winters", 4, 1, 5, 3],
    ["Ashton Cox", 15, 5, 10, 30],
    ["Cedric Kelly", 20, 10, 40, 60],
  ];
  return (
    <Chart
      chartType="Bar"
      height="inherit"
      data={data}
      options={options}
    />
  );
};

export default CaseBarChart;
