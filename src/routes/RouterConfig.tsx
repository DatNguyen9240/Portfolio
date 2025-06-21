import { createBrowserRouter } from 'react-router-dom';
import { lazy } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import AuthLayout from '@/components/layout/AuthLayout';
import Error from '@/pages/Error/Error';
import { routeMenuConfig } from '@/config/menu';

// Lazy load components - chỉ tải khi cần thiết
const Home = lazy(() => import('@/pages/Home'));
const Login = lazy(() => import('@/pages/Auth/Login'));
const Register = lazy(() => import('@/pages/Auth/Register'));
const Portfolio = lazy(() => import('@/pages/Portfolio'));

export const RouterConfig = () => {
  return createBrowserRouter([
    {
      path: '/',
      element: <MainLayout />,
      errorElement: <Error>Something went wrong</Error>,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: 'portfolio',
          element: <Portfolio />,
        },
        ...routeMenuConfig
          .filter((r) => r.path !== '/')
          .map((r) => ({ path: r.path.replace(/^\//, ''), element: r.element })),
      ],
    },
    {
      path: '/',
      element: <AuthLayout />,
      children: [
        {
          path: 'login',
          element: <Login />,
        },
        {
          path: 'register',
          element: <Register />,
        },
      ],
    },
  ]);
};
