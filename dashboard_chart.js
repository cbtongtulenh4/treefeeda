const chartData = {
    labels: [
        '14 Jun', '15 Jun', '16 Jun', '17 Jun', '18 Jun', '19 Jun', '20 Jun',
        '21 Jun', '22 Jun', '23 Jun', '24 Jun', '25 Jun', '26 Jun', '27 Jun',
        '28 Jun', '29 Jun', '30 Jun', '01 Jul', '02 Jul', '03 Jul', '04 Jul',
        '05 Jul', '06 Jul', '07 Jul', '08 Jul', '09 Jul', '10 Jul', '11 Jul', '12 Jul'
    ],
    datasets: [
        {
            label: 'uHits',
            data: [400, 220, 240, 200, 180, 160, 200, 180, 220, 160, 200, 180, 220, 200, 180, 200, 220, 180, 200, 180, 160, 140, 200, 180, 160, 140, 120, 160, 180],
            borderColor: '#ec4899',
            backgroundColor: 'rgba(236, 72, 153, 0.1)',
            borderWidth: 2,
            fill: false,
            tension: 0.1,
            yAxisID: 'y'
        },
        {
            label: 'Hits',
            data: [1200, 900, 980, 720, 820, 740, 680, 820, 800, 640, 320, 720, 800, 1020, 800, 760, 920, 760, 940, 800, 860, 800, 760, 800, 680, 640, 580, 480, 400],
            borderColor: '#f97316',
            backgroundColor: 'rgba(249, 115, 22, 0.1)',
            borderWidth: 2,
            fill: false,
            tension: 0.1,
            yAxisID: 'y'
        },
        {
            label: 'Clicks',
            data: [180, 200, 220, 200, 180, 200, 220, 180, 160, 40, 60, 80, 100, 80, 200, 180, 200, 180, 200, 180, 160, 40, 80, 60, 80, 60, 80, 60, 40],
            borderColor: '#3b82f6',
            backgroundColor: 'rgba(59, 130, 246, 0.1)',
            borderWidth: 2,
            fill: false,
            tension: 0.1,
            yAxisID: 'y'
        },
        {
            label: 'Revenue',
            data: [0, 6, 5, 0, 0, 6, 12, 5, 0, 0, 0, 0, 0, 6, 5, 0, 0, 5, 6, 5, 0, 5, 0, 5, 0, 0, 5, 0, 0],
            borderColor: '#22c55e',
            backgroundColor: 'rgba(34, 197, 94, 0.1)',
            borderWidth: 2,
            fill: false,
            tension: 0.1,
            yAxisID: 'y1'
        }
    ]
};

const config = {
    type: 'line',
    data: chartData,
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false // We're using custom legend
            },
            tooltip: {
                mode: 'index',
                intersect: false,
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                titleColor: '#fff',
                bodyColor: '#fff',
                borderColor: 'rgba(255, 255, 255, 0.1)',
                borderWidth: 1,
                cornerRadius: 8,
                callbacks: {
                    label: function(context) {
                        let label = context.dataset.label || '';
                        if (label) {
                            label += ': ';
                        }
                        if (context.dataset.label === 'Revenue') {
                            label += '$' + context.parsed.y.toFixed(2);
                        } else {
                            label += context.parsed.y.toLocaleString();
                        }
                        return label;
                    }
                }
            }
        },
        interaction: {
            mode: 'nearest',
            axis: 'x',
            intersect: false
        },
        scales: {
            x: {
                display: true,
                grid: {
                    display: false
                },
                ticks: {
                    color: '#6b7280',
                    font: {
                        size: 12
                    },
                    maxTicksLimit: 10
                }
            },
            y: {
                type: 'linear',
                display: true,
                position: 'left',
                grid: {
                    color: 'rgba(0, 0, 0, 0.05)'
                },
                ticks: {
                    color: '#6b7280',
                    font: {
                        size: 12
                    },
                    callback: function(value) {
                        if (value >= 1000) {
                            return (value / 1000).toFixed(1) + 'K';
                        }
                        return value;
                    }
                },
                title: {
                    display: true,
                    text: 'Hits, uHits, Clicks',
                    color: '#6b7280',
                    font: {
                        size: 12
                    }
                }
            },
            y1: {
                type: 'linear',
                display: true,
                position: 'right',
                grid: {
                    drawOnChartArea: false,
                },
                ticks: {
                    color: '#6b7280',
                    font: {
                        size: 12
                    },
                    callback: function(value) {
                        return '$' + value.toFixed(2);
                    }
                },
                title: {
                    display: true,
                    text: 'Revenue ($)',
                    color: '#6b7280',
                    font: {
                        size: 12
                    }
                }
            }
        },
        elements: {
            point: {
                radius: 3,
                hoverRadius: 6,
                borderWidth: 2,
                hoverBorderWidth: 2
            }
        }
    }
};

// Initialize the chart
const ctx = document.getElementById('performanceChart').getContext('2d');
const performanceChart = new Chart(ctx, config);

// Optional: Add data update functionality
function updateChartData() {
    // You can add logic here to fetch new data and update the chart
    // performanceChart.data.datasets[0].data = newData;
    // performanceChart.update();
}

// Optional: Add responsive behavior
// window.addEventListener('resize', function() {
//     performanceChart.resize();
// });