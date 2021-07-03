import React, { useState, useEffect } from 'react';
import './style.scss';
function Footer(props) {
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <footer className="container footer">
      <div className="row ">
        <div className="col-md-3 col-sm-12 list-group mt-4">
          <div className="footer-left">
            <h5>More info</h5>
            <ul className="footer-left-bar">
              <li>
                <a className="footer-link"> Link 1</a>
              </li>
              <li>
                <a className="footer-link"> Link 2</a>
              </li>
              <li>
                <a className="footer-link"> Link 3</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="offset-md-1 col-md-4  col-sm-12 list-group mt-4">
          <h5>Newfeeds</h5>
        </div>
        <div className=" offset-md-1 col-md-3 col-sm-12  list-group mt-4">
          <div className="footer-right">
            <h5>Project đã thực hiện</h5>
            <ul className="footer-right-bar">
              <li>
                <a className="footer-link"> Link 1</a>
              </li>
              <li>
                <a className="footer-link"> Link 2</a>
              </li>
              <li>
                <a className="footer-link"> Link 3</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-12 list-group footer-copy-right mt-4">
          <p>Copyright By FF</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
