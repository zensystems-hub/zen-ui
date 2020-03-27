'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var echarts = _interopDefault(require('echarts'));

echarts.registerTheme('dark', {
    backgroundColor: '#171717',
    color: ['#40AFE2', '#50B997', '#3D4373', '#7D1EC0', '#1D2DC3', '#7D1EC0'],
    title: {
        textStyle: {
            fontSize: '12',
            fontWeight: 'normal',
            color: '#fff',
        },
    },
    legend: {
        itemWidth: 10,
        itemHeight: 5,
        textStyle: {
            fontSize: 11,
            color: '#ccc',
        },
    },
    dataRange: {
        itemWidth: 15,
        color: ['#FFF808', '#21BCF9'],
        textStyle: {
            color: '#ccc',
        },
    },
    toolbox: {
        color: ['#fff', '#fff', '#fff', '#fff'],
        effectiveColor: '#FE8463',
        disableColor: '#666',
    },
    tooltip: {},
    dataZoom: {
        dataBackgroundColor: '#555',
        fillerColor: 'rgba(200,200,200,0.2)',
        handleColor: '#eee',
    },
    grid: {
        show: true,
        top: 25,
        bottom: 25,
        borderWidth: 0,
        backgroundColor: '#000000',
    },
    timeAxis: {
        axisLine: {
            show: false,
        },
        axisTick: {
            show: false,
        },
        axisLabel: {
            color: '#919191',
        },
        splitLine: {
            show: false,
        },
    },
    valueAxis: {
        axisLine: {
            show: false,
        },
        axisTick: {
            show: false,
        },
        axisLabel: { color: '#919191' },
        splitLine: {
            lineStyle: {
                color: '#141414',
            },
        },
        splitArea: {
            show: false,
        },
    },
    categoryAxis: {
        axisLabel: { color: '#919191' },
        splitLine: {
            lineStyle: {
                color: '#141414',
            },
        },
    },
    xAxis: {},
    yAxis: {},
    polar: {
        name: {
            textStyle: {
                color: '#ccc',
            },
        },
        axisLine: {
            lineStyle: {
                color: '#ddd',
            },
        },
        splitArea: {
            show: true,
        },
        splitLine: {
            lineStyle: {
                color: '#ddd',
            },
        },
    },
    timeline: {
        label: {
            textStyle: {
                color: '#ccc',
            },
        },
        lineStyle: {
            color: '#aaa',
        },
        controlStyle: {
            normal: { color: '#fff' },
            emphasis: { color: '#FE8463' },
        },
        symbolSize: 3,
    },
    line: {
        smooth: true,
        lineStyle: { width: 1 },
    },
    k: {
        itemStyle: {
            normal: {
                color: '#FE8463',
                color0: '#9BCA63',
                lineStyle: {
                    width: 1,
                    color: '#FE8463',
                    color0: '#9BCA63',
                },
            },
        },
    },
    radar: {
        symbol: 'emptyCircle',
        symbolSize: 3,
        name: {
            color: '#171717',
        },
        axisTick: {
            lineStyle: { type: 'dotted', color: '#666' },
        },
        axisLine: {
            lineStyle: { type: 'dotted', color: '#666' },
        },
        splitLine: {
            lineStyle: {
                type: 'dotted',
                color: '#666',
            },
        },
        splitArea: {
            areaStyle: {
                color: 'rgb(23, 23, 23)',
            },
        },
    },
    pie: {
        itemStyle: {
            normal: {
                borderWidth: 1,
                borderColor: '#666',
            },
            emphasis: {
                borderWidth: 1,
                borderColor: '#666',
            },
        },
    },
    map: {
        itemStyle: {
            normal: {
                borderColor: 'rgba(255, 255, 255, 0.5)',
                areaStyle: {
                    color: '#ddd',
                },
                label: {
                    textStyle: {
                    // color: '#ccc'
                    },
                },
            },
            emphasis: {
                areaStyle: {
                    color: '#FE8463',
                },
                label: {
                    textStyle: {
                    // color: 'ccc'
                    },
                },
            },
        },
    },
    force: {
        itemStyle: {
            normal: {
                linkStyle: {
                    color: '#fff',
                },
            },
        },
    },
    chord: {
        itemStyle: {
            normal: {
                borderWidth: 1,
                borderColor: 'rgba(228, 228, 228, 0.2)',
                chordStyle: {
                    lineStyle: {
                        color: 'rgba(228, 228, 228, 0.2)',
                    },
                },
            },
            emphasis: {
                borderWidth: 1,
                borderColor: 'rgba(228, 228, 228, 0.9)',
                chordStyle: {
                    lineStyle: {
                        color: 'rgba(228, 228, 228, 0.9)',
                    },
                },
            },
        },
    },
    bar: {
        barCategoryGap: '40%',
    },
    gauge: {
        axisLine: {
            show: true,
            lineStyle: {
                color: [
                    [0.2, '#9BCA63'],
                    [0.8, '#60C0DD'],
                    [1, '#D7504B'],
                ],
                width: 3,
                shadowColor: '#fff',
                shadowBlur: 10,
            },
        },
        axisTick: {
            length: 15,
            lineStyle: {
                color: 'auto',
                shadowColor: '#fff',
                shadowBlur: 10,
            },
        },
        axisLabel: {
            textStyle: {
                fontWeight: 'bolder',
                color: '#fff',
                shadowColor: '#fff',
                shadowBlur: 10,
            },
        },
        splitLine: {
            length: 25,
            lineStyle: {
                width: 3,
                color: '#fff',
                shadowColor: '#fff',
                shadowBlur: 10,
            },
        },
        pointer: {
            shadowColor: '#fff',
            shadowBlur: 5,
        },
        title: {
            textStyle: {
                fontWeight: 'bolder',
                fontSize: 20,
                fontStyle: 'italic',
                color: '#fff',
                shadowColor: '#fff',
                shadowBlur: 10,
            },
        },
        detail: {
            shadowColor: '#fff',
            shadowBlur: 5,
            offsetCenter: [0, '50%'],
            textStyle: {
                fontWeight: 'bolder',
                color: '#fff',
            },
        },
    },
    funnel: {
        itemStyle: {
            normal: {
                borderColor: 'rgba(255, 255, 255, 0.5)',
                borderWidth: 1,
            },
            emphasis: {
                borderColor: 'rgba(255, 255, 255, 1)',
                borderWidth: 1,
            },
        },
    },
    textStyle: {
        fontFamily: 'Arial, Verdana, sans-serif',
    },
});
echarts.registerTheme('white', {
    // backgroundColor: '#f5f5f5',
    title: {
        left: 'center',
        top: 5,
    },
    backgroundColor: 'transparent',
    grid: {
        show: true,
        borderWidth: 0,
        top: 25,
        bottom: 50,
        backgroundColor: 'transparent',
    },
    categoryAxis: {
        axisLine: {
            show: false,
            lineStyle: { color: '#ddd' },
        },
        axisTick: {
            show: false,
        },
        axisLabel: {
            color: '#a0a0a0',
        },
        splitLine: {
            show: false,
        },
    },
    valueAxis: {
        boundaryGap: ['0', '20%'],
        axisLine: {
            show: true,
            lineStyle: {
                color: '#bbb',
            },
        },
        axisTick: {
            show: true,
            lineStyle: {
                color: '#bbb',
            },
        },
        axisLabel: {
            color: '#333',
        },
        splitLine: {
            show: true,
            color: '#eee',
        },
    },
    timeAxis: {
        axisLine: {
            show: false,
        },
        axisTick: {
            show: false,
        },
        axisLabel: {
        // formatter: function(value) {
        //   return Ext.Date.format(new Date(value), 'H:i');
        // },
        },
        splitLine: {
            show: false,
        },
    },
    line: {
        lineStyle: { width: 1 },
    },
});
//# sourceMappingURL=theme-a43a4109.js.map
