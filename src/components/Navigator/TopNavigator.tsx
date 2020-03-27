import React from 'react';
import {
  Container,
  ContainerProps,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import { Link, useLocation } from 'react-router-dom';
import { CategoriesType } from 'components/Navigator/index';
import { useTopStyles } from 'components/Navigator/style';
import { BaseCSSProperties, makeStyles } from '@material-ui/styles';

type TopNavigatorStyleProps = {
  [Name in keyof ReturnType<typeof useTopStyles>]+?: BaseCSSProperties;
};

type NavigatorProps = {
  categories: CategoriesType[];
  logo: React.ReactNode;
  classes?: TopNavigatorStyleProps;
  homePath: string;
} & Omit<ContainerProps, 'classes'>;

function TopNavigator({
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
  const classes = useTopStyles({ classes: propStyles });
  const { pathname } = useLocation();
  return (
    <>
      <Container maxWidth="lg" {...other}>
        <List style={{ display: 'flex' }}>
          <ListItem
            component={Link}
            to={homePath}
            className={classes.logoContainer}
          >
            {logo}
          </ListItem>
          {categories.map(({ id, icon, text, children, path }) => (
            <ListItem
              key={id}
              button
              component={Link}
              to={path}
              selected={pathname === `/${path}`}
              classes={{
                root: classes.listItemRoot,
                selected: classes.listItemSelected,
              }}
            >
              {icon && (
                <ListItemIcon className={classes.itemIcon}>{icon}</ListItemIcon>
              )}
              <ListItemText>{text}</ListItemText>
            </ListItem>
          ))}
        </List>
        {children}
      </Container>
    </>
  );
}

TopNavigator.defaultProps = {
  homePath: '/',
};

export default TopNavigator;
