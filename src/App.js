import './App.css';
import React, { useEffect, useContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { FetchBlogPost } from './action';
import { FrontEndRoutes } from './constant/route';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(FetchBlogPost());
  }, []);
  return (
      <div className="App">
        <Router>
          <Switch>
            {FrontEndRoutes.map((route, index) => {
              return (
                <Route
                  key={index}
                  path={route.path}
                  component={route.component}
                  exact={route.exact}
                />
              );
            })}
          </Switch>
        </Router>
      </div>
  );
}

export default App;
