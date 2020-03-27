'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var tslib_es6 = require('../../tslib.es6-529ef648.js');
var index$2 = require('../../utils/numberFormatter/index.js');
var React = require('react');
var React__default = _interopDefault(React);
var ReactEcharts = _interopDefault(require('echarts-for-react'));

var barChartOptions = {
    animation: false,
    grid: {
        right: 10,
        left: 70,
        top: 35,
    },
    legend: {
        bottom: 5,
    },
    tooltip: {
        trigger: 'item',
        formatter: function (param) {
            return param.marker + " " + param.seriesName + ": <b>" + index$2.bpsSize(param.data) + "</b>";
        },
    },
    xAxis: { type: 'category' },
    yAxis: {
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
};
function BarChart(_a) {
    var _b = _a.option, option = _b === void 0 ? {} : _b, height = _a.height, other = tslib_es6.__rest(_a, ["option", "height"]);
    return (React__default.createElement(ReactEcharts, tslib_es6.__assign({ style: { height: height }, option: tslib_es6.__assign(tslib_es6.__assign({}, barChartOptions), option) }, other)));
}
BarChart.defaultProps = {
    theme: 'white',
    height: 250,
};

exports.default = BarChart;
//# sourceMappingURL=index.js.map
