import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './UserPage.css';

function UserPage() {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`https://dummyjson.com/users/${id}`);
        setUser(response.data);
      } catch (error) {
        console.error('Ошибка при загрузке данных пользователя:', error);
      }
    };

    fetchUser();
  }, [id]);

  if (!user) {
    return <div className="loading">Загрузка...</div>;
  }

  return (
    <div className="user-page">
      <div className="user-profile">
        <img src={user.image} alt="Avatar" className="user-avatar" />
        <h1 className="user-name"> {user.firstName} {user.lastName}
        </h1>
        <p className="user-info">Email: {user.email}</p>
        <p className="user-info">Phone: {user.phone}</p>
        <p className="user-info">Username: {user.username}</p>
      </div>
    </div>
  );
}

export default UserPage;