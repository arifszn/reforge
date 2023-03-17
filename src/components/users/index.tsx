import { ProTable, ProColumns, RequestData } from '@ant-design/pro-components';
import { Avatar, BreadcrumbProps } from 'antd';
import Icon from '@ant-design/icons';
import { useRef } from 'react';
import { TbUsers } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import { User } from '../../interfaces/models/user';
import { apiRoutes } from '../../routes/api';
import { webRoutes } from '../../routes/web';
import { handleErrorResponse } from '../../utils';
import http from '../../utils/http';
import BasePageContainer from '../layout/PageContainer';

const breadcrumb: BreadcrumbProps = {
  items: [
    {
      key: webRoutes.dashboard,
      title: <Link to={webRoutes.dashboard}>Home</Link>,
    },
    {
      key: webRoutes.users,
      title: <Link to={webRoutes.users}>Users</Link>,
    },
  ],
};

const columns: ProColumns[] = [
  {
    title: 'Avatar',
    dataIndex: 'avatar',
    align: 'center',
    sorter: false,
    render: (_, row) =>
      row.avatar ? (
        <Avatar shape="circle" size="small" src={row.avatar} />
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
    render: (_, row) => `${row.first_name} ${row.last_name}`,
  },
  {
    title: 'Email',
    dataIndex: 'email',
    sorter: false,
    align: 'center',
    ellipsis: true,
  },
];

const Users = () => {
  const actionRef = useRef();

  return (
    <BasePageContainer breadcrumb={breadcrumb}>
      <ProTable
        columns={columns}
        cardBordered={false}
        cardProps={{
          subTitle: 'Users',
          title: <Icon className="opacity-60" component={TbUsers} />,
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
                fields: 'name',
              },
            })
            .then((response) => {
              return {
                data: response.data.data,
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
    </BasePageContainer>
  );
};

export default Users;
