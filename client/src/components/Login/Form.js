import React, {useState} from "react";

function Form(props){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [message, setMessage] = useState("")

    //On submit POST data to api
    function submitHandler(event){
        event.preventDefault()
        let re = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if ( re.test(email) ) {
            fetch('http://localhost:3001/users/login', {
                method:'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({email:email, password: password})
            })
            .then(response => response.json())
            .then(data => {
              window.localStorage.setItem('id',JSON.stringify(data))
              props.handleLogin()
             
            })
            .catch(err => {
                console.log(err)
                setMessage("Invalid credentials")
            })
        }
        else {
            setMessage("Invalid Email")
          }
    }

    //Show password toggle
    function clickHandler(event){
        let x = document.getElementById("password");
        if (x.type === "password") {
          x.type = "text";
        } else {
          x.type = "password";
        }
    }

    return(
        <form onSubmit={submitHandler}>
            <input placeholder="Email Address" type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="off" required/>
            <input placeholder="Password" type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} autoComplete="off" required/>
            <label><input type="checkbox" onClick={clickHandler} />Show Password</label>
            <button>Login</button>
            <p name="message">{message}</p>
        </form>
    )
}

export default Form