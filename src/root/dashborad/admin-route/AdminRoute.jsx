import React from 'react';
import useAuth from '../../../hooks/useAuth';
import useRole from '../../../hooks/useRole';

const AdminRoute = ({ children }) => {
    const {users, loading} = useAuth();
    const {role, isLoading} = useRole();

    if(loading || isLoading) {
        return <h1>Loading...</h1>
    }

    // if(role === 'admin'){
    //     return <div><h2>This page is not for you!!!</h2></div>
    // }

    return children;
};

export default AdminRoute;