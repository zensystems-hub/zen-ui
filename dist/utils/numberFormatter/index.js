'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function numericFormat(value, maxDecimalPoint) {
    if (maxDecimalPoint === void 0) { maxDecimalPoint = 3; }
    try {
        return Number(value).toLocaleString(undefined, {
            maximumFractionDigits: maxDecimalPoint,
        });
    }
    catch (e) {
        return '-';
    }
}
function bpsSize(size, unit, indices) {
    if (indices === void 0) { indices = 1000; }
    var out;
    var byteLimit = indices;
    var kbLimit = Math.pow(indices, 2);
    var mbLimit = Math.pow(indices, 3);
    var gbLimit = Math.pow(indices, 4);
    if (size === undefined || size === null) {
        return '-';
    }
    size = Number(size);
    if (size === 0) {
        return '0';
    }
    if (size < indices) {
        if (size === 1) {
            out = '1 bps';
        }
        else {
            out = size.toFixed(1) + (" " + (unit || 'bps'));
        }
    }
    else if (size < kbLimit) {
        out = Math.round((size * 10) / byteLimit) / 10 + (" K" + (unit || 'bps'));
    }
    else if (size < mbLimit) {
        out = Math.round((size * 10) / kbLimit) / 10 + (" M" + (unit || 'bps'));
    }
    else if (size < gbLimit) {
        out = Math.round((size * 10) / mbLimit) / 10 + (" G" + (unit || 'bps'));
    }
    else {
        out = Math.round((size * 10) / gbLimit) / 10 + (" T" + (unit || 'bps'));
    }
    return out;
}

exports.bpsSize = bpsSize;
exports.numericFormat = numericFormat;
//# sourceMappingURL=index.js.map
