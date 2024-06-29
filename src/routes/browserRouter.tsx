import { createBrowserRouter } from 'react-router-dom';
import AuthLayout from '@/components/layout/authLayout';
import ErrorPage from '@/pages/errors/errorPage';
import Layout from '../components/layout';
import Redirect from '../components/layout/Redirect';
import NotFoundPage from '@/pages/errors/notfoundPage';
import { webRoutes } from './web';
import loadable from '@loadable/component';
import ProgressBar from '../components/loader/progressBar';
import RequireAuth from './requireAuth';
import LoginPage from '@/pages/auth/loginPage';
import About from '../components/demo-pages/about';

const errorElement = <ErrorPage />;
const fallbackElement = <ProgressBar />;

const Dashboard = loadable(() => import('@/components/dashboard'), {
  fallback: fallbackElement,
});
const Users = loadable(() => import('@/components/users'), {
  fallback: fallbackElement,
});

export const browserRouter = createBrowserRouter([
  {
    path: webRoutes.home,
    element: <Redirect />,
    errorElement: errorElement,
  },

  // auth routes
  {
    element: <AuthLayout />,
    errorElement: errorElement,
    children: [
      {
        path: webRoutes.login,
        element: <LoginPage />,
      },
    ],
  },

  // protected routes
  {
    element: (
      <RequireAuth>
        <Layout />
      </RequireAuth>
    ),
    errorElement: errorElement,
    children: [
      {
        path: webRoutes.dashboard,
        element: <Dashboard />,
      },
      {
        path: webRoutes.users,
        element: <Users />,
      },
      {
        path: webRoutes.about,
        element: <About />,
      },
    ],
  },

  // 404
  {
    path: '*',
    element: <NotFoundPage />,
    errorElement: errorElement,
  },
]);
