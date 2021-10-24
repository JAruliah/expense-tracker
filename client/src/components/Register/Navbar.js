import React from "react";
import { Link } from "react-router-dom";

function Navbar(){
    return (
        <nav>
            <ul>
                <Link to="/">Login</Link>
                <Link to="/register">Signup</Link>
            </ul>
        </nav>
    )
}


export default Navbar