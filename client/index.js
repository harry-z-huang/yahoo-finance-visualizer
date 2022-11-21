//Heavily inspired by https://github.com/DevModeVM/yt-stock-portfolio
import {Chart} from 'chart.js/auto'
import axios from "axios";

const chart = document.getElementById('chart')
const symbolInput = document.getElementById('symbol-input')

//Use fetch to get api call data
function getSymbol (symbol){
    fetch("/history?symbol=" + symbol)
    .then(data => {
        
    })
}

const config = {
    type: 'line',
    data: {
        labels: [],
        datasets: [{
            label: 'Stock price over year',
            backgroundColor: [],
            data: [],
        }]
    },
    options: {}
};

const myChart = new Chart(
    document.getElementById('chart'),
    config
);