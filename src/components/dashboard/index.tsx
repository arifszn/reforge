import { ProCard, StatisticCard } from '@ant-design/pro-components';
import { useEffect, useState } from 'react';
import BasePageContainer from '../layout/PageContainer';
import useBreakpoint from '../hooks/breakpoint';
import { BreadcrumbProps } from 'antd';
import { webRoutes } from '../../routes/web';
import { Link } from 'react-router-dom';

const { Statistic } = StatisticCard;

const breadcrumb: BreadcrumbProps = {
  items: [
    {
      key: webRoutes.dashboard,
      title: <Link to={webRoutes.dashboard}>Dashboard</Link>,
    },
  ],
};

const Dashboard = () => {
  const isMobile = useBreakpoint(596);
  const [responsive, setResponsive] = useState<boolean>(false);

  useEffect(() => {
    setResponsive(isMobile);
  }, [isMobile]);

  return (
    <BasePageContainer breadcrumb={breadcrumb}>
      <ProCard
        title="Dashboard"
        extra={new Date().toDateString()}
        split={responsive ? 'horizontal' : 'vertical'}
        headerBordered
        bordered
      >
        <ProCard split="horizontal">
          <ProCard split="horizontal">
            <ProCard split="vertical">
              <StatisticCard
                statistic={{
                  title: 'ABC',
                  value: 234,
                  description: (
                    <Statistic title="XYZ" value="8.04%" trend="down" />
                  ),
                }}
              />
              <StatisticCard
                statistic={{
                  title: 'ABC',
                  value: 234,
                  description: (
                    <Statistic title="XYZ" value="8.04%" trend="up" />
                  ),
                }}
              />
            </ProCard>
            <ProCard split="vertical">
              <StatisticCard
                statistic={{
                  title: 'ABC',
                  value: '12/56',
                  suffix: '个',
                }}
              />
              <StatisticCard
                statistic={{
                  title: 'ABC',
                  value: '134',
                  suffix: '个',
                }}
              />
            </ProCard>
          </ProCard>
          <StatisticCard
            title="XYZ"
            chart={
              <img
                src="https://gw.alipayobjects.com/zos/alicdn/_dZIob2NB/zhuzhuangtu.svg"
                width="100%"
              />
            }
          />
        </ProCard>
        <StatisticCard
          title="ABC"
          chart={
            <img
              src="https://gw.alipayobjects.com/zos/alicdn/RLeBTRNWv/bianzu%25252043x.png"
              width="100%"
            />
          }
        />
      </ProCard>
    </BasePageContainer>
  );
};

export default Dashboard;
