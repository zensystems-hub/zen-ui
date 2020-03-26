/// <reference types="react" />
export declare const categories: ({
    id: string;
    text: string;
    icon: JSX.Element;
    path: string;
    component: () => JSX.Element;
    children: {
        id: string;
        text: string;
        icon: JSX.Element;
        path: string;
        component: () => JSX.Element;
    }[];
} | {
    id: string;
    text: string;
    icon: JSX.Element;
    path: string;
    component: () => JSX.Element;
    children?: undefined;
})[];
