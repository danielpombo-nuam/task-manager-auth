import React from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../services/api';
import LoginForm from '../components/LoginForm';

const LoginPage = ({ setToken }) => {
  const navigate = useNavigate();

  const handleLogin = async (email, password) => {
    try {
      const { token } = await login(email, password);
      setToken(token);
      navigate('/tasks');
    } catch (error) {
      alert('Login failed');
    }
  };

  return <LoginForm onLogin={handleLogin} />;
};

export default LoginPage;