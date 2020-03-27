import React from 'react';
import _ from 'lodash';
import ReactEcharts from 'echarts-for-react';
import { bpsSize } from 'utils/numberFormatter';
import { chartBaseProps } from 'charts';

const upDownAreaChartOptions = {
  animation: false,
  legend: { bottom: 5 },
  // color: ['#00B1AE', '#D8D8D8', '#3D4373', '#7D1EC0', '#1D2DC3', '#7D1EC0'],
  tooltip: {
    trigger: 'axis',
    formatter: (params: any) => {
      const content = [`${params[0].name}`];
      _.chain(params)
        .sortBy('seriesName')
        .each((item: any) => {
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
    position(pos: any, params: any, dom: any, rect: any, size: any) {
      const obj = { top: '30%', left: 0 };
      if (size.viewSize[0] > pos[0] + size.contentSize[0] + 80) {
        obj.left = pos[0] + 80;
      } else {
        obj.left = pos[0] - size.contentSize[0] - 80;
      }
      return obj;
    },
  },
  grid: [
    {
      right: 80,
      left: 70,
      top: 30,
      height: 100,
    },
    {
      right: 80,
      left: 70,
      top: 130,
      height: 100,
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
  // dataZoom: [
  // {type:'slider', xAxisIndex:[0,1], start:0, end:100, bottom:50},
  // {type:'inside', xAxisIndex:[0,1]}
  // ],
  series: [
    {
      type: 'line',
      showSymbol: false,
      areaStyle: { opacity: 0.7 },
      id: 'inTraffic',
      name: 'In 트래픽',
      markPoint: {
        data: [
          {
            type: 'max',
            name: '최대 In 트래픽',
            symbol: 'rect',
            symbolSize: [80, 20],
            symbolOffset: [0, -15],
            label: {
              formatter: ({ value }: { value: any }) => bpsSize(value),
            },
          },
        ],
      },
      markLine: {
        data: [
          {
            type: 'average',
            label: {
              formatter: ({ value }: { value: any }) => bpsSize(value),
            },
          },
        ],
      },
      encode: {
        x: 'date',
        y: 'inTraffic',
        tooltip: 'inTraffic',
      },
    },
    {
      type: 'line',
      xAxisIndex: 1,
      yAxisIndex: 1,
      encode: {
        x: 'date',
        y: 'outTraffic',
        tooltip: 'outTraffic',
      },
      id: 'outTraffic',
      name: 'Out 트래픽',
      showSymbol: false,
      areaStyle: { opacity: 0.7 },
      markPoint: {
        data: [
          {
            type: 'max',
            name: '최대 Out 트래픽',
            symbol: 'rect',
            symbolSize: [80, 20],
            symbolOffset: [0, 15],

            label: {
              formatter: ({ value }: { value: any }) => bpsSize(value),
            },
          },
        ],
      },
      markLine: {
        data: [
          {
            type: 'average',
            label: {
              formatter: ({ value }: { value: any }) => bpsSize(value),
            },
          },
        ],
      },
    },
  ],
};

function UpDownAreaChart({
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
        ...upDownAreaChartOptions,
        ...option,
      }}
      {...other}
    />
  );
}

UpDownAreaChart.defaultProps = {
  theme: 'white',
  height: 285,
};

export default UpDownAreaChart;
