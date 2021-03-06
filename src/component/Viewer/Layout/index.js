import React, { useState, useEffect, useContext, createContext } from 'react';
import {
  BsFillCaretLeftFill,
  BsFillGrid3X3GapFill,
  BsDownload,
} from 'react-icons/bs';
import { Route, useHistory, useLocation } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import SideBar from '../Sidebar';
import '../Style/style.scss';
import Pagination from '../Pagination';
import Breadcrumb from '../Breadcrumb';

function Layout(props) {
  let history = useHistory();
  const renderImage = (img) => {
    return (
      <div
        className="image-container"
        style={{
          width: '100%',
          padding: '150px',
          backgroundImage: `url(${img})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      ></div>
    );
  };
  return (
    <>
      <Header />
            <div className="container-fluid" style={{ padding: '20px' }}>
              <div className="list-group">
                {props.img ? renderImage(props.img) : ''}
              </div>
            </div>
            <div className="container clearfix">
              {props.breadcrumb ? (
                <Route path="/:path" component={Breadcrumb} />
              ) : (
                ''
              )}

              <div className="row">
                <div className={props.sidebar ? 'col-md-9' : 'col-md-12'}>
                  {/* Do something like this for Header */}
                  <div className="d-flex justify-content-between align-items-center">
                    {/** Title Content Setup */}
                    {props.back ? (
                      <BsFillCaretLeftFill
                        onClick={() => history.goBack()}
                        className="hover"
                        size="22"
                        animation="spin"
                      />
                    ) : (
                      ''
                    )}
                    <h3 style={{ textAlign: 'right' }}>{props.title}</h3>
                    {props.col ? (
                      <span
                        className="layout-icon"
                        onClick={() =>
                          alert('This function is not available yet')
                        }
                      >
                        <p> Column:</p>
                        <BsFillGrid3X3GapFill
                          style={{ paddingLeft: '5px' }}
                          className="icon-hover"
                          size="22"
                          animation="spin"
                        />
                      </span>
                    ) : (
                      ''
                    )}
                    {props.style ? (
                      <span
                        className="layout-icon"
                        onClick={() =>
                          alert('This function is not available yet')
                        }
                      >
                        <p>{props.style}</p>

                        <BsDownload
                          className="icon-hover"
                          size="22"
                          animation="spin"
                        />
                      </span>
                    ) : (
                      ''
                    )}
                  </div>
                  <div className="container-fluid" style={{ padding: '20px' }}>
                    <div className="list-group"></div>
                  </div>
                  {/* Do something like this for Header */}

                  {props.children}

                  {/**Pagination */}
                  <div className="mt-3">
                    <div className="col-md-12">
                      {props.pagination ? <Pagination /> : ''}
                    </div>
                  </div>
                  <div className="container-fluid" style={{ padding: '20px' }}>
                    <div className="list-group"></div>
                  </div>
                </div>
                {props.sidebar ? (
                  <div className="col-md-3">
                    <SideBar />
                  </div>
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
