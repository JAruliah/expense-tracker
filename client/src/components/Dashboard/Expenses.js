import React from "react";
// Expense component change color of value depending on if it is positive or negative
function Expense(props){
    const localId = window.localStorage.getItem('id')
    const userId = JSON.parse(localId)

    function clickHandler(event){
        fetch(`http://localhost:3001/expenses/${userId._id}`, {
            method:'DELETE',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({_id: props.expenseId})
        })
        .then(response => { 
            window.location.reload()
        })
    }
    

    return (
        <div className="expense">
            {props.value < 0? <h3 style={{color:'red'}}>{props.value}</h3>:<h3 style={{color:'green'}}>{props.value}</h3>}
            <p>{props.description}</p>
            <button onClick={clickHandler}>Delete</button>
        </div>
    )
}


export default Expense