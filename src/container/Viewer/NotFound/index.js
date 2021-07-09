import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../../component/Viewer/Layout';
function NotFound(props) {
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <Layout breadcrumb title="404 Not Found">
      <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-12">
          <h3> Sorry, Page not found</h3>
          <li className="list-group">
            <Link to="/">Back to Homepage</Link>
          </li>
        </div>
      </div>
    </Layout>
  );
}

export default NotFound;
