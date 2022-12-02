import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NotFound from './components/Utils/NotFound';
import Faq from './components/Utils/Faq';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Expenses from './components/Expenses/Expenses';
import DetailExpenses from './components/Expenses/Expense/DetailExpenses';
import NewExpenses from './components/Expenses/Expense/NewExpenses';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="/register" element={<Register />} />
      <Route path="/expenses"> 
        <Route index element={<Expenses />} />
        <Route path=":id" element={<DetailExpenses />} />
        <Route path="new" element={<NewExpenses />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
