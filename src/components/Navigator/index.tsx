import React from 'react';
import {
  Drawer,
  Container,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from '@material-ui/core';
import { Link, useLocation } from 'react-router-dom';
import { useStyles } from './styles';
import { BaseCSSProperties, makeStyles } from '@material-ui/styles';

type CategoriesType = {
  id: string;
  icon?: React.ReactElement;
  path: string;
  level?: number;
  component?: React.FC;
  children?: CategoriesType[];
};

export type NavigatorStyleProps = {
  [Name in keyof ReturnType<typeof useStyles>]+?: BaseCSSProperties;
};

export type NavigatorProps = {
  position: 'left' | 'top';
  categories: CategoriesType[];
  logo: React.ReactNode;
  classes?: NavigatorStyleProps;
  homePath: string;
};

type NavigatorItemProps = {
  pathname: string;
  classes: Partial<ReturnType<typeof useStyles>>;
} & Omit<NavigatorProps, 'position' | 'classes'>;

const LeftNavigator = ({
  logo,
  pathname,
  categories = [],
  homePath,
  classes,
}: NavigatorItemProps): React.ReactElement => {
  return (
    <Drawer classes={{ paper: classes.drawerPaper }} variant="permanent">
      <Link className={classes.leftNavigatorLogo} to={homePath}>
        {logo}
      </Link>
      <List classes={{ root: classes.listRoot }} disablePadding>
        {categories.map(({ id, children, path: parentPath }) => (
          <React.Fragment key={id}>
            {children &&
              children.map(({ id: childId, icon, path }) => {
                const toPath = `${parentPath}/${path}`;
                return (
                  <ListItem
                    button
                    key={path}
                    component={Link}
                    to={toPath}
                    selected={pathname === toPath}
                    classes={{
                      root: classes.listItemRoot,
                      selected: classes.listItemSelected,
                    }}
                  >
                    {icon && (
                      <ListItemIcon
                        classes={{ root: classes.listItemIconRoot }}
                      >
                        {icon}
                      </ListItemIcon>
                    )}
                    <ListItemText
                      classes={{ primary: classes.listItemTextPrimary }}
                    >
                      {childId}
                    </ListItemText>
                  </ListItem>
                );
              })}
          </React.Fragment>
        ))}
      </List>
      <Divider />
    </Drawer>
  );
};

const TopNavigator = ({
  logo,
  pathname,
  categories = [],
  homePath,
  classes,
}: NavigatorItemProps): React.ReactElement => {
  return (
    <Container maxWidth="lg" className={classes.topListRoot}>
      <Link className={classes.topNavigatorLogo} to={homePath}>
        {logo}
      </Link>
      <List classes={{ root: classes.topListRoot }}>
        {categories.map(({ id, children, path: parentPath }) => (
          <React.Fragment key={id}>
            {children &&
              children.map(({ id: childId, icon, path }) => {
                const toPath = `${parentPath}/${path}`;
                return (
                  <ListItem
                    button
                    key={path}
                    component={Link}
                    to={toPath}
                    selected={pathname === toPath}
                    classes={{
                      root: classes.listItemRoot,
                      selected: classes.listItemSelected,
                    }}
                  >
                    {icon && <ListItemIcon>{icon}</ListItemIcon>}
                    <ListItemText>{childId}</ListItemText>
                  </ListItem>
                );
              })}
          </React.Fragment>
        ))}
      </List>
    </Container>
  );
};

const Navigator = ({
  position = 'left',
  logo,
  categories = [],
  homePath,
  classes: classList = {},
}: NavigatorProps): React.ReactElement => {
  const usePropStyles = React.useMemo(() => makeStyles(classList as any), [
    classList,
  ]);
  const propStyles = usePropStyles();
  const classes = useStyles({ classes: propStyles });
  const { pathname } = useLocation();
  return position === 'left' ? (
    <LeftNavigator
      pathname={pathname}
      categories={categories}
      logo={logo}
      homePath={homePath}
      classes={classes}
    />
  ) : (
    <TopNavigator
      pathname={pathname}
      categories={categories}
      logo={logo}
      homePath={homePath}
      classes={classes}
    />
  );
};

Navigator.defaultProps = {
  homePath: '/',
};

export default Navigator;