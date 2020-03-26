import React, { ReactNode } from 'react';
import { LeftNavigator, TopNavigator } from './index';
import StoryRouter from 'storybook-react-router';
import { muiTheme } from 'storybook-addon-material-ui';
import defaultTheme from 'theme/default';
import { categories } from 'sample_data/categories';
import { AppBar, Toolbar, Container } from '@material-ui/core';
import { boolean, optionsKnob as options } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

export default {
  title: 'components|Navigator',
  component: Navigator,
  decorators: [StoryRouter(), muiTheme([defaultTheme])],
};

export const Left = (): ReactNode => {
  const open = boolean('isOpen', true);
  const valueObj = {
    'static(permanent)': 'permanent',
    'collapsible(persistent)': 'persistent',
    'Modal(temporary)': 'temporary',
  };
  type variantType = 'permanent' | 'persistent' | 'temporary' | undefined;
  const variant = options('variant', valueObj, 'permanent', {
    display: 'inline-radio',
  }) as variantType;
  return (
    <>
      <LeftNavigator
        open={open}
        onClose={action('onClose')}
        variant={variant}
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
          <img
            src="/assets/images/logo.png"
            alt="kt contents provider Monitoring Service"
            style={{ height: 55, marginTop: -10 }}
          />
        }
      />
      <Container maxWidth="lg">
        <div>Hello World!!</div>
      </Container>
    </>
  );
};

export const Top = (): ReactNode => {
  return (
    <AppBar color="secondary" position="sticky" elevation={0}>
      <Toolbar>
        <TopNavigator
          classes={{}}
          categories={categories}
          logo={
            <img
              src="/assets/images/logo.png"
              alt="kt contents provider Monitoring Service"
              style={{ height: 55, marginTop: -3 }}
            />
          }
        />
      </Toolbar>
    </AppBar>
  );
};
