import React, { useState, useEffect } from 'react';
import Layout from '../../../component/Viewer/Layout';
import {
  BsFillLockFill,
  BsFillPersonFill,
  BsForwardFill,
} from 'react-icons/bs';
import './style.scss';
import { useDispatch, useSelector } from 'react-redux';
import { ATLogin, IsUserLogin } from '../../../action/auth.action';
import { Redirect } from 'react-router-dom';
function Login(props) {
  const [email, Setemail] = useState('');
  const [password, SetPassword] = useState('');
  const authenticate = useSelector((state) => state.auth.authenticate);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!authenticate) {
      dispatch(IsUserLogin());
    }
  }, []);
  const Login = (e) => {
    e.preventDefault();
    const user = {
      email,
      password,
    };
    dispatch(ATLogin(user));
  };
  if (authenticate) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <Layout breadcrumb title="Login">
      <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-12">
          <form
            className="list-group"
            style={{ padding: '5px' }}
            onSubmit={(e) => Login(e)}
          >
            <h3>Đăng nhập</h3>

            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                <BsFillPersonFill />
              </span>
              <input
                className="form-control login-input"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => Setemail(e.target.value)}
              />
            </div>
            <div className="input-group mb-3">
              <span class="input-group-text" id="basic-addon1">
                <BsFillLockFill />
              </span>
              <input
                className="form-control login-input"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => SetPassword(e.target.value)}
              />
            </div>
            <button className="submit-form" type="submit" style={{ padding: '12px' }}>
              Access <BsForwardFill />
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
}

export default Login;
