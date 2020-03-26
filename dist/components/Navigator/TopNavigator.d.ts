import React from 'react';
import { ContainerProps } from '@material-ui/core';
import { CategoriesType } from 'components/Navigator/index';
import { useTopStyles } from 'components/Navigator/styles';
import { BaseCSSProperties } from '@material-ui/styles';
declare type TopNavigatorStyleProps = {
    [Name in keyof ReturnType<typeof useTopStyles>]+?: BaseCSSProperties;
};
declare type NavigatorProps = {
    categories: CategoriesType[];
    logo: React.ReactNode;
    classes?: TopNavigatorStyleProps;
    homePath: string;
} & Omit<ContainerProps, 'classes'>;
declare function TopNavigator({ logo, categories, homePath, classes: classList, ...other }: NavigatorProps): React.ReactElement;
declare namespace TopNavigator {
    var defaultProps: {
        homePath: string;
    };
}
export default TopNavigator;
