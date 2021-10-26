import React, {useState, useEffect} from "react";
import Header from "../components/Dashboard/Header";


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
        <div>
            <Header userName={userName} expenses={expenses}/>
            <button onClick={props.handleLogout}>Logout</button>
        </div>
        
    )
}

export default Dashboard