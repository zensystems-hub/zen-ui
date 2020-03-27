import React, { ReactNode } from 'react';
import Title from './index';
import { text } from '@storybook/addon-knobs';
import { muiTheme } from 'storybook-addon-material-ui';
import defaultTheme from 'theme/default';

export default {
  title: 'components|Title',
  decorators: [muiTheme([defaultTheme])],
  component: Title,
};

export const Default = (): ReactNode => {
  const title = text('text', '전체 트래픽 모니터링');
  const tooltip = text('tooltip', '최근 6시간 트래픽 추이를 확인합니다');
  return <Title text={title} tooltip={tooltip} />;
};
