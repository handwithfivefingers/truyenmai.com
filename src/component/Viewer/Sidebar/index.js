import React, { useState, useEffect } from 'react';
import { Link, Route } from 'react-router-dom';
import Categories from './../../../container/Viewer/Categories';
import { BsLayersFill } from 'react-icons/bs';
import './style.scss';
const side = [
  {
    name: 'HTML',
    path: '/blog/category/html',
  },
  {
    name: 'CSS',
    path: '/blog/category/css',
  },
  {
    name: 'JavaScript',
    path: '/blog/category/javascript',
  },
  {
    name: 'ReactJS',
    path: '/blog/category/reactjs',
  },
  {
    name: 'NodeJS',
    path: '/blog/category/nodejs',
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
          <h3 style={{ textAlign: 'right' }}>Side</h3>
        </div>
        <div className="container-fluid" style={{ padding: '20px' }}>
          <div className="list-group"></div>
        </div>

        <div className="row">
          <div className="col mt-3">
            <form className="d-flex" onSubmit={() => alert('Sorry, this function is not available yet')}>
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
          <a href="#" className="mt-3" style={{ textAlign: 'left' }} onClick={() => alert('Sorry, this function is not available yet')}>
            More Filter <BsLayersFill />
          </a>
        </div>
      </>
    );
  };
  const renderCategoriesSidebar = () => {
    return (
      <>
        <div className="d-flex justify-content-between align-items-center">
          <h3 style={{ textAlign: 'left' }}>Categories</h3>
        </div>
        <div className="container-fluid" style={{ padding: '20px' }}>
          <div className="list-group"></div>
        </div>

        <div className="row">
          <div className="col mt-3">
            <ul className="list-group" style={{ textAlign: 'left' }}>
              {side.map((item, index) => {
                return (
                  <li className="list-group-item" key={index}>
                    <Link to={item.path}> {item.name}</Link>
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
      <div className=" sticky-md-top">
        {renderSearchBar()}
        <br />
        {renderCategoriesSidebar()}
      </div>
    </>
  );
}

export default SideBar;
