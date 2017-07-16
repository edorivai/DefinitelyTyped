import { Chart, ChartData } from 'chart.js';

// alternative:
// import chartjs = require('chart.js');
// => chartjs.Chart

let chart: Chart = new Chart(new CanvasRenderingContext2D(), {
    type: 'bar',
    data: <ChartData> {
        labels: ['group 1'],
        datasets: [
            {
                backgroundColor: '#000000',
                borderWidth: 1,
                label: 'test',
                data: [1]
            }
        ]
    },
    options: {
        scales: {
            xAxes: [{
                gridLines: { display: false }
            }]
        }
    }
});
chart.update();

console.log(chart.ctx && chart.ctx.font);
console.log(chart.canvas && chart.canvas.tagName);
if (chart.chartArea) {
    console.log(chart.chartArea.top);
    console.log(chart.chartArea.right);
    console.log(chart.chartArea.bottom);
    console.log(chart.chartArea.left);
}
