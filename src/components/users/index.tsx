import { ProTable, ProColumns } from '@ant-design/pro-components';
import { useRef } from 'react';
import { apiRoutes } from '../../routes/api';
import { handleErrorResponse } from '../../utils';
import http from '../../utils/http';
import BasePageContainer from '../layout/PageContainer';

const columns: ProColumns[] = [
  {
    title: 'Email',
    dataIndex: 'email',
    sorter: true,
    width: 170,
    ellipsis: true,
  },
];

const Users = () => {
  const actionRef = useRef();

  const getUsers = async () => {
    try {
      const result = await http.get(apiRoutes.users, {
        params: {},
      });

      return {
        data: result.data.data,
        success: true,
        total: result.data.meta.total,
      };
    } catch (error) {
      handleErrorResponse(error);
    }
  };

  return (
    <BasePageContainer title="Users" subTitle="All Users">
      <ProTable
        columns={columns}
        cardBordered={true}
        showSorterTooltip={false}
        scroll={{ x: true }}
        tableLayout={'fixed'}
        rowSelection={false}
        pagination={{
          showQuickJumper: true,
          pageSize: 10,
        }}
        actionRef={actionRef}
        request={getUsers}
        dateFormatter="string"
        search={true}
        rowKey="id"
        options={{
          search: true,
        }}
      />
    </BasePageContainer>
  );
};

export default Users;
