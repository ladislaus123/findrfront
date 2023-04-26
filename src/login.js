import React, { useState } from 'react';
import './login.css'
import logo from './logo.png'



const Logins = () => {

  const [password, setPassword] = useState('');
  const [names, setNames] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Email: ${names}, Password: ${password}`);
    // add code to handle login logic here value={names} onChange={(e) => setNames(e.target.value)}
  };


  return (

  <div className='loginbox'> 
      <img src={logo} className='logo' />
    <h1>Login</h1>
    <form onSubmit={handleSubmit}>
            
    
      <input type="text" name="" placeholder="Enter Username" value={names} onChange={(e) => setNames(e.target.value)} />
            <input type="password" name="" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <input type="submit" name="" value="login"  />
            <a>Create account</a>
  </form>

</div>
  

 );
};

export default Logins;
