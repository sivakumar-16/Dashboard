import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";

interface ColumnChartProps {}

interface ColumnChartState {
  series: { name: string; data: number[] }[];
  options: {
    chart: { type: string; height: number; width: number };
    plotOptions: {
      bar: { horizontal: boolean; columnWidth: string; endingShape: string };
    };
    dataLabels: { enabled: boolean };
    stroke: { show: boolean; width: number; colors: string[] };
    xaxis: { categories: string[] };
    yaxis: { title: { text: string } };
    fill: { opacity: number };
    tooltip: { y: { formatter: (val: number) => string } };
  };
}

const FliterChart: React.FC<ColumnChartProps> = () => {
  const [chartState, setChartState] = useState<ColumnChartState>({
    series: [],
    options: {
      chart: { type: "bar", height: 450, width: 650 },
      plotOptions: {
        bar: { horizontal: false, columnWidth: "55%", endingShape: "rounded" },
      },
      dataLabels: { enabled: false },
      stroke: { show: true, width: 5, colors: ["transparent"] },
      xaxis: { categories: [] },
      yaxis: { title: { text: "strenth" } },
      fill: { opacity: 1 },
      tooltip: { y: { formatter: (val) => `${val} strength` } },
    },
  });

  useEffect(() => {
    fetch("../main.json") // Adjust the path as necessary
      .then((response) => response.json())
      .then((data) => {
        const { Boys, Girls, categories } = data;
        setChartState((prevState) => ({
          ...prevState,
          series: [
            { name: "Boys", data: Boys },
            { name: "Girls", data: Girls },
          ],
          options: {
            ...prevState.options,
            xaxis: { categories: categories },
          },
        }));
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []); // Empty array as second argument to useEffect ensures it only runs once

  return (
    <div className="column" id="main">
      <div id="chart" className="columnCharts">
        <h4>Student Details:</h4>
        <ReactApexChart
          options={chartState.options}
          series={chartState.series}
          type="bar"
          height={350}
          width={550}
        />
      </div>
    </div>
  );
};

export default FliterChart;
