import React, { useState, useEffect } from 'react';
import './style.scss';
import { BsFillCaretUpFill } from 'react-icons/bs';
function Footer(props) {
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <footer className="container footer">
      <div
        className="scroll-top"
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      >
        <span>
          <BsFillCaretUpFill />
        </span>
      </div>
      <div className="row ">
        <div className="col-md-3 col-sm-12 mt-4">
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

        <div className=" col-md-4  col-sm-12  mt-4">
          <h5>Newfeeds</h5>
        </div>

        <div className=" col-md-3 col-sm-12   mt-4">
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
        <div className="col-12  footer-copy-right mt-4">
          <p>Copyright By FF</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
