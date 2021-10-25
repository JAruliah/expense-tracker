import React from "react";

function Dashboard(props){
    return (
        <div>
            <h1>This is the Dashboard</h1>
            <button onClick={props.handleLogout}>Log Out</button>
        </div>
    )
}

export default Dashboard