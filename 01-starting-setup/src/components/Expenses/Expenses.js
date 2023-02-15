import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [enteredYear, setEnteredYear] = useState("2020");

  const onYearChange = (year) => {
    setEnteredYear(year);
    console.log(year);
  };

  const filteredExpenses = props.expenses.filter(expense => {
    return expense.date.getFullYear().toString() === enteredYear;
  })

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter onYearChange={onYearChange} year={enteredYear} />
        {filteredExpenses.map(expenseFilteredByYear => (
          <ExpenseItem
          key={expenseFilteredByYear.id}
          title={expenseFilteredByYear.title}
          amount={expenseFilteredByYear.amount}
          date={expenseFilteredByYear.date}
        />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
