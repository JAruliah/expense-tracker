import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, logged, ...rest }) => {
  return (
    <Route {...rest} render={
      props => {
        if (logged) {
          return <Component {...rest} {...props} />
        } else {
          return <Redirect to={
            {
              pathname: '/unauthorized',
              state: {
                from: props.location
              }
            }
          } />
        }
      }
    } />
  )
}

export default ProtectedRoute;