import React from "react";
import Login from './pages/Login'
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard"
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import NotFoundPage from './pages/404'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path ="/" component ={Login} />
          <Route exact path ="/register" component ={Register} />
          <Route exact path ="/dashboard" component ={Dashboard} />
          <Route eact path="/404" component={NotFoundPage} />
          <Redirect to="/404" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
