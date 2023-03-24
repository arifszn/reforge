import { Spin } from 'antd';
import { ImSpinner2 } from 'react-icons/im';

const defaultSpinner = (
  <Spin size="large" indicator={<ImSpinner2 className="icon-spin" />} />
);

export interface LoaderProps {
  text?: string;
  spinner?: React.ReactNode;
}

const Loader = ({
  text = 'LOADING',
  spinner = defaultSpinner,
}: LoaderProps) => {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="flex flex-col opacity-50">
        {spinner}
        {text && <span className="mt-4 text-lg tracking-widest">{text}</span>}
      </div>
    </div>
  );
};

export default Loader;
