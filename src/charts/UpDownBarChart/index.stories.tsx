import React, { ReactNode } from 'react';
import { boolean, number } from '@storybook/addon-knobs';
import { upDownMaxTrafficDataset } from 'sample_data/chart_data/traffic';
import Chart from './index';

export default {
  title: 'Echarts|UpdownBarChart',
  component: Chart,
};

export const Default = (): ReactNode => {
  const loading = boolean('loading', false);
  const height = number('height', 320);
  return (
    <Chart
      showLoading={loading}
      height={height}
      dataset={upDownMaxTrafficDataset}
    />
  );
};

export const Dark = (): ReactNode => {
  const loading = boolean('loading', false);
  const height = number('height', 320);
  return (
    <Chart
      theme="dark"
      showLoading={loading}
      height={height}
      dataset={upDownMaxTrafficDataset}
    />
  );
};
