import { webRoutes } from '../../routes/web';
import { BiHomeAlt2 } from 'react-icons/bi';
import { TbUsers } from 'react-icons/tb';

export const sidebar = [
  {
    path: webRoutes.dashboard,
    key: webRoutes.dashboard,
    name: 'Dashboard',
    icon: <BiHomeAlt2 />,
  },
  {
    path: webRoutes.users,
    key: webRoutes.users,
    name: 'Users',
    icon: <TbUsers />,
  },
];
