import React from 'react';
import { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import { UserContext } from '../../App';

function PrivetRoute({ children, ...rest }) {
  const [user] = useContext(UserContext);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.isLoggedIn ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/signin",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

export default PrivetRoute;
