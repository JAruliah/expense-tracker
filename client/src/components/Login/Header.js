import React from "react";
import Navbar from "./Navbar";

function Header(){
    return (
        <header>
            <div className="logo">
             <img src="img/logo.jpg" alt="logo" width="130" height="130"/>
             </div>
            <h1>Welcome</h1>
            <Navbar />

        </header>
    )
}


export default Header