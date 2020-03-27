import React from 'react';
import { chartBaseProps } from 'charts/index';
declare function PieChart({ option, height, dataset, ...other }: chartBaseProps): React.ReactElement;
declare namespace PieChart {
    var defaultProps: {
        theme: string;
        height: number;
    };
}
export default PieChart;
