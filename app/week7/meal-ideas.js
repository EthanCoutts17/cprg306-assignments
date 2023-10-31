"use client"; 


import React, { useState, useEffect } from "react";

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  // Define the function to fetch meal ideas from the API
  const fetchMealIdeas = async (ingredient) => {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
      );
      const data = await response.json();
      if (data.meals) {
        setMeals(data.meals);
      } else {
        setMeals([]);
      }
    } catch (error) {
      console.error("Error fetching meal ideas: ", error);
    }
  };

  // Define the function to load meal ideas
  const loadMealIdeas = () => {
    fetchMealIdeas(ingredient);
  };

  // Use the useEffect hook to load meal ideas when the ingredient prop changes
  useEffect(() => {
    loadMealIdeas();
  }, [ingredient]);

  return (
    <div className ="bg-slate-900 flex-1 text-white">
      <h2 className="text-2xl font-bold mb-2">Meal Ideas for {ingredient}</h2>
      <ul>
        {meals.map((meal) => (
          <li key={meal.idMeal}>{meal.strMeal}</li>
        ))}
      </ul>
    </div>
  );
}