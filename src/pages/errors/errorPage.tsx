import React from 'react';
import { Result } from 'antd';

const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <Result
        status="500"
        title="500"
        subTitle="Sorry, something went wrong!"
      />
    </div>
  );
};

export default ErrorPage;
