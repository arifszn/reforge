import React from 'react';
import { Result } from 'antd';

const NotFoundPage = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <Result
        status="404"
        subTitle="Sorry, the page you visited does not exist."
      />
      <h1 className="  text-red-600  text-6xl text-center">404</h1>
    </div>
  );
};

export default NotFoundPage;
