import { useState } from 'react';
import './login.css';

export default function LoginForm() {
  const [userName, setUsername] = useState('');
  const [password, setPassword] = useState('');
  function handleLogin() {
    console.log("counting on you guys backend")
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
