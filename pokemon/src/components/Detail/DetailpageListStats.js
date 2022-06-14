import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";



const DetailpageListStats = ({ pocket }) => {


  const options = {
    indexAxis: "y",
    elements: {
      bar: {
        borderWidth: 1,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        display:false
      },
      title: {
        display: true,
        text: "Stats",
        color: 'white',
        font: {
            size: 20, 
        }
      },
      animation: {
        animateScale : true,
        animateRotate : true
      }
    },
    scale: {
        pointLabels: {
            fontSize: 20,
            fontColor: '#607D8B'
        }
    }
  };

  return (
    <>
      <Bar
        data={{
          labels: pocket?.stats.map((type) => type.stat.name),
          datasets: [
            {
              label: pocket?.stats.map((type) => type.stat.name),
              data: pocket?.stats.map((type) => type.base_stat),
              backgroundColor: ["white"],
              borderColor: ["black"],
              borderWidth: 3,
              
            },
          ],
        }}
        options={options}
      />
    </>
  );
};

export default React.memo(DetailpageListStats);
