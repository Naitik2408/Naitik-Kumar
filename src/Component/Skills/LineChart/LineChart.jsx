import React from 'react'
import {Line} from 'react-chartjs-2'
import { Chart as ChartJs } from 'chart.js/auto'
import {useSelector} from 'react-redux'

function LineChart() {
  const allData=useSelector(state=>state.langBarData.language)

  const data={
    labels: allData.months,
    datasets:[
      {
        label: allData.name,
        data: allData.value,
        backgroundColor:allData.color,
        borderColor: 'white',
        borderCapStyle: 'round',
        borderJoinStyle: 'round',
        pointRadius: [5,5,5,5,8],
        borderWidth: 0.4,
        clip: {left: 5, top: false, right: 10, bottom: 10}
      }
    ]
  }

  const options={
    responsive: true,
    maintainAspectRatio:true,
    aspectRatio: (window.innerWidth < 768 ? 1 : 1/0.7),
    title: {
      display: true,
      text: 'Line Chart'
    },
    scales:{
      y: {
        min:0,
        max:100,
        ticks: {
          stepSize:20
        },
        grid:{
          drawBorder:false,
          color:"rgba(255,255,255,.0)"
        }
      },
      x: {
        grid: {
          color: "rgba(255,255,255,.0)",
        }
      }
    }
  }
  return (
    
    <div>
      <Line data={data} options={options} />
    </div>
  )
}

export default LineChart
