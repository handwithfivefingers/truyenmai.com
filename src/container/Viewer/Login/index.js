import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import Layout from '../../../component/Viewer/Layout';
import {
  BsFillLockFill,
  BsFillPersonFill,
  BsForwardFill,
  BsCaretLeftFill,
} from 'react-icons/bs';
import '../Style/style.scss';
import { useDispatch, useSelector } from 'react-redux';
import { ATLogin, IsUserLogin } from '../../../action/auth.action';
import { Redirect } from 'react-router-dom';
function Login(props) {
  const [show, SetShow] = useState(false);
  const [email, Setemail] = useState('');
  const [password, SetPassword] = useState('');

  const [firstName, SetFirstname] = useState('');
  const [lastName, SetLastName] = useState('');

  const formref = useRef(null);
  const authenticate = useSelector((state) => state.auth.authenticate);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   if (!authenticate) {
  //     dispatch(IsUserLogin());
  //   }
  // }, []);
  const validation = () => {
    let validate = false;
    if (email.length < 3 && password.split().length < 6) {
      if (formref !== null && formref !== undefined) {
        Array.prototype.slice.call(formref.current).forEach((form, index) => {
          form.classList.add('was-validated');
          form.style.setProperty('border', '1px solid var(--bs-danger)');
        }, false);
        let feedback = formref.current.querySelectorAll('.invalid-tooltip');
        feedback.forEach((item) => {
          item.style.setProperty('display', 'block', 'important');
          item.style.setProperty('width', '100%');
          item.style.setProperty('background', 'transparent');
          item.style.setProperty('color', 'var(--bs-danger)');
          item.style.setProperty('left', '50%');
          item.style.setProperty('transform', 'translateX(-50%)');
        });
        validate = false;
      }
    } else {
      validate = true;
    }

    return validate;
  };
  const Login = (e) => {
    e.preventDefault();
    const user = {
      email,
      password,
    };
    const validate = validation();
    if (validate) {
      dispatch(ATLogin(user));
    } else {
      return;
    }
  };
  const Signup = (e) => {
    e.preventDefault();
    const validate = validation();
    if (validate) {
      alert('Sorry, Api Signup does not available');
    } else {
      return;
    }
  };
  const renderLoginForm = () => {
    let xhtml = null;
    xhtml = (
      <form
        className="row g-3 login-form form  needs-validation"
        style={{ padding: '5px' }}
        onSubmit={(e) => Login(e)}
        ref={formref}
        noValidate
      >
        <h3>Đăng nhập</h3>

        <div className="input-group mb-3 position-relative">
          <span className="input-group-text" id="basic-addon1">
            <BsFillPersonFill />
          </span>
          <input
            className="form-control login-input"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => Setemail(e.target.value)}
            required
          />
          <div class="invalid-tooltip">Email is not valid</div>
        </div>
        <div className="input-group mb-3 position-relative">
          <span class="input-group-text" id="basic-addon1">
            <BsFillLockFill />
          </span>
          <input
            className="form-control login-input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => SetPassword(e.target.value)}
            required
          />
          <div class="invalid-tooltip">Password must have min 6 character</div>
        </div>
        <div class="col-12">
          <div className="btn-group">
            <a
              className="submit-form "
              style={{ padding: '12px' }}
              onClick={() => SetShow(!show)}
            >
              Sign up
            </a>
            <button
              className="submit-form"
              type="submit"
              style={{ padding: '12px' }}
            >
              Access <BsForwardFill />
            </button>
          </div>
        </div>
      </form>
    );
    return xhtml;
  };

  const renderSignInForm = () => {
    let xhtml = null;
    xhtml = (
      <form
        className="form row g-3 signin-form g-3 needs-validation"
        style={{ padding: '5px' }}
        onSubmit={(e) => Signup(e)}
        ref={formref}
      >
        <h3>Đăng kí</h3>
        <span className="form-return" onClick={() => SetShow(!show)}>
          <BsCaretLeftFill />
        </span>
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
                // required
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
                // required
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
            // required
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
            // required
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
