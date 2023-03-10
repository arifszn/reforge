import { Spin } from 'antd';
import { TbGridDots } from 'react-icons/tb';

const PageLoader = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <Spin size="large" indicator={<TbGridDots className="icon-spin" />} />
    </div>
  );
};

export default PageLoader;
