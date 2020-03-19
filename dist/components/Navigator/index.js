'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var core = require('@material-ui/core');
var reactRouterDom = require('react-router-dom');
var styles = require('@material-ui/core/styles');
var styles$1 = require('@material-ui/styles');

var useStyles = styles.makeStyles(function (theme) {
    return styles.createStyles({
        drawerPaper: {
            backgroundColor: theme.palette.background.default,
        },
        listRoot: {
            padding: theme.spacing(3, 0),
            width: 300,
        },
        topListRoot: {
            display: 'flex',
            flexDirection: 'row',
            padding: 0,
        },
        listItemRoot: {
            paddingTop: theme.spacing(3),
            paddingBottom: theme.spacing(3),
            color: theme.palette.text.primary,
            '&:hover,&:focus': {
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
            },
        },
        listItemSelected: {
            color: '#4fc3f7',
        },
        leftNavigatorLogo: {
            fontSize: 24,
            height: 80,
            display: 'flex',
            cursor: 'pointer',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: 'DroidSans',
            color: theme.palette.primary.main,
            textDecoration: 'none',
        },
        topNavigatorLogo: {},
        listItemIconRoot: {
            color: 'inherit',
            minWidth: 'auto',
            marginRight: theme.spacing(3),
        },
        listItemTextPrimary: {
            fontSize: 'inherit',
            fontWeight: theme.typography.fontWeightMedium,
        },
    });
});

var LeftNavigator = function (_a) {
    var logo = _a.logo, pathname = _a.pathname, _b = _a.categories, categories = _b === void 0 ? [] : _b, homePath = _a.homePath, classes = _a.classes;
    return (React__default.createElement(core.Drawer, { classes: { paper: classes.drawerPaper }, variant: "permanent" },
        React__default.createElement(reactRouterDom.Link, { className: classes.leftNavigatorLogo, to: homePath }, logo),
        React__default.createElement(core.List, { classes: { root: classes.listRoot }, disablePadding: true }, categories.map(function (_a) {
            var id = _a.id, children = _a.children, parentPath = _a.path;
            return (React__default.createElement(React__default.Fragment, { key: id }, children &&
                children.map(function (_a) {
                    var childId = _a.id, icon = _a.icon, path = _a.path;
                    var toPath = parentPath + "/" + path;
                    return (React__default.createElement(core.ListItem, { button: true, key: path, component: reactRouterDom.Link, to: toPath, selected: pathname === toPath, classes: {
                            root: classes.listItemRoot,
                            selected: classes.listItemSelected,
                        } },
                        icon && (React__default.createElement(core.ListItemIcon, { classes: { root: classes.listItemIconRoot } }, icon)),
                        React__default.createElement(core.ListItemText, { classes: { primary: classes.listItemTextPrimary } }, childId)));
                })));
        })),
        React__default.createElement(core.Divider, null)));
};
var TopNavigator = function (_a) {
    var logo = _a.logo, pathname = _a.pathname, _b = _a.categories, categories = _b === void 0 ? [] : _b, homePath = _a.homePath, classes = _a.classes;
    return (React__default.createElement(core.Container, { maxWidth: "lg", className: classes.topListRoot },
        React__default.createElement(reactRouterDom.Link, { className: classes.topNavigatorLogo, to: homePath }, logo),
        React__default.createElement(core.List, { classes: { root: classes.topListRoot } }, categories.map(function (_a) {
            var id = _a.id, children = _a.children, parentPath = _a.path;
            return (React__default.createElement(React__default.Fragment, { key: id }, children &&
                children.map(function (_a) {
                    var childId = _a.id, icon = _a.icon, path = _a.path;
                    var toPath = parentPath + "/" + path;
                    return (React__default.createElement(core.ListItem, { button: true, key: path, component: reactRouterDom.Link, to: toPath, selected: pathname === toPath, classes: {
                            root: classes.listItemRoot,
                            selected: classes.listItemSelected,
                        } },
                        icon && React__default.createElement(core.ListItemIcon, null, icon),
                        React__default.createElement(core.ListItemText, null, childId)));
                })));
        }))));
};
var Navigator = function (_a) {
    var _b = _a.position, position = _b === void 0 ? 'left' : _b, logo = _a.logo, _c = _a.categories, categories = _c === void 0 ? [] : _c, homePath = _a.homePath, _d = _a.classes, classList = _d === void 0 ? {} : _d;
    var usePropStyles = React__default.useMemo(function () { return styles$1.makeStyles(classList); }, [
        classList,
    ]);
    var propStyles = usePropStyles();
    var classes = useStyles({ classes: propStyles });
    var pathname = reactRouterDom.useLocation().pathname;
    return position === 'left' ? (React__default.createElement(LeftNavigator, { pathname: pathname, categories: categories, logo: logo, homePath: homePath, classes: classes })) : (React__default.createElement(TopNavigator, { pathname: pathname, categories: categories, logo: logo, homePath: homePath, classes: classes }));
};
Navigator.defaultProps = {
    homePath: '/',
};

exports.default = Navigator;
//# sourceMappingURL=index.js.map
