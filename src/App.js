import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import RegistrationForm from './components/RegistrationForm';
import Navbar from './components/Navbar';
import UserList from './components/UserList';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const handleLogin = (username) => {
    setUsername(username);
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setUsername('');
    setLoggedIn(false);
  };


  return (
    <div>
      <h1>User Authentication SPA</h1>
      {loggedIn ? (
        <>
          <Navbar username={username} handleLogout={handleLogout} />
          <h2>Welcome to the Dashboard, {username}!</h2>
          <UserList />
        </>
      ) : (
        <>
          <LoginForm handleLogin={handleLogin} />
          <RegistrationForm />
        </>
      )}
    </div>
  );
};

export default App;