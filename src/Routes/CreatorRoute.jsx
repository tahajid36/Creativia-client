import React from 'react';
import useRole from '../Hooks/useRole';
import Loading from '../Components/Loading';
import { Navigate } from 'react-router';

const CreatorRoute = ({children}) => {
    const [role, isRoleLoading] = useRole()
    if(isRoleLoading) return <Loading></Loading>
    if(role === 'creator') return children
    return <Navigate to={'/'} replace='true'/>
   
};

export default CreatorRoute;