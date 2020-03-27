'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var tslib_es6 = require('../../tslib.es6-529ef648.js');
var React = require('react');
var React__default = _interopDefault(React);
var core = require('@material-ui/core');
var styles$1 = require('@material-ui/core/styles');
var IconButton = _interopDefault(require('@material-ui/core/IconButton'));
var icons = require('@material-ui/icons');
var moment = _interopDefault(require('moment'));
var Card = _interopDefault(require('@material-ui/core/Card'));
var ExpandMoreIcon = _interopDefault(require('@material-ui/icons/ExpandMore'));
var CardHeader = _interopDefault(require('@material-ui/core/CardHeader'));
var Collapse = _interopDefault(require('@material-ui/core/Collapse'));

function toVal(mix) {
	var k, y, str='';
	if (mix) {
		if (typeof mix === 'object') {
			if (Array.isArray(mix)) {
				for (k=0; k < mix.length; k++) {
					if (mix[k] && (y = toVal(mix[k]))) {
						str && (str += ' ');
						str += y;
					}
				}
			} else {
				for (k in mix) {
					if (mix[k] && (y = toVal(k))) {
						str && (str += ' ');
						str += y;
					}
				}
			}
		} else if (typeof mix !== 'boolean' && !mix.call) {
			str && (str += ' ');
			str += mix;
		}
	}
	return str;
}

function clsx () {
	var i=0, x, str='';
	while (i < arguments.length) {
		if (x = toVal(arguments[i++])) {
			str && (str += ' ');
			str += x;
		}
	}
	return str;
}

var useStyles = styles$1.makeStyles(function (theme) {
    return styles$1.createStyles({
        expand: {
            transform: 'rotate(0deg)',
            marginLeft: 'auto',
            transition: theme.transitions.create('transform', {
                duration: theme.transitions.duration.shortest,
            }),
        },
        expandOpen: {
            transform: 'rotate(180deg)',
        },
        date: {
            fontSize: 13,
            color: theme.palette.text.hint,
            marginRight: 5,
            marginTop: 2,
        },
    });
});

function Panel(_a) {
    var _b;
    var title = _a.title, collapsible = _a.collapsible, refreshable = _a.refreshable, refreshTimeFormat = _a.refreshTimeFormat, _c = _a.children, children = _c === void 0 ? [] : _c, rest = tslib_es6.__rest(_a, ["title", "collapsible", "refreshable", "refreshTimeFormat", "children"]);
    var classes = useStyles();
    var _d = React__default.useState(true), expanded = _d[0], setExpanded = _d[1];
    var handleExpandClick = React.useCallback(function () {
        setExpanded(!expanded);
    }, [expanded]);
    var _e = React.useState(moment().format(refreshTimeFormat)), date = _e[0], setDate = _e[1];
    var refresh = React.useCallback(function () {
        setDate(moment().format(refreshTimeFormat));
    }, [refreshTimeFormat]);
    return (React__default.createElement(Card, tslib_es6.__assign({}, rest),
        (title || collapsible || refreshable) && (React__default.createElement(CardHeader, { title: title, action: React__default.createElement(React.Fragment, null,
                refreshable && (React__default.createElement(React__default.Fragment, null,
                    React__default.createElement("span", { className: classes.date }, date),
                    React__default.createElement(IconButton, { size: "small", "aria-label": "refresh", onClick: refresh },
                        React__default.createElement(icons.Sync, null)))),
                collapsible && (React__default.createElement(IconButton, { size: "small", className: clsx(classes.expand, (_b = {},
                        _b[classes.expandOpen] = expanded,
                        _b)), "aria-label": "collapsible", onClick: handleExpandClick },
                    React__default.createElement(ExpandMoreIcon, { fontSize: "small" })))) })),
        React__default.createElement(Collapse, { in: expanded, timeout: "auto", unmountOnExit: true },
            React__default.createElement(core.CardContent, { key: date }, children))));
}
Panel.defaultProps = {
    collapsible: false,
    refreshable: false,
    refreshTimeFormat: 'YYYY-MM-DD HH:mm:ss',
};

exports.default = Panel;
//# sourceMappingURL=index.js.map
