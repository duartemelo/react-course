import React, {useState} from 'react';
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {
  const [enteredYear, setEnteredYear] = useState("2020");

  const onYearChange = year => {
    setEnteredYear(year);
    console.log(year);
  }


  return (
    <div>
      <Card className="expenses">
      <ExpensesFilter onYearChange={onYearChange} year={enteredYear}/>
      <ExpenseItem
        title={props.expenses[0].title}
        amount={props.expenses[0].amount}
        date={props.expenses[0].date}
      />
      <ExpenseItem
        title={props.expenses[1].title}
        amount={props.expenses[1].amount}
        date={props.expenses[1].date}
      />
      <ExpenseItem
        title={props.expenses[2].title}
        amount={props.expenses[2].amount}
        date={props.expenses[2].date}
      />
      <ExpenseItem
        title={props.expenses[3].title}
        amount={props.expenses[3].amount}
        date={props.expenses[3].date}
      />
    </Card>
    </div>
    
  );
}

export default Expenses;
