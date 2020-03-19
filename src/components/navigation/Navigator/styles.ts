import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
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
      color: 'rgba(255, 255, 255, 0.7)',
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
  }),
);
