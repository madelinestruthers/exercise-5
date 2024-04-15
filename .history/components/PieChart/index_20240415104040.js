import styles from './PieChart.module.css'
import { Pie } from 'react-chartjs-2'

import {
    Chart as ChartJS,
    CategoryScale,
    ArcElement,
    Tooltip,
    Legend
} from 'chart.js'
import { useEffect, useState } from 'react'

ChartJS.register(
    CategoryScale,
    ArcElement,
    Tooltip,
    Legend
)

export default function PieChart(){
    const [chartData, setChartData] = useState({
        datasets: []
    })
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        setChartData({
            labels: ["red", "blue", "yellow", "purple", "orange"],
            datasets: [
                {
                    label: '# of votes',
                    data: [12,19,3,4,2,3],
                    borderColor: [
                        'rgba(83, 162, 235, 0.4)',
                        'rgba(255, 162, 25, 0.4)',
                        'rgba(123, 162, 235, 0.4)',
                        'rgba(200, 162, 135, 0.4)',
                        'rgba(99, 162, 235, 0.4)',
                        'rgba(22, 162, 235, 0.4)'],
                    backgroundColor: [
                    'rgba(83, 162, 235, 0.4)',
                    'rgba(255, 162, 25, 0.4)',
                    'rgba(123, 162, 235, 0.4)',
                    'rgba(200, 162, 135, 0.4)',
                    'rgba(99, 162, 235, 0.4)',
                    'rgba(22, 162, 235, 0.4)'],
                    borderWidth: 1
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
        <Pie data={chartData} options={chartOptions} style={{width:"500px", height: "300px"}}/>
        </>
    )
}