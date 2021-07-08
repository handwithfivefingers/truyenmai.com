import React, { useState, useEffect } from 'react';
import Layout from '../../component/Layout';
import {
  BsFillLockFill,
  BsFillPersonFill,
  BsForwardFill,
} from 'react-icons/bs';
import './style.scss';
function Login(props) {
  const [state, setState] = useState('');
  const [username, SetUsername] = useState('');
  const [password, SetPassword] = useState('');
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <Layout breadcrumb title="Login">
      <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-12">
          <form className="list-group" style={{ padding: '5px' }}>
            <h3>Đăng nhập</h3>

            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                <BsFillPersonFill />
              </span>
              <input
                className="form-control"
                type="text"
                placeholder="User name"
                value={username}
                onChange={(e) => SetUsername(e.target.value)}
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
                onChange={(e) => SetPassword(e.target.value)}
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

export default Login;
