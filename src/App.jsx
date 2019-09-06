import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';


import { Button } from 'semantic-ui-react';
import Login from './pages/Login';
const App = () => {
  const [counter, setCounter] = useState(0);

  function Index() {
    return <Login/>;
  }
  function Users() {
    return <h2>Users</h2>;
  }
  function test() {
    setCounter(counter + 1);
    console.log('test');
  }
  return (
    <React.Fragment>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home1</Link>
              </li>
              <li>
                <Link to="/about/">About1</Link>
              </li>
              <li>
                <Link to="/users/">Users1</Link>
              </li>
              
            </ul>
          </nav>

          <Route path="/" exact component={Index} />
          <Route path="/users/" component={Users} />
        </div>
      </Router>

    </React.Fragment>
  );

}

export default App;
