import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
// import Layout from '../../component/Layout';
import Stars from '../../image/stars.png';
// import Moon from '../../image/moon.png';
import Newmoon from '../../image/newmoon.png';
import MountainBehind from '../../image/mountains_behind.png';
import MountainFront from '../../image/mountains_front.png';
import { FaGithub, FaFacebook } from 'react-icons/fa';
import {
  SplitWords,
  ScrollTrigger,
  Tween,
  Timeline,
  SplitChars,
} from 'react-gsap';
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
            (scrollPosition / (sectionHeight + sectionY)) * 50 - 100
          }px)`;
          elmtright.style.transform = `translateY(${
            (scrollPosition / (sectionHeight + sectionY)) * 50 - 100
          }px)`;
        }
        // console.log('scroll:', scrollPosition, '2:', sectionHeight + sectionY);
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
        end="+=50"
        scrub={3}
        // markers={true}
        pin={true}
      >
        {' '}
        <Tween from={{ x: '-100px' }} stagger={0.1}>
          <SplitChars
            wrapper={
              <h2
                style={{ display: 'inline-block', letterSpacing: '0.2rem' }}
              />
            }
          >
            Time Is Free, But It’s
          </SplitChars>
          <h2>Priceless</h2>
        </Tween>
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
            x: `${width}`,
            y: `${
              section1 !== null && section1 !== undefined
                ? section1.current.offsetHeight
                : height
            }`,
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
            y: `${width > 768 ? '135%' : '175%'}`,
            scrollTrigger: {
              trigger: '.animate-content',
              start: 'top 0px',
              end: 'top 20px',
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
