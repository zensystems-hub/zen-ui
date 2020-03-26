'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var tslib_es6 = require('../../tslib.es6-529ef648.js');
var React = require('react');
var React__default = _interopDefault(React);
var core = require('@material-ui/core');
var reactRouterDom = require('react-router-dom');
var styles = require('@material-ui/styles');
var styles$1 = require('@material-ui/core/styles');

var useLeftStyles = styles$1.makeStyles(function (theme) {
    return styles$1.createStyles({
        drawerPaper: {
            backgroundColor: theme.palette.background.default,
        },
        // drawer: {
        //   [theme.breakpoints.up('sm')]: {
        //     width: drawerWidth,
        //     flexShrink: 0,
        //   },
        // },
        // unDrawer: {
        //   [theme.breakpoints.up('sm')]: {
        //     width: 0,
        //     flexShrink: 0,
        //   },
        // },
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
var useTopStyles = styles$1.makeStyles(function (theme) {
    var _a;
    return styles$1.createStyles({
        listItemRoot: {
            justifyContent: 'center',
        },
        listItemTextRoot: {
            flex: 'inherit',
        },
        listItemSelected: {
            color: theme.palette.primary.light,
            '& .MuiListItemText-primary': {
                fontWeight: 700,
            },
        },
        itemIcon: {
            minWidth: 'auto',
            marginRight: theme.spacing(3),
            marginTop: theme.spacing(-1),
        },
        iconButtonAvatar: {
            color: theme.palette.common.white,
        },
        userInfo: (_a = {},
            _a[theme.breakpoints.down('lg')] = {
                display: 'none',
            },
            _a.display = 'flex',
            _a.position = 'absolute',
            _a.right = 40,
            _a['& > .username'] = {
                marginLeft: 5,
                lineHeight: '23px',
                // color: theme.palette.primary.light,
                fontWeight: 'bold',
            },
            _a),
    });
});

function LeftNavigator(_a) {
    var logo = _a.logo, _b = _a.categories, categories = _b === void 0 ? [] : _b, homePath = _a.homePath, classList = _a.classes, other = tslib_es6.__rest(_a, ["logo", "categories", "homePath", "classes"]);
    var usePropStyles = React__default.useMemo(function () { return styles.makeStyles(classList); }, [
        classList,
    ]);
    var propStyles = usePropStyles();
    var classes = useLeftStyles({ classes: propStyles });
    var pathname = reactRouterDom.useLocation().pathname;
    return (React__default.createElement(core.Drawer, tslib_es6.__assign({ classes: { paper: classes.drawerPaper } }, other),
        React__default.createElement(reactRouterDom.Link, { className: classes.leftNavigatorLogo, to: homePath }, logo),
        React__default.createElement(core.List, { classes: { root: classes.listRoot }, disablePadding: true }, categories.map(function (_a) {
            var id = _a.id, text = _a.text, icon = _a.icon, path = _a.path;
            return (React__default.createElement(core.ListItem, { button: true, key: id, component: reactRouterDom.Link, to: path, selected: pathname === path, classes: {
                    root: classes.listItemRoot,
                    selected: classes.listItemSelected,
                } },
                icon && (React__default.createElement(core.ListItemIcon, { classes: { root: classes.listItemIconRoot } }, icon)),
                React__default.createElement(core.ListItemText, { classes: { primary: classes.listItemTextPrimary } }, text)));
        })),
        React__default.createElement(core.Divider, null)));
}
LeftNavigator.defaultProps = {
    homePath: '/',
};

function TopNavigator(_a) {
    var logo = _a.logo, _b = _a.categories, categories = _b === void 0 ? [] : _b, homePath = _a.homePath, classList = _a.classes, other = tslib_es6.__rest(_a, ["logo", "categories", "homePath", "classes"]);
    var usePropStyles = React__default.useMemo(function () { return styles.makeStyles(classList); }, [
        classList,
    ]);
    var propStyles = usePropStyles();
    var classes = useTopStyles({ classes: propStyles });
    var pathname = reactRouterDom.useLocation().pathname;
    return (React__default.createElement(core.Container, tslib_es6.__assign({ maxWidth: "lg" }, other),
        React__default.createElement(core.List, { style: { display: 'flex' } },
            React__default.createElement(core.ListItem, { component: reactRouterDom.Link, to: homePath }, logo),
            categories.map(function (_a) {
                var id = _a.id, icon = _a.icon, text = _a.text, children = _a.children, path = _a.path;
                return (React__default.createElement(core.ListItem, { key: id, button: true, component: reactRouterDom.Link, to: path, selected: pathname === path, classes: {
                        root: classes.listItemRoot,
                        selected: classes.listItemSelected,
                    } },
                    icon && React__default.createElement(core.ListItemIcon, null, icon),
                    React__default.createElement(core.ListItemText, null, text)));
            }))));
}
TopNavigator.defaultProps = {
    homePath: '/',
};

exports.LeftNavigator = LeftNavigator;
exports.TopNavigator = TopNavigator;
exports.default = Navigator;
//# sourceMappingURL=index.js.map
