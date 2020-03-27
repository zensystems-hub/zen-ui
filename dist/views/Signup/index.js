'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var index = require('../../utils/passwordRule/index.js');
require('../../tslib.es6-529ef648.js');
var React = require('react');
var React__default = _interopDefault(React);
var core = require('@material-ui/core');
var styles = require('@material-ui/styles');
var TextField = _interopDefault(require('@material-ui/core/TextField'));
require('@material-ui/core/IconButton');
require('@material-ui/core/InputAdornment');
require('@material-ui/icons/Visibility');
require('@material-ui/icons/VisibilityOff');
var index$4 = require('../../components/PasswordField/index.js');
var reactHookForm = require('react-hook-form');
var Paper = _interopDefault(require('@material-ui/core/Paper'));
var FormControl = _interopDefault(require('@material-ui/core/FormControl'));
var InputLabel = _interopDefault(require('@material-ui/core/InputLabel'));
var OutlinedInput = _interopDefault(require('@material-ui/core/OutlinedInput'));
var FormHelperText = _interopDefault(require('@material-ui/core/FormHelperText'));
var Button = _interopDefault(require('@material-ui/core/Button'));

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
        iconButton: {
            position: 'absolute',
            right: theme.spacing(5),
            top: theme.spacing(3),
        },
        successHelperText: {
            color: 'cyan',
            marginLeft: 0,
        },
    });
});

function Signup(_a) {
    var logo = _a.logo, onSubmit = _a.onSubmit, validateUsername = _a.validateUsername, loading = _a.loading, usernameErrorMessage = _a.usernameErrorMessage, goLogin = _a.goLogin, message = _a.message, extraFieldsInfo = _a.extraFieldsInfo, _b = _a.classes, classList = _b === void 0 ? {} : _b;
    var usePropStyles = React__default.useMemo(function () { return styles.makeStyles(classList); }, [
        classList,
    ]);
    var propStyles = usePropStyles();
    var classes = useStyles({ classes: propStyles });
    var _c = React__default.useState(false), open = _c[0], setOpen = _c[1];
    var _d = React.useState(), passwordErrorMessage = _d[0], setMessage = _d[1];
    var _e = reactHookForm.useForm({ mode: 'onChange' }), register = _e.register, formState = _e.formState, watch = _e.watch, handleSubmit = _e.handleSubmit, triggerValidation = _e.triggerValidation, clearError = _e.clearError, formErrors = _e.errors;
    var password = watch('password');
    var username = watch('username');
    React.useEffect(function () {
        if (message) {
            setOpen(true);
        }
    }, [message]);
    var checkPassword = function (value) {
        if (value) {
            var msg = index.default(value, username);
            triggerValidation('passwordConfirm').then();
            if (msg) {
                setMessage(msg);
                return false;
            }
            else {
                clearError('password');
                return true;
            }
        }
        return true;
    };
    React.useEffect(function () {
        triggerValidation('username').then();
    }, [usernameErrorMessage, triggerValidation]);
    return (React__default.createElement("div", { className: classes.background },
        React__default.createElement(Paper, { classes: { root: classes.paperRoot } },
            logo,
            React__default.createElement("form", { onSubmit: handleSubmit(onSubmit) },
                React__default.createElement(FormControl, { margin: "normal", variant: "outlined", error: !!usernameErrorMessage, fullWidth: true },
                    React__default.createElement(InputLabel, { htmlFor: "username" }, "\uC0AC\uC6A9\uC790 \uACC4\uC815"),
                    React__default.createElement(OutlinedInput, { autoFocus: true, id: "username", name: "username", inputRef: register({
                            required: true,
                            validate: { username: function () { return !usernameErrorMessage; } },
                        }), onChange: validateUsername, labelWidth: 80, autoComplete: "off" }),
                    usernameErrorMessage && (React__default.createElement(FormHelperText, null, usernameErrorMessage)),
                    username && !usernameErrorMessage && (React__default.createElement(FormHelperText, { className: classes.successHelperText }, "\uC0AC\uC6A9\uAC00\uB2A5\uD55C ID \uC785\uB2C8\uB2E4."))),
                React__default.createElement(TextField, { margin: "normal", variant: "outlined", inputRef: register({
                        required: true,
                        validate: function (value) {
                            return /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i.test(value);
                        },
                    }), label: "\uC774\uBA54\uC77C", name: "email", fullWidth: true }),
                React__default.createElement(index$4.default, { margin: "normal", variant: "outlined", name: "password", label: "\uBE44\uBC00\uBC88\uD638", autoComplete: "off", inputProps: { autoComplete: 'new-password' }, inputRef: register({
                        required: true,
                        validate: {
                            invalid: function (value) { return checkPassword(value); },
                        },
                    }), onChange: function () { return triggerValidation('password'); }, error: !!formErrors.password, helperText: formErrors.password && passwordErrorMessage, fullWidth: true }),
                React__default.createElement(index$4.default, { margin: "normal", variant: "outlined", name: "passwordConfirm", label: "\uBE44\uBC00\uBC88\uD638 \uD655\uC778", inputRef: register({
                        required: true,
                        validate: function (value) { return value === password; },
                    }), onChange: function () {
                        return triggerValidation('passwordConfirm');
                    }, error: !!formErrors.passwordConfirm, helperText: formErrors.passwordConfirm && '비밀번호가 일치 하지 않습니다.', fullWidth: true }),
                extraFieldsInfo &&
                    extraFieldsInfo.map(function (field, i) {
                        return (React__default.createElement(TextField, { key: i, margin: "normal", variant: "outlined", inputRef: register({
                                required: field.required,
                            }), label: field.label, name: field.name, fullWidth: true }));
                    }),
                React__default.createElement(Button, { type: "submit", fullWidth: true, variant: "contained", color: "primary", disabled: loading || !formState.isValid, className: classes.submit }, loading ? '등록중입니다...' : '등록'),
                React__default.createElement(Button, { onClick: goLogin, color: "secondary", variant: "contained", fullWidth: true }, "\uB85C\uADF8\uC778 \uD558\uAE30"))),
        React__default.createElement(core.Dialog, { open: open, onClose: function () { return setOpen(false); } },
            React__default.createElement(core.DialogTitle, null, "\uACC4\uC815 \uC0DD\uC131 \uC694\uCCAD"),
            React__default.createElement(core.DialogContent, null,
                React__default.createElement(core.DialogContentText, null, message)),
            React__default.createElement(core.DialogActions, null,
                React__default.createElement(Button, { color: "primary", variant: "contained", onClick: goLogin }, "\uD655\uC778")))));
}

exports.default = Signup;
//# sourceMappingURL=index.js.map
