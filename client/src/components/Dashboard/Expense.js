import React, {useState} from "react";
// Expense component change color of value depending on if it is positive or negative
function Expense(props){
    const localId = window.localStorage.getItem('id')
    const userId = JSON.parse(localId)
    const [value, setValue] = useState(props.value)
    const [description, setDescription] = useState(props.description)
    const [edit, setEdit] = useState(false)

    function clickHandler(event){
        fetch(`${process.env.REACT_APP_BASE_URL}expenses/${userId._id}`, {
            method:'DELETE',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({_id: props.expenseId})
        })
        .then(response => response.json())
        .then(data => {
            const newExpenses = props.expenses.filter((item) => item._id !== props.expenseId);
            props.setExpenses(newExpenses)
        })
        .catch(err => console.log(err))
    }

    function editHandler(event){
        if (edit === true){
            console.log('update database')
            setEdit(!edit)
        }
        else{
            setEdit(!edit)
        }
    }
    

    return (
        <div className="expense">
            {edit === true? <input value={value} type="number" onChange={(event) => {if(event.target.value > 9999999999){return}else{setValue(event.target.value)}}}></input>:value < 0? <h4 style={{color:'#FF4B4B'}}>${value}</h4>:<h4 style={{color:'#00AD35'}}>${value}</h4>}
            
            {edit === true? <input value={description} type="text" maxLength="30" onChange={(event) => {setDescription(event.target.value)}}></input>:<p>{description}</p>}
            <button onClick={editHandler} >Edit</button>
            <button onClick={clickHandler} className="delete">X</button>
        </div>
    )
}


export default Expense