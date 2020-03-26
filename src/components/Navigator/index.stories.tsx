import React, { ReactNode } from 'react';
import Navigator from './index';
import StoryRouter from 'storybook-react-router';
import { muiTheme } from 'storybook-addon-material-ui';
import defaultTheme from 'theme/default';
import { categories } from 'sample_data/categories';

export default {
  title: 'components|Navigator',
  component: Navigator,
  decorators: [StoryRouter(), muiTheme([defaultTheme])],
};

export const Left = (): ReactNode => {
  return (
    <Navigator
      position="left"
      classes={{
        drawerPaper: {
          backgroundColor: '#18202c',
        },
        listItemRoot: {
          color: '#eee',
        },
      }}
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
  return (
    <Navigator
      position="top"
      classes={{}}
      categories={categories}
      logo={
        <span>
          <span>KT</span> Project
        </span>
      }
    />
  );
};
