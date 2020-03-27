import React from 'react';
import { CardProps } from '@material-ui/core/Card';
declare type PanelProps = {
    title?: React.ReactNode;
    collapsible: boolean;
    refreshable: boolean;
    refreshTimeFormat: string;
} & Omit<CardProps, 'title'>;
declare function Panel({ title, collapsible, refreshable, refreshTimeFormat, children, ...rest }: PanelProps): React.ReactElement;
declare namespace Panel {
    var defaultProps: {
        collapsible: boolean;
        refreshable: boolean;
        refreshTimeFormat: string;
    };
}
export default Panel;
