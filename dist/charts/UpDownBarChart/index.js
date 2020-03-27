'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var tslib_es6 = require('../../tslib.es6-529ef648.js');
var _ = _interopDefault(require('lodash'));
var index$2 = require('../../utils/numberFormatter/index.js');
var React = require('react');
var React__default = _interopDefault(React);
var ReactEcharts = _interopDefault(require('echarts-for-react'));

var upDownBarChartOptions = {
    animation: false,
    legend: { bottom: 5 },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow',
        },
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
    },
    grid: [
        {
            right: 20,
            left: 70,
            top: 15,
            height: 125,
        },
        {
            right: 20,
            left: 70,
            top: 140,
            height: 125,
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
                formatter: function (value) { return index$2.bpsSize(value); },
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
                formatter: function (value) { return index$2.bpsSize(value); },
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
    series: [
        {
            type: 'bar',
            name: 'In 트래픽',
            itemStyle: {
                opacity: 0.8,
            },
            emphasis: {
                itemStyle: {
                    opacity: 1,
                },
            },
            encode: {
                y: 'inTraffic',
                tooltip: ['inTraffic'],
            },
        },
        {
            xAxisIndex: 1,
            yAxisIndex: 1,
            type: 'bar',
            name: 'Out 트래픽',
            itemStyle: {
                opacity: 0.8,
            },
            emphasis: {
                itemStyle: {
                    opacity: 1,
                },
            },
            encode: {
                y: 'outTraffic',
                tooltip: ['outTraffic'],
            },
        },
    ],
};
function UpDownBarChart(_a) {
    var _b = _a.option, option = _b === void 0 ? {} : _b, height = _a.height, dataset = _a.dataset, other = tslib_es6.__rest(_a, ["option", "height", "dataset"]);
    return (React__default.createElement(ReactEcharts, tslib_es6.__assign({ style: { height: height }, option: tslib_es6.__assign(tslib_es6.__assign({ dataset: dataset }, upDownBarChartOptions), option) }, other)));
}
UpDownBarChart.defaultProps = {
    theme: 'white',
    height: 320,
};

exports.default = UpDownBarChart;
exports.upDownBarChartOptions = upDownBarChartOptions;
//# sourceMappingURL=index.js.map
