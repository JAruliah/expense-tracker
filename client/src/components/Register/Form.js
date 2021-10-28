import React, {useState} from "react";

function Form(){
    const [email, setEmail] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [password, setPassword] = useState("")
    const [message, setMessage] = useState("")

    //On submit POST data to api
    function submitHandler(event){
        event.preventDefault()
        // don't remember from where i copied this code, but this works.
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if ( re.test(email) ) {
            fetch('http://localhost:3001/users/register', {
                method:'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({email:email, firstName: firstName, lastName: lastName, password: password})
            })
            .then(response => {
                setMessage("Account Created")
            })
            .catch(err => console.log(err))
        }
        else {
            setMessage("Invalid Email")
        }

        
    }

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
            <input placeholder="Email Address" type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} autocomplete="off" required/>
            <input placeholder="First Name" type="text" name="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} autocomplete="off" required/>
            <input placeholder="Last Name" type="text" name="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} autocomplete="off" required/>
            <input placeholder="Password" type="password" name="password" value={password} id="password" onChange={(e) => setPassword(e.target.value)} required/>
            <label><input type="checkbox" onClick={clickHandler} />Show Password</label>

            <p name="message">{message}</p>
            <button>Signup </button>
        </form>
    )
}

export default Form