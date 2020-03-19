import React, { ReactNode } from 'react';
import Navigator from './index';
import StoryRouter from 'storybook-react-router';
import { muiTheme } from 'storybook-addon-material-ui';
import darkTheme from 'theme/dark';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { categories } from 'sample_data/categories';

export default {
  title: 'navigation/Navigator',
  component: Navigator,
  decorators: [StoryRouter(), muiTheme([darkTheme])],
};

const useStyles = makeStyles(() =>
  createStyles({
    drawerPaper: {
      backgroundColor: '#18202c',
    },
    listRoot: {
      width: 500,
    },
    listItemIconRoot: {
      marginRight: 12,
    },
    leftNavigatorLogo: {
      height: 200,
    },
    testClass: {},
  }),
);

export const Left = (): ReactNode => {
  const classes = useStyles();
  return (
    <Navigator
      position="left"
      classes={classes}
      categories={categories}
      logo={
        <span>
          <span>KT</span> Project
        </span>
      }
    />
  );
};

export const Top = (): ReactNode => {
  const classes = useStyles();
  return (
    <Navigator
      position="top"
      classes={classes}
      categories={categories}
      logo={
        <span>
          <span>KT</span> Project
        </span>
      }
    />
  );
};
