import React, {useState}from "react";
import Login from './pages/Login'
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard"
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import NotFoundPage from './pages/404'
import ProtectedRoute from "./components/ProtectedRoute";
import Unauthorized from "./components/Unauthorized";
import './styles/css/App.css'

function App() {
  // Set auth value 
  const auth = window.localStorage.getItem('auth')
  let setAuth = (auth === 'true')
  const [logged, setLogged] = useState(setAuth)
  //function to handle login
  const handleLogin = e => {
    setLogged(true)
    window.localStorage.setItem('auth',JSON.stringify(true));
  }
  //function to handle logout
  const handleLogout = e => {
    setLogged(false);
    localStorage.removeItem('id');
    window.localStorage.setItem('auth',JSON.stringify(false));
    window.location.href="/"
    }

  return (
    <div className="container">
      <Router>
        <Switch>
        <Route exact path="/register">
          {logged ? <Redirect to="/dashboard" /> :  <Route exact path ="/register" handleLogin={handleLogin} render={props => <Register {...props} handleLogin={handleLogin}/>}/> }
        </Route>

        <Route exact path="/">
          {logged ? <Redirect to="/dashboard" /> :  <Route exact path ="/" handleLogin={handleLogin} render={props => <Login {...props} logged={logged.toString()} handleLogin={handleLogin}/>}/> }
        </Route>
          <ProtectedRoute exact path ="/dashboard" logged={logged} handleLogout={handleLogout} component ={Dashboard} />
          <Route eact path="/404" component={NotFoundPage} />
          <Route exact path='/unauthorized' component={Unauthorized} />
          <Redirect to="/404" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
