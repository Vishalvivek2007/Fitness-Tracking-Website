import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const AuthRoute = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  return user ? <Outlet /> : <Navigate to="/login" replace />;
};

export default AuthRoute;