import React from "react";
import Header from "../components/Login/Header";
import Form from "../components/Login/Form";

function Login(props){
    return (
        <div>
            <Header />
            <Form handleLogin={props.handleLogin}/>
            <p>Logged in status: {props.logged}</p>
        </div>
    )
}

export default Login