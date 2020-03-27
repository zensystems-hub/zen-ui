import React from 'react';
import {
  Drawer,
  DrawerProps,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import { Link, useLocation } from 'react-router-dom';
import { CategoriesType } from 'components/Navigator/index';
import { BaseCSSProperties, makeStyles } from '@material-ui/styles';
import { useLeftStyles } from 'components/Navigator/style';

type LeftNavigatorStyleProps = {
  [Name in keyof ReturnType<typeof useLeftStyles>]+?: BaseCSSProperties;
};

type NavigatorProps = {
  categories: CategoriesType[];
  logo: React.ReactNode;
  classes?: LeftNavigatorStyleProps;
  homePath: string;
} & Omit<DrawerProps, 'classes'>;

function LeftNavigator({
  logo,
  categories = [],
  homePath,
  classes: classList = {},
  children,
  ...other
}: NavigatorProps): React.ReactElement {
  const usePropStyles = React.useMemo(() => makeStyles(classList as any), [
    classList,
  ]);
  const propStyles = usePropStyles();
  const classes = useLeftStyles({ classes: propStyles });
  const { pathname } = useLocation();
  return (
    <Drawer classes={{ paper: classes.drawerPaper }} {...other}>
      <List classes={{ root: classes.listRoot }} disablePadding>
        <ListItem className={classes.logoContainer}>
          <Link to={homePath}>{logo}</Link>
        </ListItem>
        {categories.map(({ id, text, icon, path }) => (
          <ListItem
            button
            key={id}
            component={Link}
            to={path}
            selected={pathname === `/${path}`}
            classes={{
              root: classes.listItemRoot,
              selected: classes.listItemSelected,
            }}
          >
            {icon && (
              <ListItemIcon classes={{ root: classes.listItemIconRoot }}>
                {icon}
              </ListItemIcon>
            )}
            <ListItemText classes={{ primary: classes.listItemTextPrimary }}>
              {text}
            </ListItemText>
          </ListItem>
        ))}
      </List>
      {children}
    </Drawer>
  );
}

LeftNavigator.defaultProps = {
  homePath: '/',
};

export default LeftNavigator;
