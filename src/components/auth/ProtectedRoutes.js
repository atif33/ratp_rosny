import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import {useAuth0} from "@auth0/auth0-react";

const ProtectedRoute = ({component: Component, ...rest}) => {
    const {isAuthenticated} = useAuth0();
    return (
        <Route {...rest} render={
            props => {
                if (isAuthenticated) {
                    return <Component {...rest} {...props} />
                } else {
                    return <Redirect to="/" />
                }
            }
        }/>
    )
};

export default ProtectedRoute;
