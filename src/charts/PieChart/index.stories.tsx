import React, { ReactNode } from 'react';
import { boolean, number } from '@storybook/addon-knobs';
import { pieChartDataset } from 'sample_data/chart_data/traffic';
import Chart from './index';

export default {
  title: 'Echarts|PieChart',
  component: Chart,
};

export const Default = (): ReactNode => {
  const loading = boolean('loading', false);
  const height = number('height', 280);
  return (
    <Chart showLoading={loading} height={height} dataset={pieChartDataset} />
  );
};

export const Dark = (): ReactNode => {
  const loading = boolean('loading', false);
  const height = number('height', 280);
  return (
    <Chart
      showLoading={loading}
      height={height}
      theme="dark"
      dataset={pieChartDataset}
    />
  );
};
