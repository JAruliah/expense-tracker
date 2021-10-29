import React, {useState} from "react";

function AddExpense(props){
    const [value, setValue] = useState("")
    const [description, setDescription] = useState("")
    const localId = window.localStorage.getItem('id')
    const userId = JSON.parse(localId)

    //On submit POST data to api
    function submitHandler(event){
          event.preventDefault()
          fetch(`https://wheres-my-money-server.herokuapp.com/expenses/${userId._id}`, {
              method:'POST',
              headers:{
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify({value:value, description: description})
          })
          .then(response => {
              window.location.reload()
            //   props.setExpenses( () => [...props.expenses, {value:value, description: description}])
            })
        
    }


    return(
        <form onSubmit={submitHandler} className="add-new-expense">
            <h4>Use (-) to show expense, and (+) to show income</h4>
            <label>Value($$$)
            <input  type="number" name="value" value={value} onChange={(e) => {
                if (e.target.value > 9999999999){
                    return
                }
                else{
                    setValue(e.target.value)
                }
                
            }} 
                autoComplete="off"  maxlength="" required/>
            </label>
            <label>Description
            <input  type="text" name="description" value={description} onChange={(e) => setDescription(e.target.value)} maxlength="150" autoComplete="off"/>
            </label>
            <button>Submit</button>
        </form>
    )
}


export default AddExpense