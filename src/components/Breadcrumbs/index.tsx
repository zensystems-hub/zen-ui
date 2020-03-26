import React from 'react';
import {
  makeStyles,
  Theme,
  createStyles,
  withStyles,
} from '@material-ui/core/styles';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import { Route } from 'react-router';
import { Link } from 'react-router-dom';
import { Chip } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';

const StyledBreadcrumb = withStyles((theme: Theme) => ({
  root: {
    height: theme.spacing(8),
    fontWeight: theme.typography.fontWeightRegular,
    cursor: 'pointer',
    '& .selected': {
      cursor: 'normal',
    },
  },
}))(Chip) as typeof Chip;

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      '& a': {
        textDecoration: 'none',
      },
    },
  }),
);

type props = {
  hasHome: boolean;
  pathMap: { [key: string]: string };
};

export default function RouterBreadcrumbs({
  hasHome = true,
  pathMap,
}: props): React.ReactElement {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Route>
        {({ location }) => {
          const pathnames = location.pathname.split('/').filter((x) => x);
          return (
            <Breadcrumbs aria-label="breadcrumb">
              {hasHome && (
                <Link color="inherit" to="/">
                  <StyledBreadcrumb label="Home" icon={<HomeIcon />} />
                </Link>
              )}
              {pathnames.map((value, index) => {
                const last = index === pathnames.length - 1;
                const to = `${pathnames.slice(0, index + 1).join('/')}`;
                const text = pathMap[to];
                if (text) {
                  return last ? (
                    <StyledBreadcrumb
                      key={to}
                      component="div"
                      color="primary"
                      className="selected"
                      label={text}
                    />
                  ) : (
                    <Link color="inherit" key={to} to={`/${to}`}>
                      <StyledBreadcrumb label={text} />
                    </Link>
                  );
                }
              })}
            </Breadcrumbs>
          );
        }}
      </Route>
    </div>
  );
}
