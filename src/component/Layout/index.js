import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../Header';
import './style.scss';

function Layout(props) {
  useEffect(() => {
    return () => {};
  }, []);
  const side = [
    {
      name: 'HTML',
      path: '/blog/html',
    },
    {
      name: 'CSS',
      path: '/blog/css',
    },
    {
      name: 'JavaScript',
      path: '/blog/javascript',
    },
    {
      name: 'ReactJS',
      path: '/blog/reactjs',
    },
    {
      name: 'NodeJS',
      path: '/blog/nodejs',
    },
  ];
  const renderSideBar = () => {
    return (
      <>
        <h3 style={{ color: '#333', textAlign: 'left' }}>Categories</h3>
        <ul className="list-group" style={{ textAlign: 'left' }}>
          {side.map((item, index) => {
            return (
              <li className="list-group-item" key={index}>
                <NavLink to={item.path}> {item.name}</NavLink>
              </li>
            );
          })}
        </ul>
      </>
    );
  };
  return (
    <div className="container">
      <Header />
      <div className="row">
        <div className={props.sidebar ? 'col-md-9' : 'col-md-12'}>
          {props.children}
        </div>
        {props.sidebar ? <div className="col-md-3">{renderSideBar()}</div> : ''}
      </div>
    </div>
  );
}

export default Layout;
