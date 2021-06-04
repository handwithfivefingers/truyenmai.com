import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
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
function SideBar(props) {
  const [state, setState] = useState('');

  useEffect(() => {
    return () => {};
  }, []);
  const renderSearchBar = () => {
    return (
      <>
        <div className="d-flex justify-content-between align-items-center">
          <h3 style={{ color: '#333', textAlign: 'left' }}>Search</h3>
        </div>
        <div className="dropdown-divider"></div>
        <div className="row">
          <div className="col mt-3">
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </>
    );
  };
  const renderCategoriesSidebar = () => {
    return (
      <>
        <div className="d-flex justify-content-between align-items-center">
          <h3 style={{ color: '#333', textAlign: 'left' }}>Categories</h3>
        </div>
        <div className="dropdown-divider"></div>
        <div className="row">
          <div className="col mt-3">
            <ul className="list-group" style={{ textAlign: 'left' }}>
              {side.map((item, index) => {
                return (
                  <li className="list-group-item" key={index}>
                    <NavLink to={item.path}> {item.name}</NavLink>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      {renderSearchBar()}
      <br></br>
      {renderCategoriesSidebar()}
    </>
  );
}

export default SideBar;
