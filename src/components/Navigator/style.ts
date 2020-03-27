import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

export const drawerWidth = 256;

export const useLeftStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawerPaper: {
      backgroundColor: theme.palette.background.default,
      '& .MuiDrawer-paperAnchorDockedLeft': {
        backgroundColor: theme.palette.secondary.main,
        boxShadow:
          '0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12)',
      },
    },
    listRoot: {
      width: 256,
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
      fontWeight: 700,
      color: theme.palette.common.white,
      backgroundColor: theme.palette.secondary.light,
      borderLeft: `4px solid ${theme.palette.primary.main}`,
    },

    logoContainer: {
      fontSize: 24,
      display: 'flex',
      cursor: 'pointer',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'DroidSans',
      color: theme.palette.primary.main,
      textDecoration: 'none',
      height: 150,
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

export const useTopStyles = makeStyles((theme: Theme) =>
  createStyles({
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
    logoContainer: {
      fontSize: 24,
      display: 'flex',
      cursor: 'pointer',
      alignItems: 'baseline',
      fontFamily: 'DroidSans',
      fontWeight: 'bold',
      padding: theme.spacing(3, 5, 0.5, 7),
      color: theme.palette.primary.main,
    },
    itemIcon: {
      minWidth: 'auto',
      marginRight: theme.spacing(3),
      marginTop: theme.spacing(-1),
    },
    iconButtonAvatar: {
      color: theme.palette.common.white,
    },
    userInfo: {
      [theme.breakpoints.down('lg')]: {
        display: 'none',
      },
      display: 'flex',
      position: 'absolute',
      right: 40,
      '& > .username': {
        marginLeft: 5,
        lineHeight: '23px',
        // color: theme.palette.primary.light,
        fontWeight: 'bold',
      },
    },
  }),
);
