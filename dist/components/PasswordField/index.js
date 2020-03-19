'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var TextField = _interopDefault(require('@material-ui/core/TextField'));
var IconButton = _interopDefault(require('@material-ui/core/IconButton'));
var InputAdornment = _interopDefault(require('@material-ui/core/InputAdornment'));
var Visibility = _interopDefault(require('@material-ui/icons/Visibility'));
var VisibilityOff = _interopDefault(require('@material-ui/icons/VisibilityOff'));

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

var PasswordField = function (_a) {
    var _b = _a.InputProps, InputProps = _b === void 0 ? {} : _b, props = __rest(_a, ["InputProps"]);
    var _c = React.useState(false), showPassword = _c[0], setPasswordMode = _c[1];
    return (React__default.createElement(TextField, __assign({ type: showPassword ? 'text' : 'password', InputProps: Object.assign({
            endAdornment: (React__default.createElement(InputAdornment, { position: "end" },
                React__default.createElement(IconButton, { "aria-label": "toggle password visibility", onClick: function () { return setPasswordMode(!showPassword); } }, showPassword ? React__default.createElement(Visibility, null) : React__default.createElement(VisibilityOff, null)))),
        }, InputProps) }, props)));
};

exports.default = PasswordField;
//# sourceMappingURL=index.js.map
