import React from 'react';
import ReactEcharts from 'echarts-for-react';
import { bpsSize } from 'utils/numberFormatter';
import { chartBaseProps } from 'charts/index';

const pieChartOptions = {
  animation: false,
  legend: {
    bottom: 5,
  },
  tooltip: {
    trigger: 'item',
    formatter(param: any) {
      const content = [`${param.marker} ${param.name}`];
      content.push(`<b>${bpsSize(param.data[1])} (${param.percent} %)</b>`);
      return content.join('<br/>');
    },
  },
  series: [
    {
      type: 'pie',
      center: ['50%', '48%'],
      radius: '45%',
      label: {
        normal: {
          formatter: (param: any) => `${param.name}\n(${param.percent} %)`,
        },
      },
      itemStyle: {
        emphasis: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)',
        },
      },
      encode: {
        itemName: 'name',
        value: 'value',
        tooltip: 'value',
      },
    },
  ],
};

function PieChart({
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
        ...pieChartOptions,
        ...option,
      }}
      {...other}
    />
  );
}

PieChart.defaultProps = {
  theme: 'white',
  height: 250,
};

export default PieChart;
