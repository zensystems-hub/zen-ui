import React from 'react';
import ReactEcharts from 'echarts-for-react';
import { bpsSize } from 'utils/numberFormatter';
import { chartBaseProps } from 'charts/index';

const barChartOptions = {
  animation: false,
  grid: {
    right: 10,
    left: 70,
    top: 35,
  },
  legend: {
    bottom: 5,
  },
  tooltip: {
    trigger: 'item',
    formatter(param: any) {
      return `${param.marker} ${param.seriesName}: <b>${bpsSize(
        param.data,
      )}</b>`;
    },
  },
  xAxis: { type: 'category' },
  yAxis: {
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
};

function BarChart({
  option = {},
  height,
  ...other
}: chartBaseProps): React.ReactElement {
  return (
    <ReactEcharts
      style={{ height }}
      option={{
        ...barChartOptions,
        ...option,
      }}
      {...other}
    />
  );
}

BarChart.defaultProps = {
  theme: 'white',
  height: 250,
};

export default BarChart;
