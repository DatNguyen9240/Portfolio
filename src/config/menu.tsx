import { lazy } from 'react';

const Home = lazy(() => import('@/pages/Home'));

export const routeMenuConfig = [
  {
    path: '/',
    label: 'Home',
    icon: null,
    element: <Home />,
    showInMenu: false,
    badge: null,
  },
];
