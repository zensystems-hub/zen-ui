import React, { ReactNode } from 'react';
import { boolean, optionsKnob, number } from '@storybook/addon-knobs';
import Chart from './index';

export default {
  title: 'Echarts|BarChart',
  component: Chart,
};

export const Default = (): ReactNode => {
  const loading = boolean('loading', false);
  const height = number('height', 280);
  const theme = optionsKnob(
    'theme',
    { white: 'white', dark: 'dark' },
    'white',
    {
      display: 'inline-radio',
    },
  );
  return (
    <Chart
      showLoading={loading}
      height={height}
      theme={theme}
      option={{
        series: [
          {
            type: 'bar',
            name: 'CHINATELECOM-CORE-WAN-CN2(4809)',
            data: [497135475],
          },
          { type: 'bar', name: 'CHINANET-BACKBONE(4134)', data: [495096997] },
          { type: 'bar', name: 'CHINANET-SH-AP(4812)', data: [127304913] },
          { type: 'bar', name: 'CHINA169-BACKBONE(4837)', data: [109618507] },
          { type: 'bar', name: '134238(134238)', data: [61013185] },
        ],
      }}
    />
  );
};
