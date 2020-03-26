export declare const fromTreeToFlat: <T>(tree: T[]) => T[];
interface ItreeNodeInterface<T> {
    id: string;
    children?: T[];
}
declare type keyValueMap = {
    [key: string]: string;
};
export declare const convertCategoriesMap: <T extends ItreeNodeInterface<T>>(categories: T[], pathField?: keyof T, textField?: keyof T) => keyValueMap;
export {};
