import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import Layout from '../../../component/Viewer/Layout';
import ReactHtmlParser from 'react-html-parser';
import '../Style/style.scss';
function About(props) {
  const [height, setHeight] = useState(null);
  const heightRef = useRef(null);
  const processRef = useRef(null);
  const parentProcessRef = useRef(null);
  const [currentPosition, setPosition] = useState(0);
  const [width, setwidth] = useState(null);

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
        '<ul><li>Role: DESIGNER</li><li>Description: 2d graphics designer, retouch image, maintain website, design layout frontend website</li></ul>',
        '<ul><li>Role: FrontEnd</li><li>Description: Build a frontend layout using HTML, CSS, JS</li></ul>',
        '<ul><li>Role: Freelancer</li><li>Description: Learn and work for custom frontend job using html, css, js</li></ul>',
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
      name: 'Project 1',
      header: ['Flipkart'],
      th: ['Description', 'Role', 'Technology Used'],
      td: [
        'Clone Ecommerce website, create dash board and more backend',
        'Frontend Developer',
        '<ul>- Frontend<li>Reactjs, Redux, Css, Axios </li>- Dashboard<li>Reactjs, Redux, Bootstrap, Axios</li>- Backend<li>Nodejs, Express, Mongoose, JWT, Multer</li></ul>',
      ],
    },
  ];

  // useLayoutEffect(() => {
  //   function updatePosition() {
  //     setPosition(window.pageYOffset);
  //   }
  //   window.addEventListener('scroll', updatePosition);
  //   updatePosition();
  //   return () => window.removeEventListener('scroll', updatePosition);
  // }, []);

  // useEffect(() => {
  //   // console.log(
  //   //   'Componnent:',
  //   //   heightRef.current.offsetHeight,
  //   //   'Height Display',
  //   //   window.innerHeight,
  //   //   'Full page Height',
  //   //   document.body.getBoundingClientRect().height,
  //   //   'Current Top:',
  //   //   currentPosition,
  //   //   'Component - Top:',
  //   //   heightRef.current.getBoundingClientRect().top,
  //   // );
  //   if (window.outerWidth > 0) {
  //     setwidth(window.outerWidth);
  //   }
  //   // console.log(
  //   //   'Height Display:',
  //   //   window.innerHeight,
  //   //   'Current Top:',
  //   //   currentPosition,
  //   //   'Center View: ',
  //   //   window.innerHeight / 2 + currentPosition
  //   // );
  //   if (heightRef.current.offsetHeight > 0) {
  //     let com = heightRef.current.querySelectorAll('.main-skill');
  //     let span = parentProcessRef.current.querySelectorAll('span');
  //     setHeight(heightRef.current.offsetHeight);
  //     Drawing2D(getBodyScrollPercent());
  //     com.forEach((element, index) => {
  //       if (width > 769) {
  //         if (getBodyScrollPercent() / 23 >= index + 1) {
  //           element.classList.add('transition-active');
  //           span[index + 1].classList.add('span-active');
  //         } else {
  //           element.classList.remove('transition-active');
  //           span[index + 1].classList.remove('span-active');
  //         }
  //       } else {
  //         if (width < 769) {
  //           // if (getBodyScrollPercent() / 20 >= index + 1) {
  //           //   element.classList.add('transition-active');
  //           // } else {
  //           //   element.classList.remove('transition-active');
  //           // }
  //           if (element.offsetTop < currentPosition + 120) {
  //             element.classList.add('transition-active');
  //           } else {
  //             element.classList.remove('transition-active');
  //           }
  //         }
  //       }
  //     });
  //   }
  //   return () => {};
  // }, [currentPosition]);
  // function getBodyScrollPercent() {
  //   var h = document.documentElement,
  //     b = document.body,
  //     st = 'scrollTop',
  //     sh = 'scrollHeight';
  //   return ((h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight)) * 100;
  // }
  // const Drawing2D = (percent, index = 4) => {
  //   const ctx = processRef.current.getContext('2d');

  //   if (!processRef.current.getContext) {
  //     return;
  //   }
  //   let height =
  //     document.getElementsByClassName('about-content')[0].clientHeight;
  //   ctx.strokeStyle = `#FFC75F`;
  //   ctx.lineWidth = 100;
  //   // Length to offset the dashes
  //   ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  //   // draw a line
  //   ctx.beginPath();
  //   ctx.moveTo(1, 0);
  //   ctx.lineTo(1, (height / 100) * (percent));
  //   ctx.stroke();
  // };
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
            className="main-skill list-group mt-5 table-responsive"
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
      style="Download"
    >
      <div
        className="row about-content"
        style={{ overflowX: 'hidden', padding: '50px 0' }}
      >
        {/* <div
          className="side-time-line"
          style={{
            height: `${
              heightRef.current !== null ? heightRef.current.offsetHeight : ''
            }px`,
          }}
          ref={parentProcessRef}
        >
          <canvas
            id="canvas"
            height={`${height}`}
            width="10"
            className="process-bar"
            style={{ height: `${height}px` }}
            ref={processRef}
          ></canvas>
          <span className="span-active"></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div> */}

        <div className="main-content" ref={heightRef}>
          <h3>My Infomation</h3>
          {/** Main content Skill Progress */}
          {renderTable()}
        </div>
      </div>
    </Layout>
  );
}

export default About;
