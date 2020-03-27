import React from 'react';
import { chartBaseProps } from 'charts';
declare function UpDownAreaChart({ option, height, dataset, ...other }: chartBaseProps): React.ReactElement;
declare namespace UpDownAreaChart {
    var defaultProps: {
        theme: string;
        height: number;
    };
}
export default UpDownAreaChart;
