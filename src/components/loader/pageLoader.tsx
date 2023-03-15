import { Spin } from 'antd';
import { ImSpinner2 } from 'react-icons/im';

const PageLoader = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col opacity-50">
        <Spin size="large" indicator={<ImSpinner2 className="icon-spin" />} />
        <span className="mt-4 text-lg tracking-widest">LOADING</span>
      </div>
    </div>
  );
};

export default PageLoader;
