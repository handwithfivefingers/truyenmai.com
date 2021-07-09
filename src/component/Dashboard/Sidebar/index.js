import React, { useState, useEffect } from 'react';
import './style.scss';
function AdminSidebar(props) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <>
      <div className="side-bar">
        <ul>
          <li>
            <a>Dashboard</a>
          </li>
          <li>
            <a>Pages</a>
          </li>
          <li>
            <a>Posts</a>
          </li>
          <li>
            <a>Category</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default AdminSidebar;
