import React from "react";
import Header from "../components/Login/Header";
import Form from "../components/Login/Form";

function Login(props){
    return (
        <div className="login">
            <Header />
            <Form handleLogin={props.handleLogin}/>
        </div>
    )
}

export default Login