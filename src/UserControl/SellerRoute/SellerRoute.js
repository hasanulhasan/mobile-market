import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useSeller from '../../Utilities/Hooks/useSeller';
import { AuthContext } from '../Contexts/AuthProvider/AuthProvider';

const SellerRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isSeller, isSellerLoading] = useSeller(user?.email)
  const location = useLocation();

  if (loading || isSellerLoading) {
    return <div className="flex items-center justify-center space-x-2">
      <div className="w-4 h-4 rounded-full animate-pulse dark:bg-cyan-400"></div>
      <div className="w-4 h-4 rounded-full animate-pulse dark:bg-cyan-400"></div>
      <div className="w-4 h-4 rounded-full animate-pulse dark:bg-cyan-400"></div>
    </div>
  }

  if (user && isSeller) {
    return children
  }

  return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default SellerRoute;