import React, { useState, useEffect } from 'react';
import { NavLink, Link, Route } from 'react-router-dom';
import { params } from '../../helper/params';
import { MenuRoutes } from '../../constant/route';
function Breadcrumb(props) {
  const [state, setState] = useState('');
  //   <li className={match.isExact ? 'breadcrumb-active' : undefined}>
  //   <NavLink to={match.url || ''}>{match.params.path}</NavLink>
  // </li>
  // <Route path={`${match.url}/:path`} component={Breadcrumb} />
  // console.log(props);
  return (
    <>
      <div className="row">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            {MenuRoutes.map((item, index) => {
              console.log();
              if (item.path === props.match.url) {
                return (
                  <>
                    {props.match.isExact ? (
                      <li className="breadcrumb-item">
                        <Link className={`breadcrumb-item`} to={item.path}>
                          {item.name}
                        </Link>
                      </li>
                    ) : (
                      <>
                      <li className="breadcrumb-item">
                        <Link className={`breadcrumb-item`} to={item.path}>
                          {item.name}
                        </Link>
                      </li>
                     <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        Current
                      </li>
                      </>
                    )}
                  </>
                );
              }
              if (!props.match.isExact) {
              }
            })}

            {/* 
            <li className="breadcrumb-item">
              <NavLink to="/blog">Blog</NavLink>
            </li> */}
            {/*  */}
          </ol>
        </nav>
      </div>
    </>
  );
}

export default Breadcrumb;
