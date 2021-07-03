import React, { useState, useEffect } from 'react';
import Layout from '../../component/Layout';
import {
  BsFillLockFill,
  BsFillPersonFill,
  BsForwardFill,
  BsGeoAlt,
  BsEnvelopeFill,
} from 'react-icons/bs';

function Contact(props) {
  const [state, setState] = useState('');
  const [username, SetUsername] = useState('');
  const [password, SetPassword] = useState('');
  useEffect(() => {
    return () => {};
  }, []);
  const Information = [
    {
      name: 'Address',
      icon: <BsGeoAlt />,
      description:
        // '606/10/1 Quốc lộ 13, P.Hiệp Bình Phước, Thủ Đức, Tp.Hồ Chí Minh',
        'nullllll l'
    },
    {
      name: 'Email',
      icon: <BsEnvelopeFill />,
      description: 'truyenmai95@gmail.com',
    },
  ];
  return (
    <Layout breadcrumb title="Contact">
      <div className="row">
        <div className="col-lg-8 col-md-6 col-sm-12 mt-4">
          <div className="list-group">
            <ul
              style={{
                padding: '0.25rem 0.5rem',
                listStyleType: 'none',
                textAlign: 'left',
              }}
            >
              {Information.map((item, index) => {
                return (
                  <li>
                    <h5 className="card-title">
                      <span>{item.icon}</span> {item.name}
                    </h5>
                    <p> {item.description} </p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 mt-4">
          <form
            className="list-group text-left"
            style={{ padding: '0.25rem 0.5rem', listStyleType: 'none' }}
          >
            <h3>Liên hệ</h3>

            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                <BsFillPersonFill />
              </span>
              <input
                className="form-control"
                type="text"
                placeholder="User name"
                value={username}
              />
            </div>
            <div className="input-group mb-3">
              <span class="input-group-text" id="basic-addon1">
                <BsFillLockFill />
              </span>
              <input
                className="form-control"
                type="password"
                placeholder="Password"
                value={password}
              />
            </div>
            <button type="submit" style={{ padding: '12px' }}>
              Access <BsForwardFill />
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
}

export default Contact;
