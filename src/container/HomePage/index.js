import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
// import Layout from '../../component/Layout';
import Stars from '../../image/stars.png';
import Moon from '../../image/moon.png';
import MountainBehind from '../../image/mountains_behind.png';
import MountainFront from '../../image/mountains_front.png';
import Starfall from '../../image/6640.png';
import { SplitWords, ScrollTrigger, Tween, Timeline } from 'react-gsap';
import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

import './style.scss';

function Homepage(props) {
  const title = useRef(null);
  const btn = useRef(null);
  const animateRef = useRef(null);
  // gsap.registerPlugin(ScrollTrigger);
  console.log(gsap);
  // Check Width dimensions
  const [height, setheight] = useState(null);
  const [width, setwidth] = useState(null);

  console.log(
    window.outerWidth,
    window.outerHeight,
    document.body.getBoundingClientRect().height,
    document.body.offsetHeight
  );
  useEffect(() => {
    if (window.outerWidth > 0) {
      setwidth(window.outerWidth);
    }
  }, [width]);

  useEffect(() => {
    if (document.body.offsetHeight > 0) {
      setheight(document.body.getBoundingClientRect().height);
      renderScrolTrigger();
    }
  }, [height]);
  const renderScrolTrigger = () => {
    let xhtml = null;
    xhtml = (
      <ScrollTrigger
        trigger="trigger"
        start={`+=${height - window.outerHeight - 100}`}
        end="+=100"
        scrub={4}
        // markers={true}
        pin={true}
      >
        <Timeline
          target={
            <>
              <SplitWords wrapper={<h2 />}>"Time Is Free,</SplitWords>
              <SplitWords wrapper={<h2 />}>But It’s Priceless"</SplitWords>
            </>
          }
        >
          <Tween to={{ x: '20px' }} position={0.5} duration={0.1} target={1} />
          <Tween to={{ x: '20px' }} position={0.5} duration={0.2} target={2} />
          <Tween
            to={{ x: '-20px' }}
            position="+=0.5"
            duration={0.1}
            target={3}
          />
          <Tween to={{ x: '20px' }} position={0.5} duration={0.2} target={4} />
          <Tween
            to={{ x: '-20px' }}
            position="+=0.5"
            duration={0.1}
            target={5}
          />
        </Timeline>
      </ScrollTrigger>
    );
    return xhtml;
  };
  const renderMoon = () => {
    let xhtml = null;
    if (width) {
      xhtml = (
        <Tween
          to={{
            x: `${
              width !== 0 && width >= 769
                ? '110%'
                : width >= 500 && width < 769
                ? '100%'
                : '210%'
            }`,
            y: `${
              width !== 0 && width >= 769
                ? '120%'
                : width >= 500 && width < 769
                ? '300%'
                : '500%'
            }`,
            scaleX: `${
              width !== 0 && width >= 769
                ? '1.5'
                : width >= 500 && width < 769
                ? '2.2'
                : '3'
            }`,
            scaleY: `${
              width !== 0 && width >= 769
                ? '1.5'
                : width >= 500 && width < 769
                ? '2.2'
                : '3'
            }`,
            scrollTrigger: {
              trigger: '.moon',
              start: `${
                width !== 0 && width >= 769
                  ? 'top 100px'
                  : width >= 500 && width < 769
                  ? 'top 5%'
                  : 'top -10%'
              }`,
              end: `${
                width !== 0 && width >= 769
                  ? '+=1000'
                  : width >= 500 && width < 769
                  ? '+=950'
                  : '+=900'
              }`,
              scrub: 2,
              // markers: true,
            },
            duration: 1,
          }}
        >
          <img src={Moon} className="moon" />
        </Tween>
      );
    }
    return xhtml;
  };
  const renderAnimateContent = () => {
    let xhtml = null;
    if (width > 0) {
      xhtml = (
        <Tween
          to={{
            x: '0%',
            y: `${width > 768 ? '0%' : '50%'}`,
            scrollTrigger: {
              trigger: '.animate-content',
              start: 'top 20%',
              end: '+=100',
              scrub: 2,
              // markers: true,
            },
            onComplete: () => {
              animateRef.current.classList.add('mainAnimatedClass'); // then only replace with blue div with new height and width
            },
            onStart: () => {
              animateRef.current.classList.remove('mainAnimatedClass');
            },
          }}
        >
          <div className="animate-content" ref={animateRef}>
            {height ? renderScrolTrigger() : ''}
            <br />
            <Link to="/blog" className="btneffect" ref={btn}>
              Get Started
            </Link>
          </div>
        </Tween>
      );
    }
    return xhtml;
  };
  return (
    <>
      <div className="animate-css-front-end">
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
          {width ? renderMoon() : ''}
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
          {renderAnimateContent()}
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
