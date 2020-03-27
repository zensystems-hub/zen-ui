import React, { ReactNode } from 'react';
import { boolean, optionsKnob, number } from '@storybook/addon-knobs';
import { pieChartDataset } from 'sample_data/chart_data/traffic';
import Chart from './index';

export default {
  title: 'Echarts|PieChart',
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
      dataset={pieChartDataset}
    />
  );
};
