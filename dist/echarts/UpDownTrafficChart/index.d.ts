import React from 'react';
import { EChartOption } from 'echarts';
declare const upDownTrafficChartOptions: {
    animation: boolean;
    legend: {
        bottom: number;
    };
    tooltip: {
        trigger: string;
        formatter: (params: any) => string;
        position(pos: any, params: any, dom: any, rect: any, size: any): {
            top: string;
            left: number;
        };
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
        showSymbol: boolean;
        areaStyle: {
            opacity: number;
        };
        id: string;
        name: string;
        markPoint: {
            data: {
                type: string;
                name: string;
                symbol: string;
                symbolSize: number[];
                symbolOffset: number[];
                label: {
                    formatter: ({ value }: {
                        value: any;
                    }) => string;
                };
            }[];
        };
        markLine: {
            data: {
                type: string;
                label: {
                    formatter: ({ value }: {
                        value: any;
                    }) => string;
                };
            }[];
        };
        encode: {
            x: string;
            y: string;
            tooltip: string;
        };
        xAxisIndex?: undefined;
        yAxisIndex?: undefined;
    } | {
        type: string;
        xAxisIndex: number;
        yAxisIndex: number;
        encode: {
            x: string;
            y: string;
            tooltip: string;
        };
        id: string;
        name: string;
        showSymbol: boolean;
        areaStyle: {
            opacity: number;
        };
        markPoint: {
            data: {
                type: string;
                name: string;
                symbol: string;
                symbolSize: number[];
                symbolOffset: number[];
                label: {
                    formatter: ({ value }: {
                        value: any;
                    }) => string;
                };
            }[];
        };
        markLine: {
            data: {
                type: string;
                label: {
                    formatter: ({ value }: {
                        value: any;
                    }) => string;
                };
            }[];
        };
    })[];
};
declare type upDownTrafficChartOptionsType = {
    [Name in keyof typeof upDownTrafficChartOptions]+?: any;
};
declare type Props = {
    loading: boolean;
    height: number;
    theme: string;
    options?: upDownTrafficChartOptionsType;
    dataset?: EChartOption.Dataset;
};
declare function UpDownTrafficChart({ loading, options, height, theme, dataset, }: Props): React.ReactElement;
declare namespace UpDownTrafficChart {
    var defaultProps: {
        theme: string;
        height: number;
        loading: boolean;
    };
}
export default UpDownTrafficChart;
