import React, { useState } from 'react';
import './App.css'
import logo from './logo.png'





const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [names, setNames] = useState('');
  const [age, setNumber] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Email: ${email}, Password: ${password}`);
    //  value={names} onChange={(e) => setNames(e.target.value)}
  };


  return (
  <div className='loginbox'>
    <img src={logo} className='logo' />
    <h1>Register</h1> 
    <form onSubmit={handleSubmit}> 
            
    <input type="text" name="" placeholder="Enter Username" value={names} onChange={(e) => setNames(e.target.value)}/>

            <input type="number" name="" placeholder="Enter Age" value={age} onChange={(e) => setNumber(e.target.value)}/>

            <input type="email" name="" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)}/>

            <input type="password" name="" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)}/>

            <input type="submit" name="" value="sign up" />

            <a>Already have an account?</a>
  </form>

</div>
  

  );
};

export default Login;
