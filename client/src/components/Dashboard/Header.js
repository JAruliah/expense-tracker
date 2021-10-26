import React from "react";

function Header(props){
    
    console.log(props.expenses)
    return (
        <header>
            {props.loading ? <h1>Loading</h1>: <h1> {`Hello ${props.userName}`}</h1>}

            
        </header>
    )
}


export default Header