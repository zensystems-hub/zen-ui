import React from 'react';
import { EChartOption } from 'echarts';
import { chartBaseProps } from 'charts';
declare const upDownStackAreaChartOptions: {
    animation: boolean;
    legend: {
        bottom: number;
    };
    tooltip: {
        trigger: string;
        position(pos: any, params: any, dom: any, rect: any, size: any): {
            top: string;
            left: number;
        };
        formatter: (params: EChartOption.Tooltip.Format[]) => string;
    };
    grid: {
        right: number;
        left: number;
        top: number;
        height: number;
    }[];
    axisPointer: {
        link: {
            xAxisIndex: string;
        };
    };
    xAxis: ({
        type: string;
        show: boolean;
        gridIndex?: undefined;
        axisLine?: undefined;
    } | {
        type: string;
        gridIndex: number;
        axisLine: {
            show: boolean;
        };
        show?: undefined;
    })[];
    yAxis: ({
        type: string;
        splitNumber: number;
        axisLabel: {
            formatter: (value: any) => string;
        };
        axisPointer: {
            label: {
                formatter: ({ value }: {
                    value: any;
                }) => string;
            };
        };
        gridIndex?: undefined;
        inverse?: undefined;
    } | {
        type: string;
        gridIndex: number;
        splitNumber: number;
        inverse: boolean;
        axisLabel: {
            formatter: (value: any) => string;
        };
        axisPointer: {
            label: {
                formatter: ({ value }: {
                    value: any;
                }) => string;
            };
        };
    })[];
    series: never[];
};
declare type upDownStackAreaChartOptionsType = {
    [Name in keyof typeof upDownStackAreaChartOptions]+?: any;
};
declare type Props = {
    options?: upDownStackAreaChartOptionsType;
} & chartBaseProps;
declare function UpDownTrafficChart({ option, height, dataset, ...other }: Props): React.ReactElement;
declare namespace UpDownTrafficChart {
    var defaultProps: {
        theme: string;
        height: number;
    };
}
export default UpDownTrafficChart;
