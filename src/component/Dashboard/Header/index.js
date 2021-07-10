import React, { useState, useEffect } from 'react';
import { RiDashboard3Fill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import './style.scss';
function AdminHeader(props) {
  const [state, setState] = useState('');
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
                <RiDashboard3Fill size={`1.5rem`} />
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
            <div class="navbar-search">
              <form>
                <input type="search" />
                <button type="submit">Search</button>
              </form>
            </div>
            <div class="navbar-profile">
              <a>
                <RiDashboard3Fill size={`1.5rem`} />
              </a>
              <a>
                <RiDashboard3Fill size={`1.5rem`} />
              </a>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default AdminHeader;
