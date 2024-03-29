import React, { useEffect, useState } from "react";
import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import useHttp from "../../hooks/use-http";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const { isLoading, error, sendRequest } = useHttp();

  const applyData = (data) => {
    for (const [key, value] of Object.entries(data)) {
      setMeals((prevMeals) => [
        ...prevMeals,
        {
          id: key,
          ...value,
        },
      ]);
    }
  };

  useEffect(() => {
    sendRequest(
      {
        url: "https://react-http-de3a1-default-rtdb.europe-west1.firebasedatabase.app/meals.json",
      },
      applyData
    );
  }, [sendRequest]);

  let content = <p>Loading...</p>;

  if (!isLoading) {
    if (error) {
      content = <p>{error}</p>;
    } else {
      const mealsList = meals.map((meal) => {
        return (
          <MealItem
            id={meal.id}
            key={meal.id}
            name={meal.name}
            description={meal.description}
            price={meal.price}
          />
        );
      });
      content = <ul>{mealsList}</ul>;
    }
  }

  return (
    <section className={classes.meals}>
      <Card>{content}</Card>
    </section>
  );
};

export default AvailableMeals;
