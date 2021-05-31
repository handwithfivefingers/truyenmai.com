import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Homepage from './container/HomePage';
import Contact from './container/Contact';
import Blog from './container/Blog';
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/contact" component={Contact} />
          <Route path="/blog" component={Blog} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
