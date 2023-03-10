import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { webRoutes } from '../../routes/web';
import { RootState } from '../../store';

const AdminRedirect = () => {
  const admin = useSelector((state: RootState) => state.admin);

  return (
    <Navigate to={admin ? webRoutes.dashboard : webRoutes.login} replace />
  );
};

export default AdminRedirect;
