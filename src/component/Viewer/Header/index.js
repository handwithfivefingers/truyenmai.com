import React, { useState, useEffect, useContext } from 'react';
import {
  NavLink,
  useHistory,
  useLocation,
  useParams,
  useRouteMatch,
  Link,
} from 'react-router-dom';
import { MenuRoutes } from '../../../constant/route';
import UserContext from '../../../helper/Context';
import {
  BsMoon,
  BsFillBrightnessHighFill,
  BsThreeDots,
  BsArrowBarLeft,
  BsList,
} from 'react-icons/bs';

import '../Style/style.scss';

function Header(props) {
  const { thememode, setThememode } = useContext(UserContext);
  const [mobile, SetMobile] = useState(false);
  let location = useLocation();
  let match = useHistory();
  let { params } = useParams();
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
      <div className="logo">
        <Link to="/">
          <img src="/logo192.png" alt="Five finger" />
        </Link>
      </div>
      <nav className="menu-desktop">
        <ul>
          {MenuRoutes.map((item, index) => {
            return (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`${
                    item.path === location.pathname ? 'is_active' : ''
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="menu-mobile">
        <div className="menu-toggle" onClick={() => SetMobile(!mobile)}>
          {/* <span></span>
          <span></span>
          <span></span> */}
          <BsList size={'1.5rem'}/>
        </div>
        <nav className={`menu-dropdown ${mobile ? 'active-header' : ''}`}>
          <ul>
            {mobile
              ? MenuRoutes.map((item, index) => {
                  return (
                    <li
                      key={item.path}
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
