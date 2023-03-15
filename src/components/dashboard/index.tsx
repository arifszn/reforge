import { ProCard, StatisticCard } from '@ant-design/pro-components';
import { useState } from 'react';
import RcResizeObserver from 'rc-resize-observer';

const { Statistic } = StatisticCard;

const Dashboard = () => {
  const [responsive, setResponsive] = useState(false);

  return (
    <RcResizeObserver
      key="resize-observer"
      onResize={(offset) => {
        setResponsive(offset.width < 596);
      }}
    >
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
    </RcResizeObserver>
  );
};

export default Dashboard;
