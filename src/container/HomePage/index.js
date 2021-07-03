import React, { useState, useEffect, useRef } from 'react';
// import Layout from '../../component/Layout';
import Stars from '../../image/stars.png';
import Moon from '../../image/moon.png';
import MountainBehind from '../../image/mountains_behind.png';
import MountainFront from '../../image/mountains_front.png';
import Starfall from '../../image/6640.png';
import { Controller, Scene } from 'react-scrollmagic';
import {
  LocomotiveScrollProvider,
  useLocomotiveScroll,
} from 'react-locomotive-scroll';
import { Tween, Timeline } from 'react-gsap';
import { Link, useHistory, useLocation, useRouteMatch } from 'react-router-dom';
import './style.scss';
function Homepage(props) {
  const { scroll } = useLocomotiveScroll();
  const containerRef = useRef(null);
  return (
    <>
      <div className="animate-css-front-end">
        <div className="section">
          <img src={Stars} id="stars" />
          <img src={Moon} id="moon" />
          {/* <img src={Starfall} id="starfall" /> */}
          <img src={MountainBehind} id="mountains_behind" />
          <img src={MountainFront} id="mountains_front" />

          <div className="animate-content">
            <h2>Time is money</h2>
            <Link to="/blog">Get Started</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Homepage;
