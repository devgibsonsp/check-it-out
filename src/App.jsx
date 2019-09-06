import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import { Button } from 'semantic-ui-react';
import Login from './pages/Login';
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
          <Route path="/users/" component={Users} />
      </Router>
    </React.Fragment>
  );

}

export default App;
