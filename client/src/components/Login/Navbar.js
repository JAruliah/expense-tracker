import React from "react";
import { Link } from "react-router-dom";

function Navbar(){
    return (
        <nav>
            <ul>
                <li className="login"><Link to="/">Login</Link></li>
                <li className="signup"><Link to="/register">Signup</Link></li>
            </ul>
        </nav>
    )
}


export default Navbar