import React, { useState, useEffect } from 'react';
import AdminHeader from '../Header';
import AdminSidebar from '../Sidebar';
import './style.scss';
function AdminLayout(props) {
  const [state, setState] = useState('');

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <>
      <AdminHeader />
      <div className="wrapper">
        <AdminSidebar />
        <div className="container">{props.children}</div>
      </div>
    </>
  );
}

export default AdminLayout;
