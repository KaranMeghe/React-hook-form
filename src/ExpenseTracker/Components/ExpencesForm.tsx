/** @format */

import { useState } from 'react';
import ExpenseList from './ExpenseList';

const ExpencesForm = () => {
  const [expences, setExepnces] = useState([
    {
      id: 1,
      description: 'Groceries',
      amount: 50,
      category: 'Food',
    },
    {
      id: 2,
      description: 'Electricity Bill',
      amount: 75,
      category: 'Utilities',
    },
    {
      id: 3,
      description: 'Internet Bill',
      amount: 40,
      category: 'Utilities',
    },
    {
      id: 4,
      description: 'Gym Membership',
      amount: 30,
      category: 'Health',
    },
    {
      id: 5,
      description: 'Movie Tickets',
      amount: 20,
      category: 'Entertainment',
    },
  ]);

  const onDelete = (id: number) => {
    const updatedExpences = expences.filter((expence) => {
      return id !== expence.id;
    });
    setExepnces(updatedExpences);
  };

  return (
    <>
      <ExpenseList expences={expences} onDelete={onDelete} />
    </>
  );
};

export default ExpencesForm;
