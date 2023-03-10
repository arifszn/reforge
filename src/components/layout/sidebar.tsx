import { webRoutes } from '../../routes/web';
import { UserOutlined, HomeOutlined } from '@ant-design/icons';

export const sidebar = [
  {
    path: webRoutes.dashboard,
    key: webRoutes.dashboard,
    name: 'Dashboard',
    icon: <HomeOutlined />,
  },
  {
    path: webRoutes.users,
    key: webRoutes.users,
    name: 'Users',
    icon: <UserOutlined />,
  },
];
