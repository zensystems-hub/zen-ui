'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var tslib_es6 = require('../../tslib.es6-529ef648.js');
var _ = _interopDefault(require('lodash'));

var fromTreeToFlat = function (tree) {
    var recurse = function (nodes) {
        return _.map(nodes, function (node) {
            return [_.omit(node, 'children'), recurse(node.children)];
        });
    };
    return _.flattenDeep(recurse(tree));
};
var convertCategoriesMap = function (categories, pathField, textField) {
    if (pathField === void 0) { pathField = 'id'; }
    if (textField === void 0) { textField = 'id'; }
    var result = {};
    var resursive = function (item, paths, map) {
        if (paths === void 0) { paths = []; }
        var clonePaths = tslib_es6.__spreadArrays(paths);
        var currentPath = item[pathField];
        if (currentPath) {
            clonePaths.push(String(currentPath));
        }
        if (clonePaths.length > 0) {
            map[clonePaths.join('/')] = String(item[textField]);
        }
        if (item.children) {
            item.children.forEach(function (c) { return resursive(c, clonePaths, map); });
        }
        return map;
    };
    categories.forEach(function (c) { return resursive(c, undefined, result); });
    return result;
};

exports.convertCategoriesMap = convertCategoriesMap;
exports.fromTreeToFlat = fromTreeToFlat;
//# sourceMappingURL=index.js.map
