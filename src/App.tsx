import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Landing/Home';
import NotFound from './components/Utils/NotFound';
import Faq from './components/Utils/Faq';
import ExpensesRoutes from './routes/ExpensesRoutes';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/expenses/*" element={<ExpensesRoutes />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
