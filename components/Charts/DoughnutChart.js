import React from 'react'
import Chart from "chart.js/auto";
import { Doughnut } from 'react-chartjs-2'
import "../../assets/css/chart.css"
function DoughnutChart () {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'April', 'May'],
    datasets: [
      {
        label: 'Profitability(2021) (M)',
        data: [3, 2, 2, 6, 4],
        backgroundColor: [
          'rgba(255, 99, 132, .5)',
          'rgba(255, 205, 86, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(153, 102, 255, 1)'
        ]
      }
    ]
  }

  const options = {
    title: {
      display: true,
      text: "Doughnut Chart",
    },
    responsive: true,
    maintainAspectRatio: true,
    
  };

  //return <Doughnut data={data}  options={options} />;
  
   return (
     <div className="container">
       <Doughnut data={data} options={options} />
     </div>
   );
}

export default DoughnutChart
