import { useState } from 'react';
import './LoginForm.css';
import { useNavigate } from 'react-router-dom';

export default function LoginForm() {
  const [userName, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  function handleLogin() {
    console.log("counting on you guys backend")
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
