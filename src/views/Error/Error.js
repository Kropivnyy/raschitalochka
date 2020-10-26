import React from 'react';
import routes from '../../routes';
const Error = () => {
  return (
    <>
      <h2>Page of error. Your page not found</h2>
      <a href={routes.loginView}>Login</a>
    </>
  );
};

export default Error;
