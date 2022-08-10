import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation, Navigate } from 'react-router-dom';
import { getUserStatus } from '../features/user/userSlice';

function RequireAuth({children}) {
    const location = useLocation();
    const isLoggedIn = useSelector(getUserStatus);
  

  if(!isLoggedIn){
    return <Navigate to='/login' state={{from: location}} replace/>
  }

  return children;
}

export default RequireAuth;