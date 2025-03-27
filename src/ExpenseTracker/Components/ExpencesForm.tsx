/** @format */

import { useState } from 'react';
import ExpenseList from './ExpenseList';
import ExpenseFilter from './ExpenseFilter';

const Categories = ['Food', 'Entertainment', 'Health', 'Utilities'];

const ExpencesForm = () => {
  const [allExpences, setAllExpences] = useState([
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

  const [selectedCategories, setSelectedCategories] = useState('');

  const onDelete = (id: number) => {
    const updatedExpences = allExpences.filter((expence) => expence.id !== id);
    setAllExpences(updatedExpences);
  };

  const visibleExpences = selectedCategories
    ? allExpences.filter((expence) => expence.category === selectedCategories)
    : allExpences;

  return (
    <>
      <form>
        <div className='mb-3'>
          <label htmlFor='description' className='form-label'>
            Description
          </label>
          <input id='description' type='text' className='form-control' />
        </div>

        <div className='mb-3'>
          <label htmlFor='amount' className='form-label'>
            Amount
          </label>
          <input id='amount' type='number' className='form-control' />
        </div>

        <div className='mb-3'>
          <label htmlFor='category' className='form-label'>
            Category
          </label>
          <select name='' id='category' className='form-select'>
            {Categories.map((category) => {
              return (
                <option value={category} key={category}>
                  {category}
                </option>
              );
            })}
          </select>
        </div>

        <button className='btn btn-primary'>Submit</button>
      </form>
      <ExpenseFilter onSelectCategory={(category) => setSelectedCategories(category)} Categories={Categories} />
      {allExpences.length > 0 && <ExpenseList expences={visibleExpences} onDelete={onDelete} />}
    </>
  );
};

export default ExpencesForm;
