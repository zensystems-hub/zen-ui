import React, { ReactNode } from 'react';
import PasswordField from './index';
import { text, withKnobs } from '@storybook/addon-knobs';
import { muiTheme } from 'storybook-addon-material-ui';
import darkTheme from 'theme/dark';

export default {
  title: 'components|PasswordField',
  decorators: [withKnobs, muiTheme([darkTheme])],
  component: PasswordField,
};

export const Default = (): ReactNode => {
  const value = text('value', 'password');
  return <PasswordField value={value} />;
};

export const addInputProps = (): ReactNode => {
  const value = text('value', 'password');
  return <PasswordField value={value} InputProps={{ name: 'password' }} />;
};
