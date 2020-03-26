import { convertCategoriesMap } from './index';

type CategoriesType = {
  id: string;
  uri: string;
  text: string;
  children?: CategoriesType[];
};

const categories: CategoriesType[] = [
  {
    id: '1',
    text: 'home',
    uri: '',
    children: [
      {
        id: '1_1',
        text: '최근 6시간 트래픽 추이',
        uri: 'dashboard',
      },
      {
        id: '1_2',
        text: '일간 트래픽 추이',
        uri: 'network',
      },
      {
        id: '1_3',
        text: '국가별 트래픽 추이',
        uri: 'country',
      },
      {
        id: '1_4',
        text: '포트별 트래픽 추이',
        uri: 'port',
      },
    ],
  },
];

const treeData = [
  { id: '0' },
  {
    id: '1',
    children: [
      {
        id: '1.1',
        children: [
          {
            id: '1.1.1',
            children: [
              {
                id: '1.1.1.1',
                children: [
                  { id: '1.1.1.1.1' },
                  { id: '1.1.1.1.2' },
                  { id: '1.1.1.1.3' },
                ],
              },
              { id: '1.1.1.2' },
              { id: '1.1.1.3' },
            ],
          },
          { id: '1.1.2' },
          { id: '1.1.3' },
        ],
      },
      { id: '1.2' },
      { id: '1.3' },
    ],
  },
  { id: '2' },
  { id: '3' },
];

describe('category 정보를 uri path map으로 구성할 수 있다.', () => {
  it('category path로 구성될 field를 지정할 수 있어야 한다.', () => {
    expect(
      convertCategoriesMap<CategoriesType>(categories, 'uri', 'text'),
    ).toStrictEqual({
      dashboard: '최근 6시간 트래픽 추이',
      network: '일간 트래픽 추이',
      country: '국가별 트래픽 추이',
      port: '포트별 트래픽 추이',
    });
  });

  it('여러 깊이를 가진 경우도 동작해야 한다.', () => {
    expect(convertCategoriesMap(treeData)).toStrictEqual({
      '0': '0',
      '1': '1',
      '2': '2',
      '3': '3',
      '1/1.1': '1.1',
      '1/1.1/1.1.1': '1.1.1',
      '1/1.1/1.1.1/1.1.1.1': '1.1.1.1',
      '1/1.1/1.1.1/1.1.1.1/1.1.1.1.1': '1.1.1.1.1',
      '1/1.1/1.1.1/1.1.1.1/1.1.1.1.2': '1.1.1.1.2',
      '1/1.1/1.1.1/1.1.1.1/1.1.1.1.3': '1.1.1.1.3',
      '1/1.1/1.1.1/1.1.1.2': '1.1.1.2',
      '1/1.1/1.1.1/1.1.1.3': '1.1.1.3',
      '1/1.1/1.1.2': '1.1.2',
      '1/1.1/1.1.3': '1.1.3',
      '1/1.2': '1.2',
      '1/1.3': '1.3',
    });
  });
});
