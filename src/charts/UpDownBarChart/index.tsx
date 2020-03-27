import React from 'react';
import _ from 'lodash';
import ReactEcharts from 'echarts-for-react';
import { bpsSize } from 'utils/numberFormatter';
import { chartBaseProps } from 'charts';

export const upDownBarChartOptions = {
  animation: false,
  legend: { bottom: 5 },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow',
    },
    formatter: (params: any) => {
      const content = [`${params[0].name}`];
      _.chain(params)
        .sortBy('seriesName')
        .each((item) => {
          const yIndex = item.encode.y[0];
          content.push(
            `${item.marker} <b>${item.seriesName}</b>: ${bpsSize(
              item.value[yIndex],
            )}`,
          );
        })
        .value();
      return content.join('<br/>');
    },
  },
  grid: [
    {
      right: 20,
      left: 70,
      top: 15,
      height: 125,
    },
    {
      right: 20,
      left: 70,
      top: 140,
      height: 125,
    },
  ],
  axisPointer: {
    link: { xAxisIndex: 'all' },
  },
  xAxis: [
    {
      type: 'category',
      show: false,
    },
    {
      type: 'category',
      gridIndex: 1,
      axisLine: {
        show: true,
      },
    },
  ],
  yAxis: [
    {
      type: 'value',
      splitNumber: 3,
      axisLabel: {
        formatter: (value: any) => bpsSize(value),
      },
      axisPointer: {
        label: {
          formatter: ({ value }: { value: any }) => bpsSize(value),
        },
      },
    },
    {
      type: 'value',
      gridIndex: 1,
      splitNumber: 3,
      inverse: true,
      axisLabel: {
        formatter: (value: any) => bpsSize(value),
      },
      axisPointer: {
        label: {
          formatter: ({ value }: { value: any }) => bpsSize(value),
        },
      },
    },
  ],
  series: [
    {
      type: 'bar',
      name: 'In 트래픽',
      itemStyle: {
        opacity: 0.8,
      },
      emphasis: {
        itemStyle: {
          opacity: 1,
        },
      },
      encode: {
        y: 'inTraffic',
        tooltip: ['inTraffic'],
      },
    },
    {
      xAxisIndex: 1,
      yAxisIndex: 1,
      type: 'bar',
      name: 'Out 트래픽',
      itemStyle: {
        opacity: 0.8,
      },

      emphasis: {
        itemStyle: {
          opacity: 1,
        },
      },
      encode: {
        y: 'outTraffic',
        tooltip: ['outTraffic'],
      },
    },
  ],
};

function UpDownBarChart({
  option = {},
  height,
  dataset,
  ...other
}: chartBaseProps): React.ReactElement {
  return (
    <ReactEcharts
      style={{ height }}
      option={{
        dataset,
        ...upDownBarChartOptions,
        ...option,
      }}
      {...other}
    />
  );
}

UpDownBarChart.defaultProps = {
  theme: 'white',
  height: 320,
};

export default UpDownBarChart;
