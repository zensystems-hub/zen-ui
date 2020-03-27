import React from 'react';
import { chartBaseProps } from 'charts/index';
declare function BarChart({ option, height, ...other }: chartBaseProps): React.ReactElement;
declare namespace BarChart {
    var defaultProps: {
        theme: string;
        height: number;
    };
}
export default BarChart;
