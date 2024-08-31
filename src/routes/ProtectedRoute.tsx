import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { isAuthenticated } from '../utils';

interface ProtectedRouteProps {
  element: React.ReactElement;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element }) => {
  const location = useLocation();

  if (isAuthenticated()) {
    return element;
  } else {
     return <Navigate to="/auth" state={{ from: location }} replace />;
  }
};

export default ProtectedRoute;
