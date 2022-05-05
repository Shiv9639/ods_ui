import React from 'react'
import Chart from "chart.js/auto";
import { Line } from 'react-chartjs-2'

function LineChart () {
  const data = {
    labels: [
      'Jan',
      'Feb',
      'Mar',
      'April',
      'May'
    ],
    datasets: [
      {
        label: 'DC Performance 2020 (M)',
        data: [3, 2, 2, 1, 5],
        borderColor: ['rgba(255, 206, 86, 0.9)'],
        backgroundColor: ['rgba(255, 206, 86, 0.9)'],
        pointBackgroundColor: 'rgba(255, 206, 86, 0.9)',
        pointBorderColor: 'rgba(255, 206, 86, 0.9)'
      },
      {
        label: 'DC Perfomance 2021 (M)',
        data: [1, 3, 2, 2, 3],
        borderColor: ['rgba(54, 162, 235, 0.9)'],
        backgroundColor: ['rgba(54, 162, 235, 0.9)'],
        pointBackgroundColor: 'rgba(54, 162, 235, 0.9)',
        pointBorderColor: 'rgba(54, 162, 235, 0.9)'
      }
    ]
  }

  const options = {
    title: {
      display: true,
      text: 'Line Chart'
    },
    scales: {
      yAxes: [
        {
          ticks: {
            min: 0,
            max: 6,
            stepSize: 1
          }
        }
      ]
    }
  }

  return <Line data={data} options={options} />
}

export default LineChart
