import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './LoginPage.css';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.get('https://dummyjson.com/users');
      const users = response.data.users;
      const foundUser = users.find(
        (u) => u.username === username && u.password === password
      );
      if (foundUser) {
        setUser(foundUser);
      } else {
        alert('Неверный логин или пароль');
      }
    } catch (error) {
      console.error('Ошибка при загрузке пользователей:', error);
    }
  };

  const handleUserClick = () => {
    if (user) {
      navigate(`/user/${user.id}`);
    }
  };

  return (
    <div className="login-page-container">
      {!user ? (
        <div className="login-form">
          <h1>Вход</h1>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Войти</button>
        </div>
      ) : (
        <div className="welcome-message">
          <h1 onClick={handleUserClick}>С возвращением, {user.username}!</h1>
        </div>
      )}
    </div>
  );
}

export default LoginPage;