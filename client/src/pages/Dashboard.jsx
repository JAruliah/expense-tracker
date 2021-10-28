import React, {useState, useEffect} from "react";
import Header from "../components/Dashboard/Header";
import AddExpense from "../components/Dashboard/AddExpense";
import Expense from "../components/Dashboard/Expense";


function Dashboard(props){
        const [userName, setUserName] = useState("")
        const [expenses, setExpenses] = useState()
        
        
        useEffect(() => {
            const localId = window.localStorage.getItem('id')
            const userId = JSON.parse(localId)

            fetch(`http://localhost:3001/expenses/${userId._id}`)
            .then(response => response.json())
            .then(data => {
                setUserName(`${data.firstName}  ${data.lastName}`)
                setExpenses(data.expenses)
            })
            .catch(err => console.log(err))
        }, [])
        

    return (
        <div className="dashboard">
            <Header userName={userName} expenses={expenses}/>
            <AddExpense expenses={expenses} setExpenses={setExpenses}/>
            {expenses === undefined ? null : expenses.map(item => {
            if (item.value === undefined){
                return false
            } else{
                
                return <Expense key={item._id} expenseId={item._id} expenses={expenses} setExpenses={setExpenses} value={item.value} description={item.description}/>
            }
    })}
            <button onClick={props.handleLogout}>Logout</button>
        </div>
        
    )
}

export default Dashboard