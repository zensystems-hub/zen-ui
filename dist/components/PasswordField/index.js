'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var tslib_es6 = require('../../tslib.es6-529ef648.js');
var React = require('react');
var React__default = _interopDefault(React);
var TextField = _interopDefault(require('@material-ui/core/TextField'));
var IconButton = _interopDefault(require('@material-ui/core/IconButton'));
var InputAdornment = _interopDefault(require('@material-ui/core/InputAdornment'));
var Visibility = _interopDefault(require('@material-ui/icons/Visibility'));
var VisibilityOff = _interopDefault(require('@material-ui/icons/VisibilityOff'));

var PasswordField = function (_a) {
    var _b = _a.InputProps, InputProps = _b === void 0 ? {} : _b, props = tslib_es6.__rest(_a, ["InputProps"]);
    var _c = React.useState(false), showPassword = _c[0], setPasswordMode = _c[1];
    return (React__default.createElement(TextField, tslib_es6.__assign({ type: showPassword ? 'text' : 'password', InputProps: Object.assign({
            endAdornment: (React__default.createElement(InputAdornment, { position: "end" },
                React__default.createElement(IconButton, { "aria-label": "toggle password visibility", onClick: function () { return setPasswordMode(!showPassword); } }, showPassword ? React__default.createElement(Visibility, null) : React__default.createElement(VisibilityOff, null)))),
        }, InputProps) }, props)));
};

exports.default = PasswordField;
//# sourceMappingURL=index.js.map
