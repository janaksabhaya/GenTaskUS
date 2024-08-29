import React from 'react';
import Chart from 'react-apexcharts';

const SentimentChart = () => {
  const series = [
    {
      name: 'Group 1',
      data: [
        [0.1, 1], [0.6, 1.2], [1, 2], [1.5, 2.3],
        [2, 1], [2.4, 1.7], [3, 2.5], [3.7, 2.1],
      ],
      color: '#5bc0de' // Teal dots
    },
    {
      name: 'Group 2',
      data: [
        [0.5, 0.5], [1, 0.5], [1.7, 1.2], [2, 1],
        [2.5, 1], [3, 1.5], [3.5, 1.5],
      ],
      color: '#8d6e63' // Brown dots
    },
    {
      name: 'Group 3',
      data: [
        [0.7, -0.3], [1.5, 0.4], [2, -0.5], [2.5, -0.6],
        [2.91, -0.9], [3.5, -0.6],
      ],
      color: '#d9534f' // Red dots
    },
  ];

  const options = {
    chart: {
      type: 'scatter',
      height: 350,
      toolbar: {
        show: false
      }
    },
    xaxis: {
      type: 'numeric',
      min: 0,
      max: 4,
      tickAmount: 4,
      labels: {
        formatter: (val) => `${val.toFixed(2)}`
      }
    },
    yaxis: {
      min: -2,
      max: 3,
      tickAmount: 6, // This controls the number of ticks on the y-axis
      labels: {
        formatter: (val) => `${val}`, // Show the actual values
        show: false // Display Y-axis labels if needed
      }
    },
    grid: {
      xaxis: {
        lines: {
          show: true
        }
      },
      yaxis: {
        lines: {
          show: true
        }
      }
    },
    markers: {
      size: 8,
      hover: {
        size: 10
      }
    },
    dataLabels: {
      enabled: false
    },
    legend: {
      show: false // Hide the legend
    }
  };

  return (
    <div className="scatter-chart">
      <Chart options={options} series={series} type="scatter" height={200} />
    </div>
  );
};

export default SentimentChart;
