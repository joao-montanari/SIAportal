import React, { useRef, useEffect, useState } from "react";
import Chart from "chart.js/auto";

function ChartLine() {
  const chartRef = useRef();
  const [chart, setChart] = useState();

  useEffect(() => {

    const ctx = chartRef.current.getContext("2d");
    const newChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: ["2019", "2020", "2021", "2022", "2023"],
        datasets: [
          {
            label: "Alunos",
            data: [1180, 1200, 1300, 1800, 2100],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: { 
          x: {
            type: 'category',
          },
          y: {
            type: 'linear'
          },
        },
      },
    });

    setChart(newChart);

    return () => {
        newChart.destroy()
    }

  }, []);

  return (
    <canvas ref={chartRef} />
  )
}

export default ChartLine;
