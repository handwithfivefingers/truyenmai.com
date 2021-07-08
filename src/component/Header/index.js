import React, { useState, useEffect, useContext } from 'react';
import { Link, useHistory, useLocation, useRouteMatch } from 'react-router-dom';
import { MenuRoutes } from '../../constant/route';
import UserContext from '../../helper/Context';
import {
  BsMoon,
  BsFillBrightnessHighFill,
  BsThreeDots,
  BsArrowBarLeft,
} from 'react-icons/bs';

import './style.scss';

function Header(props) {
  const { thememode, setThememode } = useContext(UserContext);
  const [mobile, SetMobile] = useState(false);
  let location = useLocation();
  let match = useHistory();
  // const checkLocation = () => {
  //   if (MenuRoutes.length > 0) {
  //     MenuRoutes.map((item) => {
  //       if (match.location.pathname == location.pathname) {
  //         console.log(match);
  //       }
  //     });
  //   }
  // };

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
    <header className="header sticky-top">
      <nav className="menu-desktop">
        <ul>
          {MenuRoutes.map((item, index) => {
            return (
              <li key={index}>
                <Link to={item.path}>{item.name}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="menu-mobile">
        <div className="menu-toggle" onClick={() => SetMobile(!mobile)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <nav className={`menu-dropdown ${mobile ? 'active-header' : ''}`}>
          <ul>
            {mobile
              ? MenuRoutes.map((item, index) => {
                  return (
                    <li
                      key={index}
                      className={`nav-item ${
                        match.location.pathname == item.path
                          ? 'nav-item-active'
                          : ''
                      }`}
                    >
                      <Link
                        className={`${
                          match.location.pathname == item.path
                            ? 'nav-link-item-active'
                            : ''
                        }`}
                        to={item.path}
                      >
                        {item.name}
                      </Link>
                    </li>
                  );
                })
              : ''}
            <li className="nav-item">
              <a href="#" onClick={() => SetMobile(!mobile)}>
                <BsArrowBarLeft /> Back
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className=" mode">
        <button className="btn-mode" onClick={(e) => renderClass(e)}>
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
