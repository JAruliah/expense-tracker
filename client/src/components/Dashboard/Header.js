import React from "react";
import {Link} from 'react-router-dom'


function Header(props){
    let expenses=0
    let income=0
    return (
        // Get values depending on negative or positive, seperate them into expenses and income
        <header>
            <h1>Hey, {props.userName}</h1>
            <Link to="/" className="logout" onClick={props.handleLogout}>Logout</Link>
            {props.expenses === undefined ? null : props.expenses.map(item => {
            if (item.value === undefined){
                return false
            } else{
                let expenseNum = parseFloat(item.value)
                if (item.value < 0){
                    expenses += expenseNum
                    return false
                }
                else{
                    income += expenseNum
                    return false
                }
        }
    })}
            <div className="info">
                <div className="income">
                    <h2>Income</h2>
                    <p>${income}</p>
                </div>
                <div className="expenses">
                    <h2>Expenses</h2>
                    <p>${expenses}</p>
                </div>
                <div className="net-total">
                    <h2>Net Total</h2>
                    {income + expenses < 0? <p style={{color:'#FF4B4B'}}>${income + expenses}</p>:<p style={{color:'#00AD35'}}>${income + expenses}</p>}
                </div>
                </div>

        </header>
    )
}

export default Header