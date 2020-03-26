import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

export const drawerWidth = 256;

export const useLeftStyles = makeStyles((theme: Theme) =>
  createStyles({
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
