import React, {useState} from "react";

function Form(){
    const [email, setEmail] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [password, setPassword] = useState("")

    //On submit POST data to api
    function submitHandler(event){
          event.preventDefault()
          fetch('http://localhost:3001/users/register', {
              method:'POST',
              headers:{
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify({email:email, firstName: firstName, lastName: lastName, password: password})
          })
          .then(response => console.log(response))
        
    }


    return(
        <form onSubmit={submitHandler}>
            <input placeholder="Email Address" type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input placeholder="First Name" type="text" name="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            <input placeholder="Last Name" type="text" name="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} />
            <input placeholder="Password" type="text" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button>Submit</button>
        </form>
    )
}

export default Form