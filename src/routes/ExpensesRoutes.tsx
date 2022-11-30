import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Expenses from '../components/Expenses/Expenses';
import NewExpenses from '../components/Expenses/Expense/NewExpenses';
import DetailExpenses from '../components/Expenses/Expense/DetailExpenses';

const ExpensesRoutes = () => {
  return (
    <Routes>
      <Route index element={<Expenses />} />
      <Route path=":id" element={<DetailExpenses />} />
      <Route path="new" element={<NewExpenses />} />
    </Routes>
  )
}

export default ExpensesRoutes;