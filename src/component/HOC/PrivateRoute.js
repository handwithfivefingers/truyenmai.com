import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';

function PrivateRoutes(props) {
    console.log(props);
  const { component: YourComponent, ...remainsProps } = props;
  console.log(remainsProps);
  return (
    <Route
      {...remainsProps}
      render={(routeProps) => {
        return <YourComponent routeProps={routeProps} />;
      }}
    />
  );
}

export default PrivateRoutes;
