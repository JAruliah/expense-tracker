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
    //Handle Edits
    function editHandler(event){
        event.preventDefault()
        if (edit === true){
            console.log('update database')
            fetch(`${process.env.REACT_APP_BASE_URL}expenses/${userId._id}`, {
                method:'PATCH',
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({_id:props.expenseId, value:value, description:description})  
            })
            .then(response => {
                let updatedExpenses = props.expenses.map(item => 
                {
                if (item._id === props.expenseId){
                    return {...item, _id:props.expenseId, value: value, description:description};
                }
                    return item; 
                });

                props.setExpenses(updatedExpenses); 
                
            })
            .catch(err => console.log(err))
              setEdit(!edit)
        }

        else{
            setEdit(!edit)
        }
    }
    

    return (
        <div className="expense">
            <form onSubmit={editHandler} className="edit-form">
                {edit === true? <input value={value} className="edit-field" type="number" min="-999999" max="999999" onChange={(event) => {setValue(event.target.value)}} required/> :value < 0? <h4 style={{color:'#FF4B4B'}}>${value}</h4>:<h4 style={{color:'#00AD35'}}>${value}</h4>}
                {edit === true? <input className="edit-field" value={description} type="text" maxLength="30" onChange={(event) => {setDescription(event.target.value)}} /> :<p>{description}</p>}
                {edit === false? <button className="edit" type="submit" >Edit</button> :<button className="save-edit" type="submit" >Save</button> }    
            </form>
            <button onClick={clickHandler} className="delete">X</button>
        </div>
    )
}


export default Expense