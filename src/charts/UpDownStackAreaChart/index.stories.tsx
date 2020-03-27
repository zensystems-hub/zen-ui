import React, { ReactNode } from 'react';
import { boolean, optionsKnob, number } from '@storybook/addon-knobs';
import { upDownTrafficByCountryDataset } from 'sample_data/chart_data/traffic';
import Chart from './index';

export default {
  title: 'Echarts|UpdownStackAreaChart',
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
            type: 'line',
            name: 'CN (China)',
            id: 'CN_in',
            stack: 'in',
            itemStyle: { color: '#dd6b66' },
            connectNulls: true,
            areaStyle: { opacity: 0.7 },
            showSymbol: false,
            encode: { x: 'date', y: 'CN_in' },
          },
          {
            type: 'line',
            xAxisIndex: 1,
            yAxisIndex: 1,
            itemStyle: { color: '#dd6b66' },
            name: 'CN (China)',
            id: 'CN_out',
            stack: 'out',
            connectNulls: true,
            areaStyle: { opacity: 0.7 },
            showSymbol: false,
            encode: { x: 'date', y: 'CN_out' },
          },
          {
            type: 'line',
            name: 'TW (Taiwan)',
            id: 'TW_in',
            stack: 'in',
            itemStyle: { color: '#759aa0' },
            connectNulls: true,
            areaStyle: { opacity: 0.7 },
            showSymbol: false,
            encode: { x: 'date', y: 'TW_in' },
          },
          {
            type: 'line',
            xAxisIndex: 1,
            yAxisIndex: 1,
            itemStyle: { color: '#759aa0' },
            name: 'TW (Taiwan)',
            id: 'TW_out',
            stack: 'out',
            connectNulls: true,
            areaStyle: { opacity: 0.7 },
            showSymbol: false,
            encode: { x: 'date', y: 'TW_out' },
          },
          {
            type: 'line',
            name: 'HK (Hong Kong)',
            id: 'HK_in',
            stack: 'in',
            itemStyle: { color: '#e69d87' },
            connectNulls: true,
            areaStyle: { opacity: 0.7 },
            showSymbol: false,
            encode: { x: 'date', y: 'HK_in' },
          },
          {
            type: 'line',
            xAxisIndex: 1,
            yAxisIndex: 1,
            itemStyle: { color: '#e69d87' },
            name: 'HK (Hong Kong)',
            id: 'HK_out',
            stack: 'out',
            connectNulls: true,
            areaStyle: { opacity: 0.7 },
            showSymbol: false,
            encode: { x: 'date', y: 'HK_out' },
          },
          {
            type: 'line',
            name: 'JP (Japan)',
            id: 'JP_in',
            stack: 'in',
            itemStyle: { color: '#8dc1a9' },
            connectNulls: true,
            areaStyle: { opacity: 0.7 },
            showSymbol: false,
            encode: { x: 'date', y: 'JP_in' },
          },
          {
            type: 'line',
            xAxisIndex: 1,
            yAxisIndex: 1,
            itemStyle: { color: '#8dc1a9' },
            name: 'JP (Japan)',
            id: 'JP_out',
            stack: 'out',
            connectNulls: true,
            areaStyle: { opacity: 0.7 },
            showSymbol: false,
            encode: { x: 'date', y: 'JP_out' },
          },
        ],
      }}
      dataset={upDownTrafficByCountryDataset}
    />
  );
};
