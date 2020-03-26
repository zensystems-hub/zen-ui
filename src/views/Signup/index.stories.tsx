import React, { ReactNode } from 'react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { boolean, text } from '@storybook/addon-knobs';
import { muiTheme } from 'storybook-addon-material-ui';
import darkTheme from 'theme/dark';
import Signup from './index';

export default {
  title: 'views|Signup',
  component: Signup,
  decorators: [muiTheme([darkTheme])],
};

export const Main = (): ReactNode => {
  const loading = boolean('loading..', false);
  const message = text('결과 메세지', '');
  const error = text('usernameErrorMessage', '');
  return (
    <Signup
      logo={
        <img
          src="/assets/images/logo.png"
          alt="logo"
          style={{ width: 300, marginRight: -20 }}
        />
      }
      onSubmit={action('onSubmit')}
      loading={loading}
      goLogin={linkTo('views|Login')}
      message={message}
      validateUsername={action('validateUsername')}
      usernameErrorMessage={error}
    />
  );
};

export const hasExtraField = (): ReactNode => {
  const loading = boolean('loading..', false);
  const message = text('결과 메세지', '');
  return (
    <Signup
      logo={
        <img
          src="/assets/images/logo.png"
          alt="logo"
          style={{ width: 300, marginRight: -20 }}
        />
      }
      onSubmit={action('onSubmit')}
      loading={loading}
      goLogin={linkTo('views|Login')}
      message={message}
      validateUsername={action('validateUsername')}
      extraFieldsInfo={[
        {
          name: 'customerName',
          label: '회사명',
          required: true,
        },
      ]}
    />
  );
};

Main.story = {
  name: 'Defult',
};
