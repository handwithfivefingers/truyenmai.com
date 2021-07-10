import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './style.scss';
function AdminSidebar(props) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    return () => {};
  }, []);
  const page = [
    { label: 'Dashboard', path: '/dashboard' },
    { label: 'Pages', path: '/dashboard/pages' },
    { label: 'Posts', path: '/dashboard/posts' },
    { label: 'Category', path: '/dashboard/category' },
    { label: 'Contact', path: '/dashboard/contact' },
  ];
  return (
    <>
      <div className="side-bar">
        <ul>
          {page.map((item) => {
            return (
              <li key={item.path}>
                <NavLink to={item.path} exact>{item.label}</NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default AdminSidebar;
