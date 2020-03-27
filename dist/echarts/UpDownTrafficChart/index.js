'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var tslib_es6 = require('../../tslib.es6-529ef648.js');
var _ = _interopDefault(require('lodash'));
var index$2 = require('../../utils/numberFormatter/index.js');
var React = require('react');
var React__default = _interopDefault(React);
var ReactEcharts = _interopDefault(require('echarts-for-react'));

var upDownTrafficChartOptions = {
    animation: false,
    legend: { bottom: 5 },
    // color: ['#00B1AE', '#D8D8D8', '#3D4373', '#7D1EC0', '#1D2DC3', '#7D1EC0'],
    tooltip: {
        trigger: 'axis',
        formatter: function (params) {
            var content = ["" + params[0].name];
            _.chain(params)
                .sortBy('seriesName')
                .each(function (item) {
                var yIndex = item.encode.y[0];
                content.push(item.marker + " <b>" + item.seriesName + "</b>: " + index$2.bpsSize(item.value[yIndex]));
            })
                .value();
            return content.join('<br/>');
        },
        position: function (pos, params, dom, rect, size) {
            var obj = { top: '30%', left: 0 };
            if (size.viewSize[0] > pos[0] + size.contentSize[0] + 80) {
                obj.left = pos[0] + 80;
            }
            else {
                obj.left = pos[0] - size.contentSize[0] - 80;
            }
            return obj;
        },
    },
    grid: [
        {
            right: 80,
            left: 70,
            top: 30,
            height: 100,
        },
        {
            right: 80,
            left: 70,
            top: 130,
            height: 100,
        },
    ],
    axisPointer: {
        link: { xAxisIndex: 'all' },
    },
    xAxis: [
        {
            type: 'category',
            show: false,
        },
        {
            type: 'category',
            gridIndex: 1,
            axisLine: {
                show: true,
            },
        },
    ],
    yAxis: [
        {
            type: 'value',
            splitNumber: 3,
            axisLabel: {
                formatter: function (value) { return (value ? index$2.bpsSize(value) : '0'); },
            },
            axisPointer: {
                label: {
                    formatter: function (_a) {
                        var value = _a.value;
                        return index$2.bpsSize(value);
                    },
                },
            },
        },
        {
            type: 'value',
            gridIndex: 1,
            splitNumber: 3,
            inverse: true,
            axisLabel: {
                formatter: function (value) { return (value ? index$2.bpsSize(value) : '0'); },
            },
            axisPointer: {
                label: {
                    formatter: function (_a) {
                        var value = _a.value;
                        return index$2.bpsSize(value);
                    },
                },
            },
        },
    ],
    // dataZoom: [
    // {type:'slider', xAxisIndex:[0,1], start:0, end:100, bottom:50},
    // {type:'inside', xAxisIndex:[0,1]}
    // ],
    series: [
        {
            type: 'line',
            showSymbol: false,
            areaStyle: { opacity: 0.7 },
            id: 'inTraffic',
            name: 'In 트래픽',
            markPoint: {
                data: [
                    {
                        type: 'max',
                        name: '최대 In 트래픽',
                        symbol: 'rect',
                        symbolSize: [80, 20],
                        symbolOffset: [0, -15],
                        label: {
                            formatter: function (_a) {
                                var value = _a.value;
                                return index$2.bpsSize(value);
                            },
                        },
                    },
                ],
            },
            markLine: {
                data: [
                    {
                        type: 'average',
                        label: {
                            formatter: function (_a) {
                                var value = _a.value;
                                return index$2.bpsSize(value);
                            },
                        },
                    },
                ],
            },
            encode: {
                x: 'date',
                y: 'inTraffic',
                tooltip: 'inTraffic',
            },
        },
        {
            type: 'line',
            xAxisIndex: 1,
            yAxisIndex: 1,
            encode: {
                x: 'date',
                y: 'outTraffic',
                tooltip: 'outTraffic',
            },
            id: 'outTraffic',
            name: 'Out 트래픽',
            showSymbol: false,
            areaStyle: { opacity: 0.7 },
            markPoint: {
                data: [
                    {
                        type: 'max',
                        name: '최대 Out 트래픽',
                        symbol: 'rect',
                        symbolSize: [80, 20],
                        symbolOffset: [0, 15],
                        label: {
                            formatter: function (_a) {
                                var value = _a.value;
                                return index$2.bpsSize(value);
                            },
                        },
                    },
                ],
            },
            markLine: {
                data: [
                    {
                        type: 'average',
                        label: {
                            formatter: function (_a) {
                                var value = _a.value;
                                return index$2.bpsSize(value);
                            },
                        },
                    },
                ],
            },
        },
    ],
};
function UpDownTrafficChart(_a) {
    var loading = _a.loading, _b = _a.options, options = _b === void 0 ? {} : _b, height = _a.height, theme = _a.theme, dataset = _a.dataset;
    return (React__default.createElement(ReactEcharts, { theme: theme, showLoading: loading, style: { height: height }, option: tslib_es6.__assign(tslib_es6.__assign({ dataset: dataset }, upDownTrafficChartOptions), options) }));
}
UpDownTrafficChart.defaultProps = {
    theme: 'white',
    height: 285,
    loading: false,
};

exports.default = UpDownTrafficChart;
//# sourceMappingURL=index.js.map
