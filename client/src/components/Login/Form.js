import React, {useState} from "react";

function Form(props){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    
    

    //On submit POST data to api
    function submitHandler(event){
          event.preventDefault()
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
          .catch(err => console.log(err))
        
    }


    return(
        <form onSubmit={submitHandler}>
            <input placeholder="Email Address" type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input placeholder="Password" type="text" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button>Login</button>
        </form>
    )
}

export default Form