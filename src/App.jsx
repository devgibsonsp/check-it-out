import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Button } from 'semantic-ui-react';
import Login from './pages/Login';
import Main from './pages/Main';
import './styles/main.css';
const App = () => {

  function Users() {
    return <h2>Users</h2>;
  }
  return (
    <React.Fragment>
      <Router>
          <Route 
            path="/" 
            exact 
            render={ (props) => <Login {...props} />}
          />
          <Route path="/main/" component={Main} />
      </Router>
    </React.Fragment>
  );

}

export default App;
