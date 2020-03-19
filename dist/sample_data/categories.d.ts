/// <reference types="react" />
export declare const categories: {
    id: string;
    path: string;
    children: {
        id: string;
        icon: JSX.Element;
        path: string;
        level: number;
        component: () => JSX.Element;
    }[];
}[];
