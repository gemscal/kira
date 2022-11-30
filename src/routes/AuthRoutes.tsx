import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from '../components/Auth/Login';
import Register from '../components/Auth/Register';

const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="signin" element={<Login />} />
      <Route path="signup" element={<Register />} />
    </Routes>
  )
}

export default AuthRoutes;