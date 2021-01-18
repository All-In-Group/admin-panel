let grafic_1_data = {
    chart: {
        type: "line"
    },
    series: [{
        name: "sales",
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
        type: "area",
        height: 160,
        sparkline: {
            enabled: true
        },
    },
    stroke: {
        curve: "straight"
    },
    fill: {
        opacity: 0.3,
    },
    yaxis: {
        min: 0
    },
    colors: ["#DCE6EC"],
    title: {
        text: "$462,020",
        offsetX: 0,
        style: {
            fontSize: "24px",
        }
    },
    subtitle: {
        text: "Sales",
        offsetX: 0,
        style: {
            fontSize: "14px",
        }
    }
};

let grafic_3_data = {
    series: [{
        data: [4, 12, 30, 58, 79]
    }],
    chart: {
        type: "area",
        height: 160,
        sparkline: {
            enabled: true
        },
    },
    stroke: {
        curve: "straight"
    },
    fill: {
        opacity: 0.3,
    },
    yaxis: {
        min: 0
    },
    colors: ["#DCE6EC"],
    title: {
        text: "$169,322",
        offsetX: 0,
        style: {
            fontSize: "24px",
        }
    },
    subtitle: {
        text: "Expenses",
        offsetX: 0,
        style: {
            fontSize: "14px",
        }
    }
};

let grafic_4_data = {
    series: [{
        data: [44, 55, 41, 17, 15]
    }],
    chart: {
        type: "area",
        height: 160,
        sparkline: {
            enabled: true
        },
    },
    stroke: {
        curve: "straight"
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
        text: "$295,965",
        offsetX: 0,
        style: {
            fontSize: "24px",
        }
    },
    subtitle: {
        text: "Profits",
        offsetX: 0,
        style: {
            fontSize: "14px",
        }
    }
};

let grafic_5_data = {
    series: [{
        name: "Series 1",
        data: [20, 90, 40, 30, 50, 80, 33],
    }],
    chart: {
        height: 350,
        type: "radar",
    },
    dataLabels: {
        enabled: true
    },
    plotOptions: {
        radar: {
            size: 140,
            polygons: {
                strokeColors: "#e9e9e9",
                fill: {
                    colors: ["#f8f8f8", "#fff"]
                }
            }
        }
    },
    //title: { text: "Radar" },
    colors: ["#FF4560"],
    markers: {
        size: 4,
        colors: ["#fff"],
        strokeColor: "#FF4560",
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
        categories: ["A", "B", "C", "D", "E", "F", "G"]
    },
    yaxis: {
        tickAmount: 7,
        labels: {
            formatter: function (val, i) {
                if (i % 2 === 0) {
                    return val
                } else {
                    return ""
                }
            }
        }
    }
};

let grafic_6_data = {
    chart: {
        type: "pie"
    },
    series: [44, 55, 41, 17, 15],
    chartOptions: {
        labels: ["Apple", "Mango", "Orange", "Watermelon"]
    }
};

let dashboard_2_data = {
    series: [{
        name: 'Marine Sprite',
        data: [44, 55, 41, 37, 22, 43, 21]
    }, {
        name: 'Striking Calf',
        data: [53, 32, 33, 52, 13, 43, 32]
    }, {
        name: 'Tank Picture',
        data: [12, 17, 11, 9, 15, 11, 20]
    }, {
        name: 'Bucket Slope',
        data: [9, 7, 5, 8, 6, 9, 4]
    }, {
        name: 'Reborn Kid',
        data: [25, 12, 19, 32, 25, 24, 10]
    }],
    chart: {
        type: 'bar',
        height: 350,
        stacked: true,
    },
    plotOptions: {
        bar: {
            horizontal: true,
        },
    },
    stroke: {
        width: 1,
        colors: ['#fff']
    },
    title: {
        text: 'Fiction Books Sales'
    },
    xaxis: {
        categories: [2015, 2016, 2017, 2018, 2019, 2020, 2021],
        labels: {
            formatter: function (val) {
                return val + "K"
            }
        }
    },
    tooltip: {
        y: {
            formatter: function (val) {
                return val + "K"
            }
        }
    },
    fill: {
        opacity: 1
    },
    legend: {
        position: 'top',
        horizontalAlign: 'left',
        offsetX: 40
    }
};

let dashboard_3_data = {
    series: [{
        name: 'Likes',
        data: [4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 5, 13, 9, 17, 2, 7, 5]
    }],
    chart: {
        height: 350,
        type: 'line',
    },
    stroke: {
        width: 7,
        curve: 'smooth'
    },
    xaxis: {
        type: 'datetime',
        categories: ['1/11/2000', '2/11/2000', '3/11/2000', '4/11/2000', '5/11/2000', '6/11/2000', '7/11/2000', '8/11/2000', '9/11/2000', '10/11/2000', '11/11/2000', '12/11/2000', '1/11/2001', '2/11/2001', '3/11/2001', '4/11/2001', '5/11/2001', '6/11/2001'],
        tickAmount: 10,
        labels: {
            formatter: function (value, timestamp, opts) {
                return opts.dateFormatter(new Date(timestamp), 'dd MMM')
            }
        }
    },
    title: {
        text: 'Social Media',
        align: 'left',
        style: {
            fontSize: "16px",
            color: '#666'
        }
    },
    fill: {
        type: 'gradient',
        gradient: {
            shade: 'dark',
            gradientToColors: ['#FDD835'],
            shadeIntensity: 1,
            type: 'horizontal',
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100, 100, 100]
        },
    },
    markers: {
        size: 4,
        colors: ["#FFA41B"],
        strokeColors: "#fff",
        strokeWidth: 2,
        hover: {
            size: 7,
        }
    },
    yaxis: {
        min: -10,
        max: 40,
        title: {
            text: 'Engagement',
        },
    }
};

let dashboard_4_data = {
    series: [{
        name: 'Income',
        type: 'column',
        data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6]
    }, {
        name: 'Cashflow',
        type: 'column',
        data: [1.1, 3, 3.1, 4, 4.1, 4.9, 6.5, 8.5]
    }, {
        name: 'Revenue',
        type: 'line',
        data: [20, 29, 37, 36, 44, 45, 50, 58]
    }],
    chart: {
        height: 350,
        type: 'line',
        stacked: false
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        width: [1, 1, 4]
    },
    title: {
        text: 'XYZ - Stock Analysis (2016 - 2023)',
        align: 'left',
        offsetX: 110
    },
    xaxis: {
        categories: [2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023],
    },
    yaxis: [
        {
            axisTicks: {
                show: true,
            },
            axisBorder: {
                show: true,
                color: '#008FFB'
            },
            labels: {
                style: {
                    colors: '#008FFB',
                }
            },
            title: {
                text: "Income (thousand crores)",
                style: {
                    color: '#008FFB',
                }
            },
            tooltip: {
                enabled: true
            }
        },
        {
            seriesName: 'Income',
            opposite: true,
            axisTicks: {
                show: true,
            },
            axisBorder: {
                show: true,
                color: '#00E396'
            },
            labels: {
                style: {
                    colors: '#00E396',
                }
            },
            title: {
                text: "Operating Cashflow (thousand crores)",
                style: {
                    color: '#00E396',
                }
            },
        },
        {
            seriesName: 'Revenue',
            opposite: true,
            axisTicks: {
                show: true,
            },
            axisBorder: {
                show: true,
                color: '#FEB019'
            },
            labels: {
                style: {
                    colors: '#FEB019',
                },
            },
            title: {
                text: "Revenue (thousand crores)",
                style: {
                    color: '#FEB019',
                }
            }
        },
    ],
    tooltip: {
        fixed: {
            enabled: true,
            position: 'topLeft', // topRight, topLeft, bottomRight, bottomLeft
            offsetY: 30,
            offsetX: 60
        },
    },
    legend: {
        horizontalAlign: 'left',
        offsetX: 40
    }
};

//let grafic_1 = new ApexCharts(document.querySelector("#main_content"), options_total_revenue);
function createGraf(url, grafics) {
    this.grafic = new ApexCharts(document.querySelector(`${url}`), grafics);
    return grafic.render();
}
