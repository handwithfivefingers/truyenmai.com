import './App.css';
import React, { useState, useEffect, useContext, createContext } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { FrontEndRoutes } from './constant/route';
import { UserProvider } from './helper/Context';
import { useSelector } from 'react-redux';
import LoadingScreen from './helper/LoadingScreen';
import UserRoute from './component/UserRoute';
function App() {
  // Pagination Context
  const [pagination, Setpagination] = useState('1');
  const SetPagi = (val) => {
    Setpagination(val);
  };
  // Themesmode Context
  const [thememode, Setthememode] = useState(false);
  const setThememode = () => {
    Setthememode(!thememode);
  };
  const loading = useSelector((state) => state.blog.loading);
  console.log(loading);
  // const renderUserRoute = () => {
  //   let xhtml = null;
  //   if (FrontEndRoutes.length > 0) {
  //     xhtml = FrontEndRoutes.map((route) => {
  //       return (
  //         <UserRoute
  //           key={route.path}
  //           component={route.component}
  //           path={route.path}
  //           exact={route.exact}
  //         />
  //       );
  //     });
  //   }
  //   return xhtml;
  // };
  return (
    <UserProvider
      value={{
        thememode,
        setThememode,
        pagination,
        SetPagi: (val) => SetPagi(val),
      }}
    >
      <div className="App">
        {loading ? <LoadingScreen /> : ''}
      
          <Router>
            <Switch>
              {FrontEndRoutes.map((route) => {
                return (
                  <Route
                    key={route.path}
                    path={route.path}
                    component={route.component}
                    exact={route.exact}
                  />
                );
              })}
              {/* {renderUserRoute()} */}
            </Switch>
          </Router>
      </div>
    </UserProvider>
  );
}

export default App;
