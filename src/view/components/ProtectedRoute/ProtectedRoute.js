import React from 'react'
import { useLocation, Navigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth'

export default function ProtectedRoute({children}) {
    const {user , loading} = useAuth();
    const location = useLocation();
    console.log('loading',loading);
    if (loading) {
        return <h1>Loading</h1>;
    }else if (user?.email) {
        return children;
    }else{
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

//     if (!auth?.email) {
//     // Redirect them to the /login page, but save the current location they were
//     // trying to go to when they were redirected. This allows us to send them
//     // along to that page after they login, which is a nicer user experience
//     // than dropping them off on the home page.
//     return <Navigate to="/login" state={{ from: location }} replace />;
//   }


//   return children;

}
