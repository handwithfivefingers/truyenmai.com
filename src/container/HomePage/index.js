import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
// import Layout from '../../component/Layout';
import Stars from '../../image/stars.png';
import Moon from '../../image/moon.png';
import MountainBehind from '../../image/mountains_behind.png';
import MountainFront from '../../image/mountains_front.png';
import Starfall from '../../image/6640.png';
import { Controls, PlayState, Tween, Timeline } from 'react-gsap';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

import './style.scss';

function Homepage(props) {
  const title = useRef(null);
  const btn = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  // Check Width dimensions
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const tarRef = useRef(null);
  // useLayoutEffect(() => {
  //   if (tarRef.current) {
  //     setDimensions({
  //       width: tarRef.current.offsetWidth,
  //       height: tarRef.current.offsetHeight,
  //     });
  //     console.log(dimensions);
  //     console.log();
  //   }
  // }, []);
  console.log(window.outerWidth);
  return (
    <>
      <div className="animate-css-front-end" ref={tarRef}>
        <div className="section">
          <Tween
            to={{
              scaleX: 2,
              scaleY: 2,
              scrollTrigger: {
                trigger: '#stars',
                start: `${
                  window.outerWidth !== 0 && window.outerWidth >= 769
                    ? 'top 20%'
                    : window.outerWidth >= 500 && window.outerWidth < 769
                    ? 'top 5%'
                    : 'top -10%'
                }`,
                end: `${
                  window.outerWidth !== 0 && window.outerWidth >= 769
                    ? '+=1000'
                    : window.outerWidth >= 500 && window.outerWidth < 769
                    ? '+=950'
                    : '+=900'
                }`,
                scrub: 20,
                // markers: true,
              },
            }}
          >
            <img src={Stars} id="stars" />
          </Tween>
          <Tween
            to={{
              x: `${
                window.outerWidth !== 0 && window.outerWidth >= 769
                  ? '110%'
                  : window.outerWidth >= 500 && window.outerWidth < 769
                  ? '100%'
                  : '210%'
              }`,
              y: `${
                window.outerWidth !== 0 && window.outerWidth >= 769
                  ? '120%'
                  : window.outerWidth >= 500 && window.outerWidth < 769
                  ? '300%'
                  : '500%'
              }`,
              scaleX: `${
                window.outerWidth !== 0 && window.outerWidth >= 769
                  ? '1.5'
                  : window.outerWidth >= 500 && window.outerWidth < 769
                  ? '2.2'
                  : '3'
              }`,
              scaleY: `${
                window.outerWidth !== 0 && window.outerWidth >= 769
                  ? '1.5'
                  : window.outerWidth >= 500 && window.outerWidth < 769
                  ? '2.2'
                  : '3'
              }`,
              scrollTrigger: {
                trigger: '.moon',
                // start: 'top 50px',
                // end: 'bottom 50px',
                // start: 'top 20%',
                start: `${
                  window.outerWidth !== 0 && window.outerWidth >= 769
                    ? 'top 100px'
                    : window.outerWidth >= 500 && window.outerWidth < 769
                    ? 'top 5%'
                    : 'top -10%'
                }`,
                end: `${
                  window.outerWidth !== 0 && window.outerWidth >= 769
                    ? '+=1000'
                    : window.outerWidth >= 500 && window.outerWidth < 769
                    ? '+=950'
                    : '+=900'
                }`,
                scrub: 4,
                // markers: true,
              },
              duration: 1,
            }}
          >
            <img src={Moon} className="moon" />
          </Tween>

          {/* <img src={Starfall} id="starfall" /> */}
          <Tween
            to={{
              // x: `${
              //   window.outerWidth !== 0 && window.outerWidth >= 769
              //     ? '90%'
              //     : window.outerWidth >= 500 && window.outerWidth < 769
              //     ? '100%'
              //     : '210%'
              // }`,
              y: `${
                window.outerWidth !== 0 && window.outerWidth >= 769
                  ? '-10%'
                  : window.outerWidth >= 500 && window.outerWidth < 769
                  ? '-5%'
                  : '10%'
              }`,
              scrollTrigger: {
                trigger: '#mountains_behind',
                start: `${
                  window.outerWidth !== 0 && window.outerWidth >= 769
                    ? 'top 60%'
                    : window.outerWidth >= 500 && window.outerWidth < 769
                    ? ''
                    : ''
                }`,
                end: `${
                  window.outerWidth !== 0 && window.outerWidth >= 769
                    ? '+=200'
                    : window.outerWidth >= 500 && window.outerWidth < 769
                    ? ''
                    : ''
                }`,
                scrub: 4,
                // markers: true,
              },
              duration: 1,
            }}
          >
            <img src={MountainBehind} id="mountains_behind" />
          </Tween>

          <Tween
            to={{
              x: '0%',
              scrollTrigger: {
                trigger: '.heading',
                start: 'top 20%',
                end: 'bottom 20%',
                scrub: 3,
              },
            }}
          >
            <div className="animate-content">
              <h2 ref={title} className="heading">
                Time is money
              </h2>

              <Tween
                to={{
                  x: '50%',
                  scrollTrigger: {
                    trigger: '.btneffect',
                    start: 'top 30%',
                    end: 'bottom 20%',
                    scrub: 3,
                  },
                  css: {
                    opacity: '1',
                    zIndex: 2,
                  },
                  duration: 0.5,
                }}
              >
                <Link to="/blog" className="btneffect" ref={btn}>
                  Get Started
                </Link>
              </Tween>
            </div>
          </Tween>
          <Tween
            to={{
              scaleX: `${
                window.outerWidth !== 0 && window.outerWidth >= 769
                  ? '1.3'
                  : window.outerWidth >= 500 && window.outerWidth < 769
                  ? '1.3'
                  : '1.2'
              }`,
              scrollTrigger: {
                trigger: '#mountains_front',
                start: `${
                  window.outerWidth !== 0 && window.outerWidth >= 769
                    ? 'top 30%'
                    : window.outerWidth >= 500 && window.outerWidth < 769
                    ? ''
                    : ''
                }`,
                end: `${
                  window.outerWidth !== 0 && window.outerWidth >= 769
                    ? '+=200'
                    : window.outerWidth >= 500 && window.outerWidth < 769
                    ? ''
                    : ''
                }`,
                scrub: 4,
                css: {
                  zIndex: 9,
                },
              },
              duration: 1,
            }}
          >
            <img src={MountainFront} id="mountains_front" />
          </Tween>
        </div>
      </div>
    </>
  );
}

export default Homepage;
