let grafic_1_data = {
    chart: {
        type: 'line'
    },
    series: [{
        name: 'sales',
        data: [10, 25, 15, 30]
    }],
    xaxis: {
        categories: ["2020(1)", "2020(2)", "2020(3)", "2020(4)"]
    }
};
let grafic_2_data = {
    series: [{
        data: [17, 25, 60, 78, 95]
    }],
    chart: {
        type: 'area',
        height: 160,
        sparkline: {
            enabled: true
        },
    },
    stroke: {
        curve: 'straight'
    },
    fill: {
        opacity: 0.3,
    },
    yaxis: {
        min: 0
    },
    colors: ['#DCE6EC'],
    title: {
        text: '$462,020',
        offsetX: 0,
        style: {
            fontSize: '24px',
        }
    },
    subtitle: {
        text: 'Sales',
        offsetX: 0,
        style: {
            fontSize: '14px',
        }
    }
};
var grafic_3_data = {
    series: [{
        data: [4, 12, 30, 58, 79]
    }],
    chart: {
        type: 'area',
        height: 160,
        sparkline: {
            enabled: true
        },
    },
    stroke: {
        curve: 'straight'
    },
    fill: {
        opacity: 0.3,
    },
    yaxis: {
        min: 0
    },
    colors: ['#DCE6EC'],
    title: {
        text: '$169,322',
        offsetX: 0,
        style: {
            fontSize: '24px',
        }
    },
    subtitle: {
        text: 'Expenses',
        offsetX: 0,
        style: {
            fontSize: '14px',
        }
    }
};
let grafic_4_data = {
    series: [{
        data: [44, 55, 41, 17, 15]
    }],
    chart: {
        type: 'area',
        height: 160,
        sparkline: {
            enabled: true
        },
    },
    stroke: {
        curve: 'straight'
    },
    fill: {
        opacity: 0.3
    },
    xaxis: {
        crosshairs: {
            width: 1
        },
    },
    yaxis: {
        min: 0
    },
    title: {
        text: '$295,965',
        offsetX: 0,
        style: {
            fontSize: '24px',
        }
    },
    subtitle: {
        text: 'Profits',
        offsetX: 0,
        style: {
            fontSize: '14px',
        }
    }
};

let grafic_5_data = {
    series: [{
        name: 'Series 1',
        data: [20, 100, 40, 30, 50, 80, 33],
    }],
    chart: {
        height: 350,
        type: 'radar',
    },
    dataLabels: {
        enabled: true
    },
    plotOptions: {
        radar: {
            size: 140,
            polygons: {
                strokeColors: '#e9e9e9',
                fill: {
                    colors: ['#f8f8f8', '#fff']
                }
            }
        }
    },
    title: {
        text: 'Radar with Polygon Fill'
    },
    colors: ['#FF4560'],
    markers: {
        size: 4,
        colors: ['#fff'],
        strokeColor: '#FF4560',
        strokeWidth: 2,
    },
    tooltip: {
        y: {
            formatter: function (val) {
                return val
            }
        }
    },
    xaxis: {
        categories: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    },
    yaxis: {
        tickAmount: 7,
        labels: {
            formatter: function (val, i) {
                if (i % 2 === 0) {
                    return val
                } else {
                    return ''
                }
            }
        }
    }
};

let grafic_6_data = {
    chart: {
        type: 'pie'
    },
    series: [44, 55, 41, 17, 15],
    chartOptions: {
        labels: ['Apple', 'Mango', 'Orange', 'Watermelon']
    }
};

//let grafic_1 = new ApexCharts(document.querySelector("#main_content"), options_total_revenue);
function createGraf(url, grafics) {
    this.grafic = new ApexCharts(document.querySelector(`${url}`), grafics);
    return grafic.render();
}