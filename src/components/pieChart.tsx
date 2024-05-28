import React from "react";
import ReactApexChart from "react-apexcharts";

interface ApexChartProps {}

interface ApexChartState {
  series: number[];
  options: {
    chart: {
      width: number;
      type: string;
    };
    labels: string[];
    responsive: {
      breakpoint: number;
      options: {
        chart: {
          width: number;
        };
        legend: {
          position: string;
        };
      };
    }[];
  };
}

const pieChart: React.FC<ApexChartProps> = () => {
  const [chartState] = React.useState<ApexChartState>({
    series: [100, 90, 108, 80, 88],
    options: {
      chart: {
        width: 380,
        type: "pie",
      },
      labels: ["IT", "ECE", "EEE", "MECH", "CSE"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  });

  return (
    <div className="pie" id="main">
      <div id="chart" className="pieCharts">
        <h4>Student Strength:</h4>
        <ReactApexChart
          options={chartState.options}
          series={chartState.series}
          type="pie"
          width={380}
        />
      </div>
      <div id="html-dist" style={{ padding: "20px" }}></div>
    </div>
  );
};

export default pieChart;
