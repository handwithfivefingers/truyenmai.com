import React, { useState, useEffect } from 'react';
// import AdminLayout from '../../../component/Dashboard/Layout';
// import { ADM_Fetch_Post, fetch_categories } from '../../../action';
import { IsUserLogin } from '../../../action';

import { useDispatch, useSelector } from 'react-redux';
import { Line } from 'react-chartjs-2';
let date = new Date();
const data = {
  labels: [
    `${date.getDay() - 3}`,
    `${date.getDay() - 2}`,
    `${date.getDay() - 1}`,
    `${date.getDay()}`,
    `${date.getDay() + 1}`,
    `${date.getDay() + 2}`,
    `${date.getDay() + 3}`,
  ],
  datasets: [
    {
      label: 'Số lượt ghé thăm Website',
      data: [51, 19, 32, 115, 152, 73, 99],
      fill: false,
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgba(255, 99, 132, 0.2)',
    },
  ],
};
const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

function AdminHomePage(props) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user.user);
  return (
    <>
      {/* {process.env.REACT_APP_API} <br /> */}
      <h1 className="dashboard component p-5 rounded-3 m-3" >
        {`Hello ${user ? user.fullName : ''}`}
      </h1>

      <div className="row" style={{ padding: '20px' }}>
        <div className="col-8">
          <div class="dashboard component ">
            <Line data={data} options={options} />
          </div>
        </div>
        <div className="col-4">
          <div class="dashboard component ">
            <h2>Information</h2>
            <ul style={{ textAlign: 'left' }}>
              <li>
                Your Id: <b>{user ? user._id : ''}</b>
              </li>
              <li>
                Your first Name: <b>{user ? user.firstName : ''}</b>
              </li>
              <li>
                Your last Name: <b>{user ? user.lastName : ''}</b>
              </li>
              <li>
                Your Email: <b>{user ? user.email : ''}</b>
              </li>
              <li>
                Your Role: <b>{user ? user.role : ''}</b>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminHomePage;
