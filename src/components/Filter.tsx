import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";

interface ColumnChartProps {
  department: string;
}

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

const FilterChart: React.FC<ColumnChartProps> = ({ department }) => {
  const [chartState, setChartState] = useState<ColumnChartState>({
    series: [],
    options: {
      chart: { type: "bar", height: 450, width: 650 },
      plotOptions: {
        bar: { horizontal: false, columnWidth: "55%", endingShape: "rounded" },
      },
      dataLabels: { enabled: false },
      stroke: { show: true, width: 2, colors: ["transparent"] },
      xaxis: { categories: [] },
      yaxis: { title: { text: "Student" } },
      fill: { opacity: 1 },
      tooltip: { y: { formatter: (val) => `${val} student` } },
    },
  });

  useEffect(() => {
    fetch("../data.json")
      .then((response) => response.json())
      .then((data) => {
        if (data[department]) {
          const subjects = data[department].subject;
          const passData = data[department].pass;
          const failData = data[department].fail;

          setChartState((prevState) => ({
            ...prevState,
            series: [
              { name: "Pass", data: passData },
              { name: "Fail", data: failData },
            ],
            options: {
              ...prevState.options,
              xaxis: { categories: subjects },
            },
          }));
        } else {
          console.error(`Department ${department} not found in data.`);
        }
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [department]);

  return (
    <div className="fliterpage">
      <h1 style={{ color: "black" }}>Welcome to {department}:</h1>
      <div className="filterchart">
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

export default FilterChart;
