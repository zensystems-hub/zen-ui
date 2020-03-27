import React from 'react';
import { DrawerProps } from '@material-ui/core';
import { CategoriesType } from 'components/Navigator/index';
import { BaseCSSProperties } from '@material-ui/styles';
import { useLeftStyles } from 'components/Navigator/style';
declare type LeftNavigatorStyleProps = {
    [Name in keyof ReturnType<typeof useLeftStyles>]+?: BaseCSSProperties;
};
declare type NavigatorProps = {
    categories: CategoriesType[];
    logo: React.ReactNode;
    classes?: LeftNavigatorStyleProps;
    homePath: string;
} & Omit<DrawerProps, 'classes'>;
declare function LeftNavigator({ logo, categories, homePath, classes: classList, children, ...other }: NavigatorProps): React.ReactElement;
declare namespace LeftNavigator {
    var defaultProps: {
        homePath: string;
    };
}
export default LeftNavigator;
