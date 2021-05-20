import React,{useState} from 'react';
import Salary from './Salary.js';
import './RemSalary.css';
const RemSalary = (props) => {
  const [val,getVal] = useState('500000');
  const rSalary = (data) => {
     getVal(data);
  }
  return (
    <div className="sal_container">
    <Salary x={rSalary}/>
    <div className='rem'>Remaining Salary : {val - props.prop}</div>
    </div>
  )
};
export default RemSalary;
