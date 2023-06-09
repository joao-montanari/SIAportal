import React, { useRef, useEffect, useState } from "react";
import Chart from "chart.js/auto";

function ChartPie() {
  const chartRef = useRef();
  const [chart, setChart] = useState();

  useEffect(() => {

    const ctx = chartRef.current.getContext("2d");
    const newChart = new Chart(ctx, {
      type: "pie",
      data: {
        labels: ["Tecnologia", "Exatas", "Ciências", "Finanças", "Humanas"],
        datasets: [
          {
            label: "Cursos",
            data: [12, 19, 3, 5, 2],
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
        
      },
    });

    setChart(newChart);

    return () => {
        newChart.destroy()
    }

  }, []);

  return <canvas ref={chartRef} />;
}

export default ChartPie;
