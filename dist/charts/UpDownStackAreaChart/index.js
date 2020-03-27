'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var tslib_es6 = require('../../tslib.es6-529ef648.js');
var _ = _interopDefault(require('lodash'));
var index$2 = require('../../utils/numberFormatter/index.js');
var React = require('react');
var React__default = _interopDefault(React);
var ReactEcharts = _interopDefault(require('echarts-for-react'));

var upDownStackAreaChartOptions = {
    animation: false,
    legend: { bottom: 5 },
    // color: ['#00B1AE', '#D8D8D8', '#3D4373', '#7D1EC0', '#1D2DC3', '#7D1EC0'],
    tooltip: {
        trigger: 'axis',
        position: function (pos, params, dom, rect, size) {
            var obj = { top: '10%', left: 0 };
            if (size.viewSize[0] > pos[0] + size.contentSize[0] + 80) {
                obj.left = pos[0] + 80;
            }
            else {
                obj.left = pos[0] - size.contentSize[0] - 80;
            }
            return obj;
        },
        formatter: function (params) {
            var content = ["" + params[0].name];
            _.chain(params)
                .sortBy('componentIndex')
                .each(function (item) {
                var yIndex = item.encode.y[0];
                content.push(item.marker + " <b>" + item.seriesId + "</b>: " + index$2.bpsSize(item.value[yIndex]));
            })
                .value();
            return content.join('<br/>');
        },
    },
    grid: [
        {
            right: 20,
            left: 70,
            top: 30,
            height: 130,
        },
        {
            right: 20,
            left: 70,
            top: 160,
            height: 130,
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
    series: [],
};
function UpDownTrafficChart(_a) {
    var _b = _a.option, option = _b === void 0 ? {} : _b, height = _a.height, dataset = _a.dataset, other = tslib_es6.__rest(_a, ["option", "height", "dataset"]);
    return (React__default.createElement(ReactEcharts, tslib_es6.__assign({ style: { height: height }, option: tslib_es6.__assign(tslib_es6.__assign({ dataset: dataset }, upDownStackAreaChartOptions), option) }, other)));
}
UpDownTrafficChart.defaultProps = {
    theme: 'white',
    height: 345,
};

exports.default = UpDownTrafficChart;
//# sourceMappingURL=index.js.map
