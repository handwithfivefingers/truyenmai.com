import React, { useState, useEffect, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import UserContext from '../../../helper/Context';
import {
  BsGraphUp,
  BsFileEarmarkText,
  BsJustifyLeft,
  BsLayers,
  BsPeople,
  BsChevronDoubleRight,
} from 'react-icons/bs';
import '../Style/style.scss';
function AdminSidebar(props) {

  const { expand, expanded } = useContext(UserContext);

  
  const page = [
    {
      label: 'Dashboard',
      path: '/dashboard',
      icon: <BsGraphUp size={`1.3rem`} />,
    },
    {
      label: 'Pages',
      path: '/dashboard/pages',
      icon: <BsFileEarmarkText size={`1.3rem`} />,
    },
    {
      label: 'Posts',
      path: '/dashboard/posts',
      icon: <BsJustifyLeft size={`1.3rem`} />,
    },
    {
      label: 'Category',
      path: '/dashboard/category',
      icon: <BsLayers size={`1.3rem`} />,
    },
    {
      label: 'Contact',
      path: '/dashboard/contact',
      icon: <BsPeople size={`1.3rem`} />,
    },
  ];
  return (
    <>
      <div className={`side-bar ${expand ? 'expanded' : ''}`}>
        <span className="expand-toggle" onClick={() =>expanded()}>
          <BsChevronDoubleRight />
        </span>
        <ul>
          {page.map((item) => {
            return (
              <li key={item.path}>
                <NavLink to={item.path} exact>
                  <span>{item.icon}</span>
                  {item.label}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default AdminSidebar;
