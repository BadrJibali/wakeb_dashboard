///////////////////////////////////////
//////////// Doughnut Chart ///////////
///////////////////////////////////////

const doughnutChart = document.getElementById('myDoughnutChart');
const myDoughnutChart = new Chart(doughnutChart, {
    type: 'doughnut',
    data: {
        datasets: [
            // Outer circle chart
            {
                data: [50, '15', 30, '10'],
                backgroundColor: [
                    '#FFAE22',
                    '#25245D',
                    '#54D1F1',
                    '#25245D',
                ],
                borderColor: [
                    '#FFAE22',
                    'transparent',
                    '#54D1F1',
                    'transparent',
                ],
            },
            // Middle circle chart
            {
                data: [30, '15', 60, '10'],
                backgroundColor: [
                    '#F89A7E',
                    '#25245D',
                    '#AF2AFF',
                    '#25245D',
                ],
                borderColor: [
                    '#F89A7E',
                    'transparent',
                    '#AF2AFF',
                    'transparent',
                ],
                radius: '75%'
            },

            // Inner chart
            {
                data: [80, '15', 40, '10'],
                backgroundColor: [
                    '#00AAA0',
                    '#25245D',
                    '#FF7A5A',
                    '#25245D',
                ],
                borderColor: [
                    '#00AAA0',
                    'transparent',
                    '#FF7A5A',
                    'transparent',
                ],
                radius: '50%'
            },
        ]
    },
    options: {
        cutout: '75%',
        borderWidth: 2,
        responsive: true,
        maintainAspectRatio: false,
        borderRadius: 100,
        spacing: 2,
        layout: {
            padding: {
                bottom: 7
            }
        }
    }
}
);

///////////////////////////////////////
/////////////// Bar Chart /////////////
///////////////////////////////////////

// const barChart = document.getElementById('myBarChart');
// const DATA_COUNT = 7;
// const NUMBER_CFG = {count: 20, min: -100, max: 100};
// const labels = Utils.months({count: 7});


// const labelsM = Utils.months({count: 7});
const ctx = document.getElementById('myBarChart');
const myBarChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'],
        datasets: [

            {
                data: [12, 19, 23, 15, 12, 10, 12, 16, 10, 20, 14, 30],
                backgroundColor: [
                    '#54D1F1'
                ],
            },
            {
                data: [12, 19, 14, 18, 20, 14, 12, 14, 20, 30, 22, 10],
                backgroundColor: [
                    '#C3C3E5'
                ],
            },
            {
                data: [75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75],
                backgroundColor: [
                    '#25245D'
                ],
            }
        ]
    },
    options: {
        // responsive: true,
        maxBarThickness: 6.5,
        borderSkipped: 'middle',
        // borderSkipped: false,
        backgroundColor: '#25245D',
        borderRadius: 200,
        minBarLength: 5,
        scales: {
            alignToPixels: true,
            x: {
                stacked: true,
                ticks: {
                    maxRotation: 0,
                    color: '#C3C3E5',
                    font: {
                        size: 9
                    },
                },
                grid: {
                    display: false,
                    offset: true,
                }
            },
            myScale: {
                stacked: true,
                type: 'linear',
                position: 'left', // `axis` is determined by the position as `'y'`
                display: false,
                beginAtZero: true,
            },
            // y: {
            //     type: 'linear',
            //     min: 0,
            //     max: 100,
            //     suggestedMin: 50,
            //     suggestedMax: 100,
            //     beginAtZero: true,
            //     display: false,
            // }
        },
        plugins: {
            legend: {
                display: false,
            }
        }
    }
});

