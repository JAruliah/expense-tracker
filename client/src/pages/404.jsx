import React from "react";
import {Link} from "react-router-dom";

function NotFound(){
    return (
        <div className="not-found">
            <h1>Uh oh, this page was not found</h1>
            <p><Link to='/'>Back to Home</Link></p>
        </div>
    )
}

export default NotFound