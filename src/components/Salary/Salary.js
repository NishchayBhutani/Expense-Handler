import React,{useState} from 'react';
import './Salary.css';
const Salary = (props) => {
  const [value,setValue] = useState('500000');
  const onChangeHandler = (event) => {
      setValue(event.target.value);
  }
  const formSubmitHandler = (event) => {
    event.preventDefault();
    const enteredSal = value;
    props.x(enteredSal);
    // setValue('');
  }
  return <div className = 'salaryContainer'>
  <div><form onSubmit= {formSubmitHandler}>
  <div className='sal'><label>Enter Annual Salary :</label>
  <input value={value} onChange={onChangeHandler} type = 'number' min = '1' />
  <button type='submit'>Enter</button></div>
  </form>
  </div>
  </div>
}
export default Salary;
