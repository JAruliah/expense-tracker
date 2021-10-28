import React from 'react';
import { Link } from 'react-router-dom';


const Unauthorized = () => {
  return (
    <div className='unauthorized'>

        <h1>You don't have permission to this page</h1>
        
   
      <p><Link to='/'>Back to Home</Link></p>
    </div>
  )
}

export default Unauthorized;