'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var core = require('@material-ui/core');
var reactRouterDom = require('react-router-dom');
var styles$1 = require('@material-ui/core/styles');
var Breadcrumbs = _interopDefault(require('@material-ui/core/Breadcrumbs'));
var reactRouter = require('react-router');
var HomeIcon = _interopDefault(require('@material-ui/icons/Home'));

var StyledBreadcrumb = styles$1.withStyles(function (theme) { return ({
    root: {
        height: theme.spacing(8),
        fontWeight: theme.typography.fontWeightRegular,
        cursor: 'pointer',
        '& .selected': {
            cursor: 'normal',
        },
    },
}); })(core.Chip);
var useStyles = styles$1.makeStyles(function () {
    return styles$1.createStyles({
        root: {
            display: 'flex',
            flexDirection: 'column',
            '& a': {
                textDecoration: 'none',
            },
        },
    });
});
function RouterBreadcrumbs(_a) {
    var _b = _a.hasHome, hasHome = _b === void 0 ? true : _b, pathMap = _a.pathMap;
    var classes = useStyles();
    return (React__default.createElement("div", { className: classes.root },
        React__default.createElement(reactRouter.Route, null, function (_a) {
            var location = _a.location;
            var pathnames = location.pathname.split('/').filter(function (x) { return x; });
            return (React__default.createElement(Breadcrumbs, { "aria-label": "breadcrumb" },
                hasHome && (React__default.createElement(reactRouterDom.Link, { color: "inherit", to: "/" },
                    React__default.createElement(StyledBreadcrumb, { label: "Home", icon: React__default.createElement(HomeIcon, null) }))),
                pathnames.map(function (value, index) {
                    var last = index === pathnames.length - 1;
                    var to = "" + pathnames.slice(0, index + 1).join('/');
                    var text = pathMap[to];
                    if (text) {
                        return last ? (React__default.createElement(StyledBreadcrumb, { key: to, component: "div", color: "primary", className: "selected", label: text })) : (React__default.createElement(reactRouterDom.Link, { color: "inherit", key: to, to: "/" + to },
                            React__default.createElement(StyledBreadcrumb, { label: text })));
                    }
                    return false;
                })));
        })));
}

exports.default = RouterBreadcrumbs;
//# sourceMappingURL=index.js.map
