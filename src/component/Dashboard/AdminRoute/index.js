import React, { useState, useEffect } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import AdminLayout from './../Layout';
function AdminRoute(props) {
  const { component: YourComponent, ...remainsProps } = props;
  const authenticate = useSelector((state) => state.auth.authenticate);

  return (
    <Route
      {...remainsProps}
      render={(routeProps) => {
        const token = window.localStorage.getItem('token');
        if (token) {
          return (
            <AdminLayout>
              <YourComponent routeProps={routeProps} />
            </AdminLayout>
          );
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />
  );
}

export default AdminRoute;
