import React from 'react';
import Dashboard from '@material-ui/icons/Dashboard';
import DnsRoundedIcon from '@material-ui/icons/DnsRounded';
import Note from '@material-ui/icons/Note';
import { Equalizer } from '@material-ui/icons';

export const categories = [
  {
    id: 'root',
    path: '',
    children: [
      {
        id: '대시보드',
        icon: <Dashboard />,
        path: 'dashboard',
        level: 1,
        component: () => <div>대시보드</div>,
      },
      {
        id: '현황 관리',
        icon: <Equalizer />,
        path: 'ip-status',
        level: 1,
        component: () => <div>현황 관리</div>,
      },
      {
        id: 'IP 관리',
        icon: <DnsRoundedIcon />,
        path: 'ip-management',
        level: 2,
        component: () => <div>IP 관리</div>,
      },
      {
        id: '이력 관리',
        icon: <Note />,
        path: 'work-management',
        level: 1,
        component: () => <div>이력 관리</div>,
      },
    ],
  },
];
