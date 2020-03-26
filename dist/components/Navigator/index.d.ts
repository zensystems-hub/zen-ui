import React from 'react';
export { default as LeftNavigator } from './LeftNavigator';
export { default as TopNavigator } from './TopNavigator';
export declare type CategoriesType = {
    id: string;
    text: string;
    icon?: React.ReactElement;
    path: string;
    component?: React.FC;
    children?: CategoriesType[];
};
export default Navigator;
