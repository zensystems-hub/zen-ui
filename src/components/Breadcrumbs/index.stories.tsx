import React, { ReactNode } from 'react';
import Breadcrumbs from './index';
import StoryRouter from 'storybook-react-router';
import { muiTheme } from 'storybook-addon-material-ui';
import defaultTheme from 'theme/default';
import { categories } from 'sample_data/categories';
import { convertCategoriesMap } from 'utils/dataStructure';
import { Link } from 'react-router-dom';

export default {
  title: 'components|Breadcrumbs',
  component: Navigator,
  decorators: [StoryRouter(), muiTheme([defaultTheme])],
};

export const RouterBreadcrumbs = (): ReactNode => {
  const pathMap = convertCategoriesMap([...categories], 'path', 'text');
  console.log(pathMap);
  return (
    <>
      <ul>
        <li>
          <Link to="/dashboard">대시보드</Link>
          <ul>
            <li>
              <Link to="/dashboard/1">대시보드-1</Link>
            </li>
            <li>
              <Link to="/dashboard/2">대시보드-2</Link>
            </li>
            <li>
              <Link to="/dashboard/3">대시보드-3</Link>
            </li>
            <li>
              <Link to="/dashboard/4">없는 링크</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/xxx">없는 링크</Link>
        </li>
        <li>
          <Link to="/ip-status">현황관리</Link>
        </li>
        <li>
          <Link to="/ip-management">IP 관리</Link>
        </li>
        <li>
          <Link to="/work-management">이력 관리</Link>
        </li>
      </ul>
      <Breadcrumbs pathMap={pathMap} />
    </>
  );
};

RouterBreadcrumbs.story = {
  name: 'Default',
};
