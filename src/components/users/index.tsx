import {
  ActionType,
  ProTable,
  ProColumns,
  RequestData,
  TableDropdown,
  ProDescriptions,
} from '@ant-design/pro-components';
import { Avatar, BreadcrumbProps, Modal, Space } from 'antd';
import { useRef } from 'react';
import { FiUsers } from 'react-icons/fi';
import { CiCircleMore } from 'react-icons/ci';
import { Link } from 'react-router-dom';
import { User } from '../../interfaces/models/user';
import { apiRoutes } from '../../routes/api';
import { webRoutes } from '../../routes/web';
import {
  handleErrorResponse,
  NotificationType,
  showNotification,
} from '../../utils';
import http from '../../utils/http';
import BasePageContainer from '../layout/PageContainer';
import LazyImage from '../lazy-image';
import Icon, {
  ExclamationCircleOutlined,
  DeleteOutlined,
} from '@ant-design/icons';

enum ActionKey {
  DELETE = 'delete',
}

const breadcrumb: BreadcrumbProps = {
  items: [
    {
      key: webRoutes.dashboard,
      title: <Link to={webRoutes.dashboard}>Dashboard</Link>,
    },
    {
      key: webRoutes.users,
      title: <Link to={webRoutes.users}>Users</Link>,
    },
  ],
};

const Users = () => {
  const actionRef = useRef<ActionType>();
  const [modal, modalContextHolder] = Modal.useModal();

  const columns: ProColumns[] = [
    {
      title: 'Avatar',
      dataIndex: 'avatar',
      align: 'center',
      sorter: false,
      render: (_, row: User) =>
        row.avatar ? (
          <Avatar
            shape="circle"
            size="small"
            src={
              <LazyImage
                src={row.avatar}
                placeholder={<div className="bg-gray-100 h-full w-full" />}
              />
            }
          />
        ) : (
          <Avatar shape="circle" size="small">
            {row.first_name.charAt(0).toUpperCase()}
          </Avatar>
        ),
    },
    {
      title: 'Name',
      dataIndex: 'name',
      sorter: false,
      align: 'center',
      ellipsis: true,
      render: (_, row: User) => `${row.first_name} ${row.last_name}`,
    },
    {
      title: 'Email',
      dataIndex: 'email',
      sorter: false,
      align: 'center',
      ellipsis: true,
    },
    {
      title: 'Action',
      align: 'center',
      key: 'option',
      fixed: 'right',
      render: (_, row: User) => [
        <TableDropdown
          key="actionGroup"
          onSelect={(key) => handleActionOnSelect(key, row)}
          menus={[
            {
              key: ActionKey.DELETE,
              name: (
                <Space>
                  <DeleteOutlined />
                  Delete
                </Space>
              ),
            },
          ]}
        >
          <Icon component={CiCircleMore} className="text-primary text-xl" />
        </TableDropdown>,
      ],
    },
  ];

  const handleActionOnSelect = (key: string, user: User) => {
    if (key === ActionKey.DELETE) {
      showDeleteConfirmation(user);
    }
  };

  const showDeleteConfirmation = (user: User) => {
    modal.confirm({
      title: 'Are you sure to delete this user?',
      icon: <ExclamationCircleOutlined />,
      content: (
        <ProDescriptions column={1} title=" ">
          <ProDescriptions.Item valueType="avatar" label="Avatar">
            {user.avatar}
          </ProDescriptions.Item>
          <ProDescriptions.Item valueType="text" label="Name">
            {user.first_name} {user.last_name}
          </ProDescriptions.Item>
          <ProDescriptions.Item valueType="text" label="Email">
            {user.email}
          </ProDescriptions.Item>
        </ProDescriptions>
      ),
      okButtonProps: {
        className: 'bg-primary',
      },
      onOk: () => {
        return http
          .delete(`${apiRoutes.users}/${user.id}`)
          .then(() => {
            showNotification(
              'Success',
              NotificationType.SUCCESS,
              'User is deleted.'
            );

            actionRef.current?.reloadAndRest?.();
          })
          .catch((error) => {
            handleErrorResponse(error);
          });
      },
    });
  };

  return (
    <BasePageContainer breadcrumb={breadcrumb}>
      <ProTable
        columns={columns}
        cardBordered={false}
        cardProps={{
          subTitle: 'Users',
          tooltip: {
            className: 'opacity-60',
            title: 'Mocked data',
          },
          title: <FiUsers className="opacity-60" />,
        }}
        bordered={true}
        showSorterTooltip={false}
        scroll={{ x: true }}
        tableLayout={'fixed'}
        rowSelection={false}
        pagination={{
          showQuickJumper: true,
          pageSize: 10,
        }}
        actionRef={actionRef}
        request={(params) => {
          return http
            .get(apiRoutes.users, {
              params: {
                page: params.current,
                per_page: params.pageSize,
              },
            })
            .then((response) => {
              const users: [User] = response.data.data;

              return {
                data: users,
                success: true,
                total: response.data.total,
              } as RequestData<User>;
            })
            .catch((error) => {
              handleErrorResponse(error);

              return {
                data: [],
                success: false,
              } as RequestData<User>;
            });
        }}
        dateFormatter="string"
        search={false}
        rowKey="id"
        options={{
          search: false,
        }}
      />
      {modalContextHolder}
    </BasePageContainer>
  );
};

export default Users;
