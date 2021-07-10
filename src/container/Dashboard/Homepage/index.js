import React, { useState, useEffect } from 'react';
import AdminLayout from '../../../component/Dashboard/Layout';

function AdminHomePage(props) {
  const [state, setState] = useState('');

  useEffect(() => {
    return () => {};
  }, []);

  return <>{process.env.REACT_APP_API}</>;
}

export default AdminHomePage;
