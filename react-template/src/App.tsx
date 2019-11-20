import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import logo from '@/assets/images/logo.svg';
import './App.css';

const Home = lazy(() => import('./routes/home'));
const About = lazy(() => import('./routes/about'));

// 这就是函数组件, React.SFC 已废弃
const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Router>
          <div>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
          </div>
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
            </Switch>
          </Suspense>
        </Router>
      </header>
    </div>
  );
}

export default App;
