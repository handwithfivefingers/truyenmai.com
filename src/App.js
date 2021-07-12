import './App.css';
import React, { useState, useEffect, useContext, createContext } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { AdminRoutes, FrontEndRoutes } from './constant/route';
import { UserProvider } from './helper/Context';
import { useDispatch, useSelector } from 'react-redux';
// import LoadingScreen from './helper/LoadingScreen';
import UserRoute from './component/Viewer/UserRoute';
import AdminRoute from './component/Dashboard/AdminRoute';
import { FetchBlogPost } from './action';
import NotFound from './container/Viewer/NotFound';
function App() {
  // Pagination Context
  const [pagination, Setpagination] = useState('1');
  const SetPagi = (val) => {
    Setpagination(val);
  };
  const [expand, Setexpanded] = useState(true);
  // Themesmode Context
  const setExpand = () => {
    Setexpanded(!expand);
  };
  const [thememode, Setthememode] = useState(false);
  const setThememode = () => {
    Setthememode(!thememode);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(FetchBlogPost());
  }, []);

  const loading = useSelector((state) => state.blog.loading);
  // console.log(loading);
  return (
    <UserProvider
      value={{
        thememode,
        setThememode,
        pagination,
        SetPagi: (val) => SetPagi(val),
        expand,
        expanded: () => Setexpanded(!expand),
      }}
    >
      <div className="App">
        {/* {loading ? <LoadingScreen /> : ''} */}
        <Router>
          <Switch>
            {FrontEndRoutes.map((route) => {
              return (
                <UserRoute
                  key={route.path}
                  path={route.path}
                  component={route.component}
                  exact={route.exact}
                />
              );
            })}
            {/* <UserRoute /> */}
            {AdminRoutes.map((route) => {
              return (
                <AdminRoute
                  key={route.path}
                  path={route.path}
                  component={route.component}
                  exact={route.exact}
                />
              );
            })}
            <Route path="*" component={() => <NotFound />} exact={true} />
            {/* {renderUserRoute()} */}
          </Switch>
        </Router>
      </div>
    </UserProvider>
  );
}

export default App;
