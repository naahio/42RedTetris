import { Outlet, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

interface ProtectedRouteProps {
  isAccessible?: boolean;
  redirectTo?: string;
}

const ProtectedRoute = ({ isAccessible = false, redirectTo = '/login' }: ProtectedRouteProps) => {
  return isAccessible ? <Outlet /> : <Navigate to={redirectTo} />;
};

export default ProtectedRoute;
