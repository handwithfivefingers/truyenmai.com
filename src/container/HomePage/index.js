import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
// import Layout from '../../component/Layout';
import Stars from '../../image/stars.png';
// import Moon from '../../image/moon.png';
import Newmoon from '../../image/newmoon.png';
import MountainBehind from '../../image/mountains_behind.png';
import MountainFront from '../../image/mountains_front.png';
import Starfall from '../../image/6640.png';
import { FaGithub, FaFacebook } from 'react-icons/fa';
import { SplitWords, ScrollTrigger, Tween, Timeline } from 'react-gsap';
import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

import './style.scss';

function Homepage(props) {
  const title = useRef(null);
  const btn = useRef(null);
  const animateRef = useRef(null);
  const stars = useRef(null);
  const section1 = useRef(null);
  const section2 = useRef(null);

  // gsap.registerPlugin(ScrollTrigger);

  // Check Width dimensions
  const [height, setheight] = useState(null);
  const [width, setwidth] = useState(null);
  const [scrollPosition, setPosition] = useState(0);

  useLayoutEffect(() => {
    function updatePosition() {
      setPosition(window.pageYOffset);
    }
    window.addEventListener('scroll', updatePosition);
    updatePosition();
    return () => window.removeEventListener('scroll', updatePosition);
  }, []);

  // console.log(scrollPosition);
  // useLayoutEffect(() => {
  //   stars.current.addEventListener('scroll', () => {

  //   });
  // }, [scrollPosition]);
  // useLayoutEffect(() => {
  //   if (stars !== undefined && stars) {
  //     stars.current.addEventListener('scroll', OnScrollEvent(this));
  //     console.log(stars);
  //     OnScrollEvent(stars.current);
  //   }
  // }, []);
  const OnScrollEvent = (el) => {
    if (el !== null && el !== undefined) {
      el.style.transform = `translateY(${scrollPosition * 0.75}px)`;
    }
  };
  const handleOnscrollSection2 = () => {
    if (scrollPosition) {
      if (section2 !== null && section2 !== undefined) {
        let sectionHeight = section2.current.offsetHeight;
        let sectionY = section2.current.getBoundingClientRect().top;
        let elmtleft = section2.current.querySelector('.section-left');
        let elmtright = section2.current.querySelector('.section-right');
        if (scrollPosition > section2.current.getBoundingClientRect().top) {
          elmtleft.style.transform = `translateY(${
            (scrollPosition / (sectionHeight + sectionY)) * 50 - 50
          }px)`;
          elmtright.style.transform = `translateY(${
            (scrollPosition / (sectionHeight + sectionY)) * 50 - 50
          }px)`;
        }
        console.log('scroll:', scrollPosition, '2:', sectionHeight + sectionY);
      }
    }
  };
  useEffect(() => {
    if (window.outerWidth > 0) {
      setwidth(window.outerWidth);
      renderMoon();
      renderAnimateContent();
    }
    return () => {
      window.scrollTo(0, 0);
    };
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
        start={`+=${height - window.outerHeight - 500}`}
        end="+=100"
        scrub={4}
        // markers={true}
        pin={true}
      >
        <Timeline
          target={
            <>
              <SplitWords wrapper={<h2 />}>Time Is Free,</SplitWords>
              <SplitWords wrapper={<h2 />}>But It’s Priceless</SplitWords>
            </>
          }
        >
          <Tween to={{ x: '-20px' }} position={0.5} duration={0.1} target={0} />
          <Tween to={{ x: '0px' }} position={0.5} duration={0.1} target={1} />
          <Tween to={{ x: '20px' }} position={1} duration={0.2} target={2} />
          <Tween
            to={{ x: '-20px' }}
            position="+=0.5"
            duration={0.1}
            target={3}
          />
          <Tween to={{ x: '0px' }} position={0.5} duration={0.2} target={4} />
          <Tween
            to={{ x: '20px' }}
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
        // <Tween
        //   to={{
        //     x: `${
        //       width !== 0 && width >= 769
        //         ? '110%'
        //         : width >= 500 && width < 769
        //         ? '100%'
        //         : '210%'
        //     }`,
        //     y: `${
        //       width !== 0 && width >= 769
        //         ? '120%'
        //         : width >= 500 && width < 769
        //         ? '300%'
        //         : '500%'
        //     }`,
        //     scaleX: `${
        //       width !== 0 && width >= 769
        //         ? '1.5'
        //         : width >= 500 && width < 769
        //         ? '2.2'
        //         : '3'
        //     }`,
        //     scaleY: `${
        //       width !== 0 && width >= 769
        //         ? '1.5'
        //         : width >= 500 && width < 769
        //         ? '2.2'
        //         : '3'
        //     }`,
        //     scrollTrigger: {
        //       trigger: '.moon',
        //       start: `${
        //         width !== 0 && width >= 769
        //           ? 'top 100px'
        //           : width >= 500 && width < 769
        //           ? 'top 5%'
        //           : 'top -10%'
        //       }`,
        //       end: `${
        //         width !== 0 && width >= 769
        //           ? '+=1000'
        //           : width >= 500 && width < 769
        //           ? '+=950'
        //           : '+=900'
        //       }`,
        //       scrub: 2,
        //       // markers: true,
        //     },
        //   }}
        // >
        //   {/* <img src={Moon} className="moon" /> */}
        //   <img src={Newmoon} id="moon" />
        // </Tween>
        <Tween
          to={{
            x: `${width}`,
            y: `${section1 !== null && section1 !== undefined ? section1.current.offsetHeight : height}`,
            // position: {
            //   right:'100%',
            //   bottom:0,
            // },
            scaleX: `${
              width !== 0 && width >= 769
                ? '3'
                : width >= 500 && width < 769
                ? '2.2'
                : '3'
            }`,
            scaleY: `${
              width !== 0 && width >= 769
                ? '3'
                : width >= 500 && width < 769
                ? '2.2'
                : '3'
            }`,
            rotate: 180,
            scrollTrigger: {
              trigger: '#moon',
              start: 'top 0px',
              end: `${height}`,
              scrub: 2,
              // markers: true,
            },
          }}
        >
          {/* <img src={Moon} className="moon" /> */}
          <img src={Newmoon} id="moon" />
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
            y: `${width > 768 ? '25%' : '50%'}`,
            scrollTrigger: {
              trigger: '.animate-content',
              start: 'top 0px',
              end: 'top 50px',
              scrub: 2,
              // markers: true,
            },
            onComplete: () => {
              animateRef.current.classList.add('mainAnimatedClass'); // then only replace with blue div with new height and width
            },
          }}
        >
          <div className="animate-content" ref={animateRef}>
            {renderScrolTrigger()}
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
        <div className="section-1" ref={section1}>
          <img
            src={Stars}
            id="stars"
            ref={stars}
            onScroll={OnScrollEvent(stars.current)}
          />
          {renderMoon()}
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
        <div
          className="section-2"
          ref={section2}
          onScroll={handleOnscrollSection2()}
        >
          <div className="section-left">
            <h3>Contact</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>

          <div className="section-right">
            <h3>My Social</h3>
            <ul>
              <li>
                <a href="https://github.com/handwithfivefingers">
                  <FaGithub />
                </a>
              </li>
              <li>
                <a href="https://fb.com/hdme1995">
                  <FaFacebook />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Homepage;
