import React, { ReactNode } from 'react';
import PasswordField from './index';
import { text, withKnobs } from '@storybook/addon-knobs';

export default {
  title: 'form/PasswordField',
  decorators: [withKnobs],
  component: PasswordField,
};

export const Default = (): ReactNode => {
  const value = text('value', 'password');
  return <PasswordField value={value} />;
};

// export const addInputProps = (): ReactNode => {
//   const value = text('value', 'password');
//   return <PasswordField value={value} InputProps={{ name: 'password' }} />;
// };
