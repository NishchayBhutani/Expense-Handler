import React from 'react';
import './TotalExpenses.css';
import RemSalary from './RemSalary.js';
const TotalExpenses = (props) => {

  let sum  = 0;

  props.data.map((expense) => (
    sum = sum + expense.amount
  ));

  return <div><RemSalary prop = {sum} /></div>
};
export default TotalExpenses;
