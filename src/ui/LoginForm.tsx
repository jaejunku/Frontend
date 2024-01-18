import { useState } from 'react';
import './LoginForm.css';
import { useNavigate } from 'react-router-dom';

export default function LoginForm( {setUser} : {setUser : Function} ) {
  const [userName, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  function handleLogin() {
    // Send a promise to the backend server with credentials
    console.log("counting on you guys backend")
    
    
    // If success, then set the username and navigate
    setUser(userName);
    navigate('/main');
  }


  return (
    <div className="login-container">
      <h2>Login</h2>
      <label>
        User:{' '}
        <input
          value={userName}
          onChange={(e)=>{setUsername(e.target.value)}}
        />
      </label>
      <label>
        Password:{' '}
        <input
          value={password}
          onChange={(e)=>{setPassword(e.target.value)}}
        />
      </label>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
