import React, {useState}from "react";
import Login from './pages/Login'
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard"
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import NotFoundPage from './pages/404'
import ProtectedRoute from "./components/ProtectedRoute";
import Unauthorized from "./components/Unauthorized";

function App() {
  // Set auth value 
  const auth = window.localStorage.getItem('auth')
  const [logged, setLogged] = useState(auth)
  //function to handle login
  const handleLogin = e => {
    e.preventDefault()
    setLogged(true)
    window.localStorage.setItem('auth',JSON.stringify(true));
  }
  //function to handle logout
  const handleLogout = e => {
    e.preventDefault();
    setLogged(false);
    window.localStorage.setItem('auth',JSON.stringify(false));
  }

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path ="/" handleLogin={handleLogin} render={props => <Login {...props} logged={logged.toString()} handleLogin={handleLogin}/>}/>
          <Route exact path ="/register" component ={Register} />
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
