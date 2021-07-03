import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { MenuRoutes } from '../../constant/route';
import UserContext from '../../helper/Context';
import { BsMoon, BsFillBrightnessHighFill } from 'react-icons/bs';
import './style.scss';
function Header(props) {
  const route = [
    { path: '/', name: 'Home', exact: true },
    { path: '/blog', name: 'Blog', exact: false },
    { path: '/contact', name: 'Contact', exact: false },
    { path: '/about', name: 'About', exact: false },
  ];
  const { thememode, setThememode } = useContext(UserContext);
  const [mode, Setmode] = useState(true);
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset);
    };
  }, []);
  // Setup mod
  const renderClass = (e) => {
    if (thememode) {
      document.body.classList.remove('dark');
      document.body.classList.add('light');
    } else {
      document.body.classList.remove('light');
      document.body.classList.add('dark');
    }
    setThememode();
  };
  useEffect(() => {
    if (!document.body.classList.contains('light')) {
      document.body.classList.add('light');
    }
  }, []);
  return (
    <header className="header sticky-md-top">
      <ul>
        {MenuRoutes.map((item, index) => {
          return (
            <li key={index}>
              <Link to={item.path}>{item.name}</Link>
            </li>
          );
        })}
      </ul>
      <div className="form-check form-switch">
        <button className="btn btn-mode" onClick={(e) => renderClass(e)}>
          {!thememode ? (
            <i>
              <BsMoon />
            </i>
          ) : (
            <i>
              <BsFillBrightnessHighFill />
            </i>
          )}
        </button>
      </div>
    </header>
  );
}

export default Header;
