import React, { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [enteredYear, setEnteredYear] = useState("2020");

  const onYearChange = (year) => {
    setEnteredYear(year);
    console.log(year);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === enteredYear;
  });

  

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter onYearChange={onYearChange} year={enteredYear} />
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList expenses={filteredExpenses}/>
      </Card>
    </div>
  );
};

export default Expenses;
