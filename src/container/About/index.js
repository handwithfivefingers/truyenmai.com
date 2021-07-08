import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import Layout from '../../component/Layout';
import ReactHtmlParser from 'react-html-parser';
import './style.scss';
function About(props) {
  const [height, setHeight] = useState(null);
  const heightRef = useRef(null);
  const processRef = useRef(null);
  const [currentPosition, setPosition] = useState(0);
  const Table = [
    {
      name: 'Experience',
      header: ['Time', 'Description'],
      th: [
        '2018 - 2020 <br/> IBIE Company',
        '2018 - 2020 <br/>NestGroup Startup',
        '2020 - 2021<br/>Freelancer',
      ],
      td: [
        'Role: DESIGNER<br/>Description: 2d graphics designer, retouch image, maintain website, design layout frontend website',
        'Role: FrontEnd<br/>Description: Build a frontend layout using HTML, CSS, JS',
        'Role: Freelancer<br/>Description: Learn and work for custom frontend job using html, css, js.',
      ],
    },
    {
      name: 'My Skill',
      header: ['Name', 'Description'],
      th: ['FrontEnd', 'Designer'],
      td: [
        '<ul><li>HTMl</li><li>CSS, Bootstrap, MaterialUI</li><li>Javascript, Jquery</li><li>ReactJs, Redux</li></ul>',
        '<ul><li>Image color Blend</li><li>Retouch</li><li>Painting</li><li>2D graphics</li><li>3D model</li></ul>',
      ],
    },
    {
      name: 'Education',
      header: ['Time & School', 'Description'],
      th: [
        '2014 - 2017<br>Cao Thắng Technical colleges',
        '2017 - 2019<br>Bách Khoa University',
      ],
      td: [
        '<ul><li>Mechanical engineering</li></ul>',
        '<ul><li>Graphics Design</li></ul>',
      ],
    },
    {
      name: 'Project',
      header: ['Project Name'],
      th: [
        '2018 - 2020 <br/> IBIE Company',
        '2018 - 2020 <br/>NestGroup Startup',
        '2020 - 2021<br/>Freelancer',
      ],
      td: [
        'Role: DESIGNER<br/>Description: 2d graphics designer, retouch image, maintain website, design layout frontend website',
        'Role: FrontEnd<br/>Description: Build a frontend layout using HTML, CSS, JS',
        'Role: Freelancer<br/>Description: Learn and work for custom frontend job using html, css, js.',
      ],
    },
  ];
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

      // console.log(
      //   '%',
      //   getBodyScrollPercent()
      // );
      // Drawing2D((window.innerHeight / 2 + currentPosition) - 300);
      Drawing2D(getBodyScrollPercent());

      com.forEach((element, index) => {
        if (element.getBoundingClientRect().top < 150) {
          if (element.getBoundingClientRect().top + 150 > 0) {
          }
          // console.log('elment:', element.getBoundingClientRect().top + 150);
          element.classList.add('transition-active');
          element.classList.remove('transition-non');
        } else {
          element.classList.add('transition-non');
          element.classList.remove('transition-active');
        }
      });
    }

    return () => {};
  }, [currentPosition]);

  const getScrollPercent = (off, off2) => {
    let a =
      (100 * (window.innerHeight / 2 + currentPosition)) / (off + off2 + 150);
    // console.log(a);
    return a;
  };

  function getBodyScrollPercent() {
    var h = document.documentElement,
      b = document.body,
      st = 'scrollTop',
      sh = 'scrollHeight';
    return ((h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight)) * 100;
  }
  const Drawing2D = (percent) => {
    const ctx = processRef.current.getContext('2d');
    if (!processRef.current.getContext) {
      return;
    }
    let height =
      document.getElementsByClassName('about-content')[0].clientHeight;
    ctx.strokeStyle = `#ffe391`;
    ctx.lineWidth = 100;
    // Length to offset the dashes
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    // draw a line
    ctx.beginPath();
    ctx.moveTo(1, 0);
    ctx.lineTo(1, (height / 100) * percent);
    ctx.stroke();
  };
  // const clearCanvas = () => {
  //   const ctx = processRef.current.getContext('2d');
  //   if (!processRef.current.getContext) {
  //     return;
  //   }
  //   ctx.clearRect(0, 0, (ctx.canvas.width = 0), (ctx.canvas.height = 0));
  // };
  const renderTable = () => {
    let xhtml = null;
    if (Table && Table.length > 0) {
      xhtml = Table.map((item, index) => {
        return (
          <div
            className="main-skill list-group mt-5 table-responsive transition-non"
            key={index}
          >
            <h3>{item.name}</h3>
            <table className="table">
              <thead>
                <tr>{renderHeaderList(item.header)}</tr>
              </thead>
              <tbody>{renderBodyList(item.th, item.td)}</tbody>
            </table>
          </div>
        );
      });
    }
    return xhtml;
  };
  const renderBodyList = (name, desc) => {
    let xhtml = null;
    if (name && name.length > 0) {
      xhtml = name.map((item, index) => {
        return (
          <tr key={item}>
            <th scope="row">{ReactHtmlParser(item)}</th>
            <td>{ReactHtmlParser(desc[index])}</td>
          </tr>
        );
      });
    }
    return xhtml;
  };
  const renderHeaderList = (tableHeader) => {
    let xhtml = null;
    if (tableHeader.length > 1) {
      xhtml = tableHeader.map((item) => {
        return (
          <th scope="col" colSpan="1" key={item}>
            {item}
          </th>
        );
      });
    } else {
      xhtml = tableHeader.map((item) => {
        return (
          <th scope="col" colSpan="2">
            {item}
          </th>
        );
      });
    }
    return xhtml;
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
            width="10"
            className="process-bar"
            style={{ height: `${height - 250}px` }}
            ref={processRef}
          ></canvas>
        </div>
        <div className="main-content" ref={heightRef}>
          <h3>My CV </h3>
          {/** Main content Skill Progress */}
          {renderTable()}
          {/* <div className="main-skill list-group table-responsive transition-non">
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
          </div> */}
        </div>
      </div>
    </Layout>
  );
}

export default About;
