import { Outlet, Navigate } from 'react-router-dom';
interface ProtectedRouteProps {
  isAccessible?: boolean;
  redirectTo?: string;
}

const ProtectedRoute = ({ isAccessible = false, redirectTo = '/login' }: ProtectedRouteProps) => {
  return isAccessible ? <Outlet /> : <Navigate to={redirectTo} />;
};

export default ProtectedRoute;
