import React, { ReactNode } from 'react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { boolean, text } from '@storybook/addon-knobs';
import { muiTheme } from 'storybook-addon-material-ui';
import darkTheme from 'theme/dark';
import Login from './index';
import * as Captcha from './images/captcha.png';
import * as Logo from './images/logo.png';

export default {
  title: 'views/Login',
  component: Login,
  decorators: [muiTheme([darkTheme])],
};

export const withCaptcha = (): ReactNode => {
  const loading = boolean('loading..', false);
  const message = text('결과 메세지', '');
  return (
    <Login
      logo={
        <img src={Logo} alt="login" style={{ width: 300, marginRight: -20 }} />
      }
      onSubmit={action('onSubmit')}
      loading={loading}
      goSignUp={linkTo('views/Signup')}
      refreshCaptcha={action('refreshCaptcha')}
      captchaImage={Captcha}
      message={message}
    />
  );
};
