import styles from './HorizontalChart.module.css'
import { Bar } from 'react-chartjs-2'

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js'
import { useEffect, useState } from 'react'

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
)

export default function HorizontalChart(){
    const [chartData, setChartData] = useState({
        datasets: []
    })
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        setChartData({
            labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            datasets: [
                {
                    label: 'horizzy 1',
                    data: [11111,22222,33333,44444,55555,66666, 77777],
                    borderColor: 'rgb(53,162,235)',
                    backgroundColor: 'rgba(53, 162, 235, 0.4)'
                },
                {
                    label: 'horizzy 2',
                    data: [111,222,333,444,555,666, 77777],
                    borderColor: 'rgb(53,162,235)',
                    backgroundColor: 'rgba(153, 162, 235, 0.4)'
                },
                {
                    label: 'horizzy 3',
                    data: [11111,22222,33333,44444,55555,66666, 77777],
                    borderColor: 'rgb(53,162,235)',
                    backgroundColor: 'rgba(240, 162, 235, 0.4)'
                }
            ]
        })

        setChartOptions({
            indexAxis: 'y',
            plugins: {
                legend: {
                    position: 'top'
                },
                title: {
                    display: true,
                    text: "Daily Revenue"
                }
            },
            maintainAspectRatio: true,
            responsive: true
        })
    }, [])

    return(
        <>
        <Bar data={chartData} options={chartOptions} style={{width:"500px", height: "300px"}}/>
        </>
    )
}