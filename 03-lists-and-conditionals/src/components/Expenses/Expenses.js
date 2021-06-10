import React, { useState } from 'react';

import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';
import ExpensesList from './ExpensesList';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2022');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter(expense => expense.date.getFullYear().toString() === filteredYear)

  return (
    <div>
      <Card className='expenses'>
      <ExpensesFilter onChangeFilter={filterChangeHandler} />
      <ExpensesList filteredExpenses={filteredExpenses} />
{/*        {filteredExpenses.length === 0 && <p>No expenses found</p>}
        {filteredExpenses.length > 0 &&
          filteredExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          )
        )};*/}
      </Card>
    </div>
  );
};

export default Expenses;
