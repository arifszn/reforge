import { PageContainer, ProCard } from '@ant-design/pro-components';
import { Breadcrumb, Spin } from 'antd';
import type { NewBreadcrumbProps } from 'antd/lib/breadcrumb/Breadcrumb';
import Loader from '../loader';

export type BasePageContainerType = {
  title?: string;
  subTitle?: string;
  breadcrumb?:
    | Partial<NewBreadcrumbProps>
    | React.ReactElement<typeof Breadcrumb>;
  extra?: React.ReactNode;
  loading?: boolean;
  children: React.ReactNode;
};

const BasePageContainer = (props: BasePageContainerType) => {
  return (
    <PageContainer
      header={{
        title: props.title,
        breadcrumb: props.breadcrumb,
        extra: props.extra,
      }}
      subTitle={props.subTitle}
    >
      <ProCard
        className="shadow-md mb-10"
        style={{ minHeight: 500 }}
        loading={
          props.loading ? (
            <Loader text={''} spinner={<Spin size="large" />} />
          ) : (
            false
          )
        }
      >
        {props.children}
      </ProCard>
    </PageContainer>
  );
};

export default BasePageContainer;
