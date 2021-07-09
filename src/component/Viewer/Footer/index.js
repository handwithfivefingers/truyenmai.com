import React, { useState, useEffect } from 'react';
import './style.scss';
import { BsFillCaretUpFill } from 'react-icons/bs';
function Footer(props) {
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <footer className="container-fluid footer">
      <div
        className="scroll-top"
        onClick={() => {
          window.scrollTo({top: 0, behavior: 'smooth'});
        }}
      >
        <span>
          <BsFillCaretUpFill />
        </span>
      </div>
      <div className="row ">
        <div className="col-md-3 col-sm-12 mt-4">
          <div className="footer-left">
            <h5>Latest Post</h5>
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
          <h5>Just a quote</h5>
            <p>"High Risk, High Reward "</p>
            <p>"Inaction Brings Doubt and Fear… "</p>
        </div>

        <div className=" col-md-3 col-sm-12   mt-4">
          <div className="footer-right">
            <h5>My Project</h5>
            <ul className="footer-right-bar">
              <li>
                <a className="footer-link">WEB Blog</a>
              </li>
              <li>
                <a className="footer-link">WEB Ecommerce</a>
              </li>
              <li>
                <a className="footer-link">WEB To-Do List</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-12  footer-copy-right mt-4">
          <p>Copyright {new Date().getFullYear()} - Design by side</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
