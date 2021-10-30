import React from "react";
import Header from "../components/Register/Header";
import Form from "../components/Register/Form";

function Register(props){
    return (
        <div className="signup">
            <Header />
            <Form handleLogin={props.handleLogin}/>
        </div>
    )
}

export default Register