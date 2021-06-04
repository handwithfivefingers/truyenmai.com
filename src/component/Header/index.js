import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './style.css';
function Header(props) {
  const route = [
    { path: '/', name: 'Home', exact: true },
    { path: '/blog', name: 'Blog', exact: false },
    { path: '/contact', name: 'Contact', exact: false },
    { path: '/about', name: 'About', exact: false },
  ];
  useEffect(() => {
    return () => {};
  }, []);
  return (
    <div className="header">
      <ul>
        {route.map((item, index) => {
          return (
            <li key={index}>
              <Link to={item.path} exact={item.exact.toString()}>
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Header;
