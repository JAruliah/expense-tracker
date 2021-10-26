import React, {useState} from "react";

function AddExpense(props){
    const [value, setValue] = useState("")
    const [description, setDescription] = useState("")
    const localId = window.localStorage.getItem('id')
    const userId = JSON.parse(localId)

    //On submit POST data to api
    function submitHandler(event){
          event.preventDefault()
          fetch('http://localhost:3001/expenses', {
              method:'POST',
              headers:{
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify({_id: userId._id,value:value, description: description})
          })
          .then(response => {
              props.setExpenses( () => [...props.expenses, {_id: userId._id,value:value, description: description}])
            })
        
    }

    return(
        <form onSubmit={submitHandler}>
            <input placeholder="Value($$$)" type="number" name="value" value={value} onChange={(e) => setValue(e.target.value)} />
            <input placeholder="Description" type="text" name="description" value={description} onChange={(e) => setDescription(e.target.value)} />
            <button>Submit</button>
        </form>
    )
}


export default AddExpense