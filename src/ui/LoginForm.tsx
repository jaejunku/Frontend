import { useState } from 'react';
import './LoginForm.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function LoginForm( {setUser} : {setUser : Function} ) {
  const [userName, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  async function handleLogin() {
    // Send a promise to the backend server with credentials
    const functionUrl = `https://s24warmup-app.azurewebsites.net/api/users/${userName}?code=Ih_aBOL26AfE_TBVswdiIv9J9wmEfoLzjm5xkV47pcNaAzFuBvFIDw==`;
    try {
      // Make a GET request to the GetUser function
      const response = await axios.get(`${functionUrl}`);
      console.log('response successful');
      console.log(response);
    } catch (error) {
      console.error('Login failed:', error);
      // Handle errors (e.g., user not found, network error, etc.)
    }
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

