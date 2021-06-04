import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { params } from '../../helper/params';
import Header from '../Header';
import Footer from '../Footer';
import SideBar from '../Sidebar';
import './style.scss';

function Layout(props) {
  useEffect(() => {
    return () => {};
  }, []);
 
  // console.log(props);
  const renderBreadcrumb = () => {
    return (
      <div className="row">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="breadcrumb-item">
              <NavLink to="/blog">Blog</NavLink>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Current
            </li>
          </ol>
        </nav>
      </div>
    );
  };
  return (
    <>
      <Header />
      <div className="container">
        {props.breadcrumb ? renderBreadcrumb() : ''}
        <div className="row">
          <div className={props.sidebar ? 'col-md-9' : 'col-md-12'}>
            {props.children}
          </div>
          {props.sidebar ? (
            <div className="col-md-3"><SideBar /></div>
          ) : (
            ''
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Layout;
