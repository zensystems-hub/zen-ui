'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

require('../../tslib.es6-529ef648.js');
var React = require('react');
var React__default = _interopDefault(React);
var core = require('@material-ui/core');
var styles = require('@material-ui/styles');
require('@material-ui/core/TextField');
require('@material-ui/core/IconButton');
require('@material-ui/core/InputAdornment');
require('@material-ui/icons/Visibility');
require('@material-ui/icons/VisibilityOff');
var index$2 = require('../../components/PasswordField/index.js');
var reactHookForm = require('react-hook-form');
var icons = require('@material-ui/icons');

var useStyles = core.makeStyles(function (theme) {
    return core.createStyles({
        background: {
            backgroundColor: '#5A5D5E',
            width: 'auto',
            overflow: 'hidden',
            height: '100vh',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
        },
        paperRoot: {
            marginBottom: theme.spacing(8),
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: theme.spacing(2),
            marginLeft: theme.spacing(3),
            marginRight: theme.spacing(3),
            width: 300,
            backgroundColor: 'transparent',
        },
        submit: {
            marginTop: theme.spacing(2),
            marginBottom: theme.spacing(3),
        },
        captchRoot: {
            marginTop: 6,
            marginBottom: 3,
            position: 'relative',
            backgroundColor: '#464647',
            height: 49,
        },
        captchImage: {
            position: 'absolute',
        },
        iconButton: {
            position: 'absolute',
            right: theme.spacing(5),
            top: theme.spacing(3),
        },
    });
});

function Login(_a) {
    var logo = _a.logo, onSubmit = _a.onSubmit, loading = _a.loading, refreshCaptcha = _a.refreshCaptcha, captchaImage = _a.captchaImage, goSignUp = _a.goSignUp, message = _a.message, _b = _a.classes, classList = _b === void 0 ? {} : _b;
    var usePropStyles = React__default.useMemo(function () { return styles.makeStyles(classList); }, [
        classList,
    ]);
    var propStyles = usePropStyles();
    var classes = useStyles({ classes: propStyles });
    var _c = React__default.useState(false), open = _c[0], setOpen = _c[1];
    var _d = reactHookForm.useForm({
        mode: 'onChange',
    }), register = _d.register, formState = _d.formState, handleSubmit = _d.handleSubmit;
    React.useEffect(function () {
        if (message) {
            setOpen(true);
        }
    }, [message]);
    return (React__default.createElement("div", { className: classes.background },
        React__default.createElement(core.Paper, { classes: { root: classes.paperRoot } },
            logo,
            React__default.createElement("form", { onSubmit: handleSubmit(onSubmit) },
                React__default.createElement(core.TextField, { autoFocus: true, margin: "normal", variant: "outlined", inputRef: register({ required: true }), label: "\uC0AC\uC6A9\uC790 \uACC4\uC815", name: "username", autoComplete: "off", fullWidth: true }),
                React__default.createElement(index$2.default, { margin: "normal", variant: "outlined", label: "\uBE44\uBC00\uBC88\uD638", name: "password", inputRef: register({ required: true }), autoComplete: "off", fullWidth: true }),
                refreshCaptcha && (React__default.createElement(React__default.Fragment, null,
                    React__default.createElement(core.Paper, { className: classes.captchRoot },
                        captchaImage && (React__default.createElement("img", { className: classes.captchImage, alt: "captcha key", src: captchaImage })),
                        React__default.createElement(core.IconButton, { className: classes.iconButton, "aria-label": "captcha key refresh", onClick: function () { return refreshCaptcha(); } },
                            React__default.createElement(icons.Refresh, null))),
                    React__default.createElement(core.TextField, { margin: "normal", variant: "outlined", inputRef: register({ required: true }), label: "\uBCF4\uC548\uBB38\uC790 \uC785\uB825", name: "captchaValue", autoComplete: "off", fullWidth: true }))),
                React__default.createElement(core.Button, { type: "submit", fullWidth: true, variant: "contained", color: "primary", disabled: loading || !formState.isValid, className: classes.submit }, loading ? '로그인 중입니다...' : '로그인'),
                React__default.createElement(core.Button, { onClick: goSignUp, color: "secondary", variant: "contained", fullWidth: true }, "\uD68C\uC6D0\uAC00\uC785"))),
        React__default.createElement(core.Dialog, { open: open, onClose: function () { return setOpen(false); } },
            React__default.createElement(core.DialogTitle, null, "\uC54C\uB9BC"),
            React__default.createElement(core.DialogContent, null,
                React__default.createElement(core.DialogContentText, null, message)))));
}

exports.default = Login;
//# sourceMappingURL=index.js.map
