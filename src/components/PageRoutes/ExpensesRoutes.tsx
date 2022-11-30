import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Expenses from '../Expenses/Expenses';
import NewExpenses from '../Expenses/Expense/NewExpenses';
import DetailExpenses from '../Expenses/Expense/DetailExpenses';

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