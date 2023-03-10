import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { RootState } from '../store';
import { webRoutes } from './web';

export type RequireAuthProps = {
  children: JSX.Element;
};

const RequireAuth = ({ children }: RequireAuthProps) => {
  const admin = useSelector((state: RootState) => state.admin);
  const location = useLocation();

  if (!admin) {
    return <Navigate to={webRoutes.login} state={{ from: location }} replace />;
  }

  return children;
};

export default RequireAuth;
