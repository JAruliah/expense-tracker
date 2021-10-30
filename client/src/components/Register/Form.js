import React, {useState} from "react";

function Form(props){
    const [email, setEmail] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [password, setPassword] = useState("")
    const [message, setMessage] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")


    //On submit POST data to api
    function submitHandler(event){
        event.preventDefault()
        if(password === passwordConfirmation){
            
            // don't remember from where i copied this code, but this works.
            let re = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
            if ( re.test(email) ) {
                fetch(`${process.env.REACT_APP_BASE_URL}users/register`, {
                    method:'POST',
                    headers:{
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({email:email.toLowerCase(), firstName: firstName, lastName: lastName, password: password})
                })
                .then(response => response.json())
                .then(data => {
                    window.localStorage.setItem('id',JSON.stringify(data))
                    props.handleLogin()
                    setMessage("Account Created")
                })
                .catch(err => console.log(err))


                
            }
            else {
                setMessage("Invalid Email")
            }
        }
        else{
            setMessage("Passwords do not match")
        }

        
    }

    function clickHandler(event){
        let x = document.getElementById("password");
        let i = document.getElementById("passwordconfirm")
        if (x.type === "password") {
          x.type = "text";
          i.type = "text"
        } else {
          x.type = "password";
          i.type = "password"
        }
    }


    return(
        <form onSubmit={submitHandler}>
            <label>Email
            <input  type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} maxLength="100" autoComplete="off" required/>
            </label>
            <label>First Name
            <input  type="text" name="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} maxLength="50" autoComplete="off" required/>
            </label>
            <label>Last Name
            <input  type="text" name="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} maxLength="50" autoComplete="off" required/>
            </label>
            <label>Password
            <input  type="password" name="password" value={password} id="password" onChange={(e) => setPassword(e.target.value)} minLength="8" maxLength="25" required/>
            </label>
            <label>Confirm your password
            <input  type="password" name="passwordConfirmation" value={passwordConfirmation} id="passwordconfirm" onChange={(e) => setPasswordConfirmation(e.target.value)} minLength="8" maxLength="25" required/>
            </label>
            <label><input type="checkbox" onClick={clickHandler} />Show Passwords</label>

            <p name="message">{message}</p>
            <button>Signup </button>
        </form>
    )
}

export default Form