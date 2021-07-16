import React, { useState, useEffect } from 'react';
import {
  Link,
  Redirect,
  Route,
  useHistory,
  useLocation,
} from 'react-router-dom';
import Categories from './../../../container/Viewer/Categories';
import { BsLayersFill, BsSearch } from 'react-icons/bs';
import '../Style/style.scss';
import axios from './../../../helper/adminAxios';
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
  const [search, setSearch] = useState('');
  const [post, Setpost] = useState([]);
  let history = useHistory();
  let location = useLocation();
  const onSearching = (e) => {
    e.preventDefault();
    history.push({
      pathname: '/search',
      search: search,
      state: post,
    });
    console.log(location);
  };
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
          <div className="col mt-3 side-search">
            <form
              className="d-flex side-search-form"
              onSubmit={(e) => onSearching(e)}
            >
              <input
                className="form-control me-2 "
                type="search"
                placeholder="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <button type="submit">
                <BsSearch />
              </button>
            </form>
            <a
              href="#"
              className="side-search-filter"
              style={{ textAlign: 'left' }}
              onClick={() => alert('Sorry, this function is not available yet')}
              alt="More Option"
            >
              <BsLayersFill />
            </a>
          </div>
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
