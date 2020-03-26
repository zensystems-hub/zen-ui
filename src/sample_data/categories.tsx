import React from 'react';
import Dashboard from '@material-ui/icons/Dashboard';
import DnsRoundedIcon from '@material-ui/icons/DnsRounded';
import Note from '@material-ui/icons/Note';
import { Equalizer } from '@material-ui/icons';

export const categories = [
  {
    id: 'root-1',
    text: '대시보드',
    icon: <Dashboard />,
    path: 'dashboard',
    component: () => <div>대시보드</div>,
    children: [
      {
        id: 'root-1-1',
        text: '대시보드-1',
        icon: <Dashboard />,
        path: '1',
        component: () => <div>대시보드-1</div>,
      },
      {
        id: 'root-1-2',
        text: '대시보드-2',
        icon: <Dashboard />,
        path: '2',
        component: () => <div>대시보드-2</div>,
      },
      {
        id: 'root-1-3',
        text: '대시보드-3',
        icon: <Dashboard />,
        path: '3',
        component: () => <div>대시보드-3</div>,
      },
    ],
  },
  {
    id: 'root-2',
    text: '현황 관리',
    icon: <Equalizer />,
    path: 'ip-status',
    component: () => <div>현황 관리</div>,
  },
  {
    id: 'root-3',
    text: 'IP 관리',
    icon: <DnsRoundedIcon />,
    path: 'ip-management',
    component: () => <div>IP 관리</div>,
  },
  {
    id: 'root-4',
    text: '이력 관리',
    icon: <Note />,
    path: 'work-management',
    component: () => <div>이력 관리</div>,
  },
];
