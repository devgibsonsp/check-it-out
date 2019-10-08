import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Button } from 'semantic-ui-react';
import Login from './pages/Login/Login';
import Main from './pages/Main/Main';
import RegisterUser from './pages/RegisterUser/RegisterUser';
import './styles/main.css';

const App = () => {
  return (
    <React.Fragment>
      <Router>
          <Route 
            path="/" 
            exact 
            render={ (props) => <Login {...props} />}
          />
          <Route path="/main/" component={Main} />
          <Route path="/register/" component={RegisterUser} />
      </Router>
    </React.Fragment>
  );
}

export default App;
