import _ from 'lodash';

export const fromTreeToFlat = <T>(tree: T[]): T[] => {
  const recurse = (nodes: T[]): T[] => {
    return _.map(nodes, (node) => {
      return [_.omit(node, 'children'), recurse(node.children)];
    });
  };
  return _.flattenDeep(recurse(tree));
};

interface ItreeNodeInterface<T> {
  id: string;
  children?: T[];
}

type keyValueMap = { [key: string]: string };
export const convertCategoriesMap = <T extends ItreeNodeInterface<T>>(
  categories: T[],
  pathField: keyof T = 'id',
  textField: keyof T = 'id',
): keyValueMap => {
  const result: keyValueMap = {};
  const resursive = (
    item: T,
    paths: string[] = [],
    map: keyValueMap,
  ): keyValueMap => {
    const clonePaths = [...paths];
    const currentPath = item[pathField];
    if (currentPath) {
      clonePaths.push(String(currentPath));
    }
    if (clonePaths.length > 0) {
      map[clonePaths.join('/')] = String(item[textField]);
    }
    if (item.children) {
      item.children.forEach((c) => resursive(c, clonePaths, map));
    }
    return map;
  };
  categories.forEach((c) => resursive(c, undefined, result));
  return result;
};
