import React, { useState, useEffect } from 'react';
import Layout from '../../component/Layout';
import './style.scss';
function About(props) {
  const [state, setState] = useState('');

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <Layout breadcrumb title="About">
      <div className="row">
        <div className="col-lg-4 col-md-4 col-sm-12">
          {/** Side Bar Skill Progress */}
          <div className="side-skill">
            <ul className="list-group">
              <h3>Skill</h3>
              <li className="list-group-item">
                <a>Photoshop</a>
              </li>
              <li className="list-group-item">
                <a>Illustrator</a>
              </li>
              <li className="list-group-item">
                <a>Sketchup 3D</a>
              </li>
              <li className="list-group-item">
                <a>AutoCad</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-8 col-md-8 col-sm-12 ">
          {/** Main content Skill Progress */}
          <div className="main-skill list-group table-responsive">
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
