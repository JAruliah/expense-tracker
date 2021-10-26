import React, {useState,useEffect} from "react";
import Header from "../components/Dashboard/Header";

function Dashboard(props){
    const [userName, setUserName] = useState()
    const [expenses, setExpenses] = useState()
    const [loading, setLoading] = useState(false)
    
    useEffect(() => {
        const user = window.localStorage.getItem('id')
        const userData = JSON.parse(user)
        setLoading(true)
        fetch(`http://localhost:3001/expenses/${userData._id}`)
        .then(response => response.json())
        .then(data => {
            setUserName(`${data.firstName}  ${data.lastName}`)
            setExpenses(data.expenses)
            setLoading(false)
        })
        .catch(err => console.log(err))
        
       
    }, [])

    return (
        <div>
            <Header userName={userName} expenses={expenses} loading={loading}/>
           
            <button onClick={props.handleLogout}>Log Out</button> 
           
        </div>
    )
}

export default Dashboard