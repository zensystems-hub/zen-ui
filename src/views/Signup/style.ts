import { createStyles, makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
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

export default useStyles;
