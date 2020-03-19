'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var styles = require('@material-ui/core/styles');

var _a;
var theme = styles.createMuiTheme({
    spacing: 3,
    palette: {
        primary: {
            light: '#03B5B2',
            main: '#17a2b8',
            dark: '#006361',
        },
        secondary: {
            main: '#DF2428',
            light: '#ED1C24',
        },
        background: {
            default: '#f7f7f7',
        },
    },
    shape: {
        borderRadius: 8,
    },
    props: {
        MuiTab: {
            disableRipple: true,
        },
        MuiTextField: {
            variant: 'outlined',
        },
        MuiSelect: {
            MenuProps: {
                transformOrigin: {
                    vertical: 'top',
                    horizontal: 'left',
                },
                anchorOrigin: {
                    vertical: 'bottom',
                    horizontal: 'left',
                },
                getContentAnchorEl: null,
            },
        },
        MuiList: {
            disablePadding: true,
        },
        MuiPaper: {
            elevation: 0,
            square: true,
        },
        MuiTablePagination: {
            rowsPerPageOptions: [],
        },
    },
    mixins: {
        toolbar: {
            minHeight: 48,
        },
    },
});
theme.overrides = {
    MuiTypography: {
        h6: {
            color: '#05a4bc',
            fontFamily: '"맑은 고딕", "Malgun Gothic", dotum, 돋움, arial, hevetica',
            fontWeight: 700,
            fontSize: 16,
            letterSpacing: -0.65,
        },
    },
    MuiRadio: {
        root: {
            '& .MuiSvgIcon-root': {
                width: '0.8em',
                height: '0.8em',
            },
        },
    },
    MuiInputBase: {
        root: {
            fontSize: '0.8rem',
        },
    },
    MuiDrawer: {
        paper: {
        // backgroundColor: '#18202c',
        },
    },
    MuiButton: {
        root: {
            '& + .MuiButton-root': {
                marginLeft: theme.spacing(2),
            },
            borderRadius: '3px',
            padding: theme.spacing(1.5, 5),
        },
        outlined: {
            padding: theme.spacing(1.3, 5),
        },
        label: {
            textTransform: 'none',
        },
        contained: {
            boxShadow: 'none',
            '&:active': {
                boxShadow: 'none',
            },
        },
    },
    MuiTabs: {
        root: {
            marginLeft: theme.spacing(1),
        },
        indicator: {
            height: 3,
            borderTopLeftRadius: 3,
            borderTopRightRadius: 3,
            backgroundColor: theme.palette.common.white,
        },
    },
    MuiTab: {
        root: (_a = {
                textTransform: 'none',
                margin: '0 16px',
                minWidth: 0,
                padding: 0
            },
            _a[theme.breakpoints.up('md')] = {
                padding: 0,
                minWidth: 0,
            },
            _a),
    },
    MuiIconButton: {
        root: {
            padding: theme.spacing(1),
        },
    },
    MuiTooltip: {
        tooltip: {
            borderRadius: 4,
        },
    },
    MuiDivider: {
        root: {
            backgroundColor: '#404854',
        },
    },
    MuiAvatar: {
        root: {
            width: 32,
            height: 32,
        },
    },
    MuiDialog: {
        paper: { border: '1px solid #333' },
    },
    MuiDialogTitle: {
        root: {
            margin: '5px 20px',
            borderBottom: '3px solid #555',
            textAlign: 'center',
            '& .MuiTypography-root': {
                fontSize: '30px',
                lineHeight: '38px',
                fontWeight: 'bold',
            },
        },
    },
    MuiOutlinedInput: {
        root: {
            borderRadius: '2px',
        },
        input: {
            // width: '120px',
            padding: theme.spacing(3),
        },
        notchedOutline: {
            borderColor: '#ccc',
        },
    },
    MuiFormLabel: {
        root: {
            color: theme.palette.text.primary,
            fontSize: 11,
            fontWeight: 'bold',
        },
    },
    MuiInputLabel: {
        outlined: {
            transform: 'translate(14px, 11px) scale(1)',
            '&$shrink': {
                transform: 'translate(12px, -4px) scale(.9)',
                backgroundColor: '#fff',
            },
        },
    },
    MuiDialogActions: {
        root: {
            justifyContent: 'center',
            backgroundColor: '#f6f6f6',
        },
    },
    MuiTable: {
        root: {
            borderCollapse: 'separate',
        },
    },
    MuiTableCell: {
        head: {
            whiteSpace: 'nowrap',
            padding: theme.spacing(1),
            backgroundColor: theme.palette.background.default + " !important",
            borderBottom: '1px solid #ccc',
            borderLeft: "solid 1px " + theme.palette.grey['300'],
            fontSize: '0.75rem',
            '&:first-child': {
                borderLeft: 0,
            },
            textAlign: 'center',
            '&.MuiTableCell-alignLeft': {
                textAlign: 'center',
            },
            '&.MuiTableCell-alignRight': {
                textAlign: 'center',
            },
        },
        body: {
            whiteSpace: 'nowrap',
            padding: theme.spacing(1, 2),
            borderBottom: "solid 1px " + theme.palette.grey['300'],
            borderLeft: "solid 1px " + theme.palette.grey['300'],
            color: theme.palette.text.primary,
            fontSize: '0.8rem',
            '&:first-child': {
                borderLeft: 0,
            },
        },
        sizeSmall: {
            padding: theme.spacing(1, 2),
        },
    },
    MuiTableRow: {
        head: {
            '&:first-child th': {
                borderTop: '1px solid #666',
            },
        },
    },
    MuiTablePagination: {
        toolbar: {
            // height: 40,
            // minHeight: 40,
            // justifyContent: 'center',
            // alignItems: 'flex-end',
            borderTop: "solid 1px " + theme.palette.grey['300'],
        },
        spacer: {
            display: 'none',
        },
        select: {
            marginRight: theme.spacing(3),
        },
        caption: {
            marginRight: theme.spacing(3),
        },
    },
    MuiTableSortLabel: {
        root: {
            paddingLeft: 20,
            fontSize: '.7rem',
        },
        icon: {
            margin: 0,
        },
    },
    MuiTableFooter: {
        root: {
            '& .MuiTableCell-root': {
                borderBottom: 'none',
            },
        },
    },
    MuiMenu: {
        paper: { border: '1px solid #ccc' },
    },
    MuiMenuItem: {
        root: {
            borderBottom: '1px solid #ccc',
            fontSize: '0.75rem',
            '&$selected': {
                color: theme.palette.primary.light,
            },
        },
    },
    MuiListSubheader: {
        root: {
            borderBottom: '1px solid #ccc',
            fontSize: '0.75rem',
        },
    },
};

var theme$1 = styles.createMuiTheme({
    spacing: 3,
    palette: {
        primary: {
            light: '#1baec5',
            main: '#1BAEC5',
            dark: '#06A4BC',
        },
        secondary: {
            light: '#293846',
            main: '#2C3345',
        },
        background: {
            paper: '#fafafa',
            default: '#f7f7f7',
        },
        text: {
            primary: '#676a6c',
        },
        error: {
            main: '#ed5565',
            light: '#ed5565',
        },
        warning: {
            main: '#f8ac59',
            light: '#f8ac59',
        },
        info: {
            main: '#23c6c8',
            light: '#23c6c8',
        },
    },
    shape: {
        borderRadius: 8,
    },
    props: {
        MuiTab: {
            disableRipple: true,
        },
        MuiTextField: {
            variant: 'outlined',
        },
        MuiSelect: {
            MenuProps: {
                transformOrigin: {
                    vertical: 'top',
                    horizontal: 'left',
                },
                anchorOrigin: {
                    vertical: 'bottom',
                    horizontal: 'left',
                },
                getContentAnchorEl: null,
            },
        },
        MuiList: {
            disablePadding: true,
        },
        MuiPaper: {
            elevation: 0,
            square: true,
        },
        MuiCard: {
            variant: 'outlined',
        },
        MuiTablePagination: {
            rowsPerPageOptions: [],
        },
    },
    mixins: {
        toolbar: {
            minHeight: 48,
        },
    },
});
theme$1.overrides = {
    MuiInputBase: {
        root: {
            color: theme$1.palette.common.white,
            backgroundColor: '#464647',
            fontSize: '.9rem',
        },
    },
    MuiFormControl: {
        marginNormal: {
            marginTop: theme$1.spacing(2),
            marginBottom: theme$1.spacing(1),
        },
    },
    MuiFormHelperText: {
        root: {
            '&.Mui-error': {
                color: 'darkorange',
            },
        },
        contained: {
            marginLeft: 0,
        },
    },
    MuiButton: {
        root: {
            borderRadius: '3px',
            padding: theme$1.spacing(3.5, 5),
        },
        outlined: {
            padding: theme$1.spacing(3.5, 5),
        },
        label: {
            textTransform: 'none',
        },
        contained: {
            boxShadow: 'none',
            '&:active': {
                boxShadow: 'none',
            },
        },
    },
    MuiIconButton: {
        root: {
            padding: theme$1.spacing(1),
            color: '#eee',
        },
    },
    MuiOutlinedInput: {
        input: {
            padding: theme$1.spacing(5.4, 4),
        },
        root: {
            borderRadius: '2px',
        },
        notchedOutline: {
            borderColor: '#555',
        },
    },
    MuiFormLabel: {
        root: {
            color: theme$1.palette.text.primary,
            fontSize: 11,
            fontWeight: 'bold',
        },
    },
    MuiInputLabel: {
        outlined: {
            color: '#fafafa',
            fontSize: '.85rem',
            transform: 'translate(14px, 17px) scale(1)',
            '&$shrink': {
                transform: 'translate(12px, -4px) scale(.9)',
            },
        },
    },
};

exports.darkTheme = theme$1;
exports.theme = theme;
//# sourceMappingURL=index.js.map
