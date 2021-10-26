import React from "react";

function Expense(props){
    console.log(props)
    return (
        <div>
            
            <h3>{props.value}</h3>

            <p>{props.description}</p>
        </div>
    )
}


export default Expense