'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var tslib_es6 = require('../../tslib.es6-529ef648.js');
var index$2 = require('../../utils/numberFormatter/index.js');
var React = require('react');
var React__default = _interopDefault(React);
var ReactEcharts = _interopDefault(require('echarts-for-react'));

var pieChartOptions = {
    animation: false,
    legend: {
        bottom: 5,
    },
    tooltip: {
        trigger: 'item',
        formatter: function (param) {
            var content = [param.marker + " " + param.name];
            content.push("<b>" + index$2.bpsSize(param.data[1]) + " (" + param.percent + " %)</b>");
            return content.join('<br/>');
        },
    },
    series: [
        {
            type: 'pie',
            center: ['50%', '48%'],
            radius: '45%',
            label: {
                normal: {
                    formatter: function (param) { return param.name + "\n(" + param.percent + " %)"; },
                },
            },
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)',
                },
            },
            encode: {
                itemName: 'name',
                value: 'value',
                tooltip: 'value',
            },
        },
    ],
};
function PieChart(_a) {
    var _b = _a.option, option = _b === void 0 ? {} : _b, height = _a.height, dataset = _a.dataset, other = tslib_es6.__rest(_a, ["option", "height", "dataset"]);
    return (React__default.createElement(ReactEcharts, tslib_es6.__assign({ style: { height: height }, option: tslib_es6.__assign(tslib_es6.__assign({ dataset: dataset }, pieChartOptions), option) }, other)));
}
PieChart.defaultProps = {
    theme: 'white',
    height: 250,
};

exports.default = PieChart;
//# sourceMappingURL=index.js.map
