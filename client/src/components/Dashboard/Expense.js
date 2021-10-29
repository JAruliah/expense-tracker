import React from "react";
// Expense component change color of value depending on if it is positive or negative
function Expense(props){
    const localId = window.localStorage.getItem('id')
    const userId = JSON.parse(localId)

    function clickHandler(event){
        fetch(`https://wheres-my-money-server.herokuapp.com/expenses/${userId._id}`, {
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
            {props.value < 0? <h4 style={{color:'#FF4B4B'}}>${props.value}</h4>:<h4 style={{color:'#00AD35'}}>${props.value}</h4>}
            <p>{props.description}</p>
            <button onClick={clickHandler} className="delete">X</button>
        </div>
    )
}


export default Expense