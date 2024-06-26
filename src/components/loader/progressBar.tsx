import { Fragment, useEffect } from 'react';
import NProgress from 'nprogress';
import '@/components/loader/progressBar.css';

export interface ProgressBarProps {
  spinner?: boolean;
}

const ProgressBar = ({ spinner = false }: ProgressBarProps) => {
  NProgress.configure({ showSpinner: spinner });

  useEffect(() => {
    NProgress.start();

    return () => {
      NProgress.done();
    };
  });

  return <Fragment></Fragment>;
};

export default ProgressBar;
