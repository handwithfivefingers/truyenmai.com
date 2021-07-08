import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { ProgressBar } from 'react-bootstrap';
import Layout from '../../component/Layout';
import './style.scss';
function About(props) {
  const [height, setHeight] = useState(null);
  const heightRef = useRef(null);
  const processRef = useRef(null);
  const [currentPosition, setPosition] = useState(0);

  useLayoutEffect(() => {
    function updatePosition() {
      setPosition(window.pageYOffset);
    }
    window.addEventListener('scroll', updatePosition);
    updatePosition();
    return () => window.removeEventListener('scroll', updatePosition);
  }, []);

  useEffect(() => {

    // console.log(
    //   'Componnent:',
    //   heightRef.current.offsetHeight,
    //   'Height Display',
    //   window.innerHeight,
    //   'Full page Height',
    //   document.body.getBoundingClientRect().height,
    //   'Current Top:',
    //   currentPosition,
    //   'Component - Top:',
    //   heightRef.current.getBoundingClientRect().top,
    // );
    // console.log(
    //   'Height Display:',
    //   window.innerHeight,
    //   'Current Top:',
    //   currentPosition,
    //   'Center View: ',
    //   window.innerHeight / 2 + currentPosition
    // );
    if (heightRef.current.offsetHeight > 0) {
      setHeight(heightRef.current.offsetHeight);
      let com = heightRef.current.querySelectorAll('.main-skill');
      let span = document.getElementsByClassName('note-timeline');
      for (let i = 0; i < span.length; i++) {
        span[i].style.top = `calc(${
          window.innerHeight / 2 + currentPosition
        }px - 70px)`;
      }
      // Drawing Timeline
      Drawing2D(currentPosition);

      com.forEach((element, index) => {
        if (element.getBoundingClientRect().top < 150) {
          // console.log('elment:', element.getBoundingClientRect().top + 150);
          element.classList.add('transition-active');
          element.classList.remove('transition-non');
          // processRef.current.style.height = `${
          //   element.getBoundingClientRect().top + 150
          // }px`;
        } else {
          element.classList.add('transition-non');
          element.classList.remove('transition-active');
        }
      });
    }

    return () => {};
  }, [currentPosition]);
  const Drawing2D = (position) => {
    const ctx = processRef.current.getContext('2d');
    if (!processRef.current.getContext) {
      return;
    }
    ctx.strokeStyle = `#ffe391`;
    ctx.lineWidth = 100;

    // Length to offset the dashes
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    // draw a line
    ctx.beginPath();
    ctx.moveTo(1, 0);
    ctx.lineTo(1, position);
    ctx.stroke();
  };
  return (
    <Layout
      breadcrumb
      title="About"
      img={`https://enijobs.com/wp-content/uploads/2018/10/logo_CV.jpg`}
    >
      <div className="row"></div>
      <div className="row about-content" style={{ overflowX: 'hidden' }}>
        <div
          className="side-time-line"
          style={{
            height: `${
              heightRef.current !== null ? heightRef.current.offsetHeight : ''
            }px`,
          }}
        >
          <canvas
            id="canvas"
            height={`${height}`}
            width="20"
            className="process-bar"
            style={{ height: `${height}px` }}
            ref={processRef}
          ></canvas>
        </div>
        <div
          // className="col-lg-8 col-md-10 mt-4 mb-4 main-content"
          className="main-content"
          ref={heightRef}
        >
          <h3>My CV </h3>
          {/** Main content Skill Progress */}
          <div className="main-skill list-group table-responsive transition-non">
            <h3>Experience</h3>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col" colSpan="1">
                    Time
                  </th>
                  <th scope="col" colSpan="2">
                    Role
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">
                    2018 - 2020 <br />
                    IBIE Company
                  </th>
                  <td>
                    Role: DESIGNER <br />
                    Description: 2d graphics designer, retouch image, maintain
                    website, design layout frontend website{' '}
                  </td>
                </tr>

                <tr>
                  <th scope="row">
                    2018 - 2020 <br />
                    NestGroup Startup
                  </th>
                  <td colSpan="2">
                    Role: FrontEnd <br />
                    Description: Build a frontend layout using HTML, CSS, JS
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    2020 - 2021 <br />
                    Freelancer
                  </th>
                  <td colSpan="2">
                    Role: Freelancer <br />
                    Description: Learn and work for custom frontend job using
                    html, css, js.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="main-skill list-group mt-4 table-responsive">
            <h3>My Skill</h3>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col" colSpan="1">
                    Name
                  </th>
                  <th scope="col" colSpan="2">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">FrontEnd</th>
                  <td>
                    <ul>
                      <li>HTMl</li>
                      <li>CSS, Bootstrap, MaterialUI</li>
                      <li>Javascript, Jquery</li>
                      <li>ReactJs, Redux</li>
                    </ul>
                  </td>
                </tr>

                <tr>
                  <th scope="row">Designer</th>
                  <td colSpan="2">
                    <ul>
                      <li>Image color Blend</li>
                      <li>Retouch</li>
                      <li>Painting</li>
                      <li>2D graphics</li>
                      <li>3D model</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="main-skill list-group mt-4 table-responsive">
            <h3>Education</h3>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col" colSpan="1">
                    {`Time & School`}
                  </th>
                  <th scope="col" colSpan="2">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">
                    2014 - 2017
                    <br />
                    Cao Thắng Technical colleges
                  </th>
                  <td colSpan="2">
                    <ul>
                      <li>Mechanical engineering</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    2017 - 2019
                    <br />
                    Bách Khoa University
                  </th>
                  <td colSpan="2">
                    <ul>
                      <li>Graphics Design</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="main-skill list-group mt-4 table-responsive">
            <h3>Project</h3>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col" colSpan="2">
                    {`Time & School aaaaaaaaaaaaaaaaaa`}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">
                    2014 - 2017
                    <br />
                    Cao Thắng Technical colleges
                  </th>
                  <td colspan="2">
                    <ul>
                      <li>Mechanical engineering</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    2017 - 2019
                    <br />
                    Bách Khoa University
                  </th>
                  <td colspan="2">
                    <ul>
                      <li>Graphics Design</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default About;
