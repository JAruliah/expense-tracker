import React from "react";
import {Link} from 'react-router-dom'

function Login(props){
    return (
        <div>
            <h1>This is the Login page</h1>
            <Link to="/dashboard">View Dashboard</Link>
            <Link to="/register">Register</Link>
            <p>Logged in status: {props.logged}</p>
            <button onClick={props.handleLogin}>Log in</button>
        </div>
    )
}

export default Login