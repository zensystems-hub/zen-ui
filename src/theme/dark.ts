import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
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

theme.overrides = {
  MuiInputBase: {
    root: {
      color: theme.palette.common.white,
      backgroundColor: '#464647',
      fontSize: '.9rem',
    },
  },
  MuiFormControl: {
    marginNormal: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(1),
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
      padding: theme.spacing(3.5, 5),
    },
    outlined: {
      padding: theme.spacing(3.5, 5),
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
      padding: theme.spacing(1),
      color: '#eee',
    },
  },
  MuiOutlinedInput: {
    input: {
      padding: theme.spacing(5.4, 4),
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
      color: theme.palette.text.primary,
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
        // backgroundColor: '#fff',
      },
    },
  },
};

export default theme;
