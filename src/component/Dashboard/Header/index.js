import React, { useState, useEffect } from 'react';
import { RiDashboard3Line } from 'react-icons/ri';
import { BsSearch, BsPerson, BsChatDots, BsBell } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import '../Style/style.scss';
function AdminHeader(props) {
  const [profileshow, Setprofileshow] = useState(false);
  useEffect(() => {
    return () => {};
  }, []);
  return (
    <>
      <header>
        <nav className="dashboard navbar navbar-expand-lg">
          <div className="container-fluid">
            <div className="navbar-brand">
              <Link className="navbar-brand-item" to="/">
                <RiDashboard3Line size={`1.5rem`} />
              </Link>
              <Link className="navbar-brand-item" to="/blog">
                Home
              </Link>
              <Link className="navbar-brand-item" to="#">
                Thống kê
              </Link>
            </div>
            <button className="navbar-toggler" type="button">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="navbar-search">
              <form>
                <input type="search" />
                <button type="submit">
                  <BsSearch />
                </button>
              </form>
            </div>
            <div className="navbar-profile">
              <a>
                <BsBell size="1.5rem" />{' '}
                <span className="badge badge-pill badge-success">4</span>
              </a>
              <a>
                <BsChatDots size={`1.5rem`} />
              </a>
              <a onClick={() => Setprofileshow(!profileshow)}>
                <BsPerson size={`1.5rem`} />
                {profileshow ? (
                  <ul className="dropdown-profile">
                    <li>
                      <a>Profile</a>
                    </li>
                    <li>
                      <a>Customize</a>
                    </li>
                    <li>
                      <a>Setting</a>
                    </li>
                  </ul>
                ) : (
                  ''
                )}
              </a>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default AdminHeader;
