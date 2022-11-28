import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAdmin from '../../Utilities/Hooks/useAdmin';
import { AuthContext } from '../Contexts/AuthProvider/AuthProvider';

const AdminRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isAdmin, isAdminLoading] = useAdmin(user?.email);
  const location = useLocation();

  if (loading || isAdminLoading) {
    return <div className="flex items-center justify-center space-x-2">
      <div className="w-4 h-4 rounded-full animate-pulse dark:bg-cyan-400"></div>
      <div className="w-4 h-4 rounded-full animate-pulse dark:bg-cyan-400"></div>
      <div className="w-4 h-4 rounded-full animate-pulse dark:bg-cyan-400"></div>
    </div>
  }

  if (user && isAdmin) {
    return children
  }

  return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default AdminRoute;