import React, { useState, useEffect } from 'react';
import Layout from '../../../component/Viewer/Layout';
import {
  BsFillLockFill,
  BsFillPersonFill,
  BsForwardFill,
  BsCaretLeftFill,
} from 'react-icons/bs';
import './style.scss';
import { useDispatch, useSelector } from 'react-redux';
import { ATLogin, IsUserLogin } from '../../../action/auth.action';
import { Redirect } from 'react-router-dom';
function Login(props) {
  const [show, SetShow] = useState(false);
  const [email, Setemail] = useState('');
  const [password, SetPassword] = useState('');

  const [firstName, SetFirstname] = useState('');
  const [lastName, SetLastName] = useState('');

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
  const Signup = (e) => {
    e.preventDefault();
    alert('Sorry, Api Signup does not available');
  };
  const renderLoginForm = () => {
    let xhtml = null;
    xhtml = (
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
        <div className="btn-group">
          <button
            className="submit-form"
            style={{ padding: '12px' }}
            onClick={() => SetShow(!show)}
          >
            Sign up <BsForwardFill />
          </button>
          <button
            className="submit-form"
            type="submit"
            style={{ padding: '12px' }}
          >
            Access <BsForwardFill />
          </button>
        </div>
      </form>
    );
    return xhtml;
  };
  const renderSignInForm = () => {
    let xhtml = null;
    xhtml = (
      <form
        className="list-group sign-in"
        style={{ padding: '5px' }}
        onSubmit={(e) => Signup(e)}
      >
        <span className="form-return" onClick={() => SetShow(!show)}>
          <BsCaretLeftFill />
        </span>
        <h3>Đăng kí</h3>
        <div className="row g-2">
          <div class="col-md">
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                <BsFillPersonFill />
              </span>
              <input
                className="form-control login-input"
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => SetFirstname(e.target.value)}
              />
            </div>
          </div>
          <div class="col-md">
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                <BsFillPersonFill />
              </span>
              <input
                className="form-control login-input"
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => SetLastName(e.target.value)}
              />
            </div>
          </div>
        </div>
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
        <div className="btn-group">
          <button
            className="submit-form"
            style={{ padding: '12px' }}
            type="submit"
          >
            Sign up <BsForwardFill />
          </button>
        </div>
      </form>
    );
    return xhtml;
  };
  if (authenticate) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <Layout breadcrumb title="Login">
      <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-12">
          {!show ? renderLoginForm() : renderSignInForm()}
        </div>
      </div>
    </Layout>
  );
}

export default Login;
