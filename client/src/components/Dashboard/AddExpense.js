import React, {useState} from "react";

function AddExpense(props){
    const [value, setValue] = useState("")
    const [description, setDescription] = useState("")
    const localId = window.localStorage.getItem('id')
    const userId = JSON.parse(localId)
    const [count, setCount] = useState("")

    //On submit POST data to api
    function submitHandler(event){
          setCount(count + 1)  
          event.preventDefault()
          fetch(`${process.env.REACT_APP_BASE_URL}expenses/${userId._id}`, {
              method:'POST',
              headers:{
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify({value:value, description: description})
          })
          .then(response => response.json())
          .then(data => {
            props.setExpenses([...props.expenses, {_id:data[data.length -1]._id,value:value, description:description}])
          })
        .catch(err => console.log(err))
    }


    return(
        <form onSubmit={submitHandler} className="add-new-expense">
            <h2>Add an expense/income</h2>
            <h4>Use ( - ) before your input to show expense, leave blank to show income</h4>
            <label>Value($$$)
            <input  type="number" name="value" value={value} min="-999999" max="999999" onChange={(e) => {setValue(e.target.value)}} 
                autoComplete="off" required/>
            </label>
            <label>Description
            <input  type="text" name="description" value={description} onChange={(e) => setDescription(e.target.value)} maxLength="30" required autoComplete="off"/>
            </label>
            <button>Submit</button>
        </form>
    )
}


export default AddExpense