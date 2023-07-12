import { BreadcrumbProps } from 'antd';
import BasePageContainer from '../layout/PageContainer';
import { webRoutes } from '../../routes/web';
import { Link } from 'react-router-dom';
const breadcrumb: BreadcrumbProps = {
  items: [
    {
      key: webRoutes.dashboard,
      title: <Link to={webRoutes.dashboard}>Dashboard</Link>,
    },
    {
      key: webRoutes.about,
      title: <Link to={webRoutes.manager}>Manager</Link>,
    },
  ],
};

const Manager = () => {
  return (
    <BasePageContainer breadcrumb={breadcrumb}>
      <div className="m-5">
        <article>
          <header className="mb-9 space-y-1">
            <p className="font-display text-sm font-medium font-sans text-primary">
              Manager
            </p>
            <p className=" text-2xl tracking-tight  font-sans font-display  text-slate-900">
              ผู้ดูแลระบบ
            </p>
          </header>
          <div>
            <p className="lead">
              An out-of-box UI solution for enterprise applications as a React
              boilerplate.{' '}
            </p>
          </div>
        </article>
      </div>
    </BasePageContainer>
  );
};

export default Manager;
