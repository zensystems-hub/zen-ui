import React from 'react';
import { useStyles } from './styles';
import { BaseCSSProperties } from '@material-ui/styles';
declare type CategoriesType = {
    id: string;
    icon?: React.ReactElement;
    path: string;
    level?: number;
    component?: React.FC;
    children?: CategoriesType[];
};
export declare type NavigatorStyleProps = {
    [Name in keyof ReturnType<typeof useStyles>]+?: BaseCSSProperties;
};
export declare type NavigatorProps = {
    position: 'left' | 'top';
    categories: CategoriesType[];
    logo: React.ReactNode;
    classes?: NavigatorStyleProps;
    homePath: string;
};
declare const Navigator: {
    ({ position, logo, categories, homePath, classes: classList, }: NavigatorProps): React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>;
    defaultProps: {
        homePath: string;
    };
};
export default Navigator;
