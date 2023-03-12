import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { webRoutes } from '../../routes/web';
import { Dropdown } from 'antd';
import { ProLayout, ProLayoutProps } from '@ant-design/pro-components';
import {
  UserOutlined,
  LogoutOutlined,
  QuestionCircleFilled,
} from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { logout } from '../../store/slices/adminSlice';
import { memo, useEffect } from 'react';
import { sidebar } from './sidebar';
import { apiRoutes } from '../../routes/api';
import rewindr from '../../../rewindr.config';
import http from '../../utils/http';
import { handleErrorResponse } from '../../utils';

const Layout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const admin = useSelector((state: RootState) => state.admin);

  useEffect(() => {
    if (!admin) {
      navigate(webRoutes.login);
    }
  }, [admin]);

  const defaultProps: ProLayoutProps = {
    title: rewindr.appName,
    logo: '/logo.png',
    fixedHeader: true,
    fixSiderbar: true,
    layout: 'mix',
    route: {
      routes: sidebar,
    },
  };

  const logoutAdmin = () => {
    http
      .post(apiRoutes.logout)
      .then(() => {
        dispatch(logout());
      })
      .catch((error) => {
        handleErrorResponse(error);
      });
  };

  return (
    <div
      style={{
        height: '100vh',
      }}
    >
      <ProLayout
        {...defaultProps}
        location={location}
        onMenuHeaderClick={() => navigate(webRoutes.dashboard)}
        menuItemRender={(item, dom) => (
          <a
            onClick={(e) => {
              e.preventDefault();
              item.path && navigate(item.path);
            }}
            href={item.path}
          >
            {dom}
          </a>
        )}
        avatarProps={{
          icon: <UserOutlined />,
          size: 'small',
          title: 'Admin',
          render: (_, dom) => {
            return (
              <Dropdown
                menu={{
                  items: [
                    {
                      key: 'logout',
                      icon: <LogoutOutlined />,
                      label: 'Logout',
                      onClick: () => {
                        logoutAdmin();
                      },
                    },
                  ],
                }}
              >
                {dom}
              </Dropdown>
            );
          },
        }}
        actionsRender={() => {
          return [
            <QuestionCircleFilled
              key="QuestionCircleFilled"
              onClick={() => window.open(rewindr.helpLink, '_blank')}
            />,
          ];
        }}
      >
        <Outlet />
      </ProLayout>
    </div>
  );
};

export default memo(Layout);
