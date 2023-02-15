import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    onAddExpenseOrCancelClick();
  };

  const onAddNewExpenseButtonClick = () => {
    setIsEditing(true);
  };

  const onAddExpenseOrCancelClick = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {isEditing === false ? (
        <button onClick={onAddNewExpenseButtonClick}>Add New Expense</button>
      ) : (
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancelExpenseData={onAddExpenseOrCancelClick} />
      )}
    </div>
  );
};

export default NewExpense;
