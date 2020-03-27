import React from 'react';
import { chartBaseProps } from 'charts';
export declare const upDownBarChartOptions: {
    animation: boolean;
    legend: {
        bottom: number;
    };
    tooltip: {
        trigger: string;
        axisPointer: {
            type: string;
        };
        formatter: (params: any) => string;
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
    series: ({
        type: string;
        name: string;
        itemStyle: {
            opacity: number;
        };
        emphasis: {
            itemStyle: {
                opacity: number;
            };
        };
        encode: {
            y: string;
            tooltip: string[];
        };
        xAxisIndex?: undefined;
        yAxisIndex?: undefined;
    } | {
        xAxisIndex: number;
        yAxisIndex: number;
        type: string;
        name: string;
        itemStyle: {
            opacity: number;
        };
        emphasis: {
            itemStyle: {
                opacity: number;
            };
        };
        encode: {
            y: string;
            tooltip: string[];
        };
    })[];
};
declare function UpDownBarChart({ option, height, dataset, ...other }: chartBaseProps): React.ReactElement;
declare namespace UpDownBarChart {
    var defaultProps: {
        theme: string;
        height: number;
    };
}
export default UpDownBarChart;
