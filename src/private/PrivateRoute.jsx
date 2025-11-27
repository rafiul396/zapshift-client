import React from 'react';
import useAuth from '../hooks/useAuth';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({ children }) => {
    const { users, loader } = useAuth();
    const location = useLocation();

    if(loader){
        return
    }

     if(!users){
        return <Navigate state={location.state} to="/login"></Navigate>
     }

    return children
};

export default PrivateRoute;