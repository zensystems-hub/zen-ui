'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var IconButton = _interopDefault(require('@material-ui/core/IconButton'));
var Tooltip = _interopDefault(require('@material-ui/core/Tooltip'));
var Box = _interopDefault(require('@material-ui/core/Box'));
var icons = require('@material-ui/icons');

function Title(_a) {
    var text = _a.text, tooltip = _a.tooltip;
    return (React__default.createElement(React__default.Fragment, null,
        React__default.createElement("span", null, text),
        tooltip && (React__default.createElement(Tooltip, { title: tooltip, arrow: true },
            React__default.createElement(IconButton, { size: "small", style: { padding: 0, marginTop: -2, marginLeft: 5 } },
                React__default.createElement(Box, { color: "#F77374", clone: true },
                    React__default.createElement(icons.InfoOutlined, null)))))));
}

exports.default = Title;
//# sourceMappingURL=index.js.map
