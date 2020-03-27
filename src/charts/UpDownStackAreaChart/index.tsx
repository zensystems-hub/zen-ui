import React from 'react';
import _ from 'lodash';
import ReactEcharts from 'echarts-for-react';
import { EChartOption } from 'echarts';
import { bpsSize } from 'utils/numberFormatter';
import { chartBaseProps } from 'charts';

const upDownStackAreaChartOptions = {
  animation: false,
  legend: { bottom: 5 },
  // color: ['#00B1AE', '#D8D8D8', '#3D4373', '#7D1EC0', '#1D2DC3', '#7D1EC0'],
  tooltip: {
    trigger: 'axis',
    position(pos: any, params: any, dom: any, rect: any, size: any) {
      const obj = { top: '10%', left: 0 };
      if (size.viewSize[0] > pos[0] + size.contentSize[0] + 80) {
        obj.left = pos[0] + 80;
      } else {
        obj.left = pos[0] - size.contentSize[0] - 80;
      }
      return obj;
    },
    formatter: (params: EChartOption.Tooltip.Format[]) => {
      const content = [`${params[0].name}`];
      _.chain(params)
        .sortBy('componentIndex')
        .each((item: any) => {
          const yIndex = item.encode.y[0];
          content.push(
            `${item.marker} <b>${item.seriesId}</b>: ${bpsSize(
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
      top: 30,
      height: 130,
    },
    {
      right: 20,
      left: 70,
      top: 160,
      height: 130,
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
        formatter: (value: any) => (value ? bpsSize(value) : '0'),
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
        formatter: (value: any) => (value ? bpsSize(value) : '0'),
      },
      axisPointer: {
        label: {
          formatter: ({ value }: { value: any }) => bpsSize(value),
        },
      },
    },
  ],
  series: [],
};

type upDownStackAreaChartOptionsType = {
  [Name in keyof typeof upDownStackAreaChartOptions]+?: any;
};

type Props = {
  options?: upDownStackAreaChartOptionsType;
} & chartBaseProps;

function UpDownTrafficChart({
  option = {},
  height,
  dataset,
  ...other
}: Props): React.ReactElement {
  return (
    <ReactEcharts
      style={{ height }}
      option={{
        dataset,
        ...upDownStackAreaChartOptions,
        ...option,
      }}
      {...other}
    />
  );
}

UpDownTrafficChart.defaultProps = {
  theme: 'white',
  height: 345,
};

export default UpDownTrafficChart;
