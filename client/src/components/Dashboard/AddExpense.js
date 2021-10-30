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
              console.log(data)
            props.setExpenses([...props.expenses, {_id:count,value:value, description:description}])
          })
        .catch(err => console.log(err))
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
                autoComplete="off"  maxLength="" required/>
            </label>
            <label>Description
            <input  type="text" name="description" value={description} onChange={(e) => setDescription(e.target.value)} maxLength="80" autoComplete="off"/>
            </label>
            <button>Submit</button>
        </form>
    )
}


export default AddExpense