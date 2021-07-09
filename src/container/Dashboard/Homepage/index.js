import React, { useState, useEffect } from 'react';
import AdminLayout from '../../../component/Dashboard/Layout';

function AdminHomePage(props) {
  const [state, setState] = useState('');

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <>
      <AdminLayout>Dashboard Home page</AdminLayout>
    </>
  );
}

export default AdminHomePage;
