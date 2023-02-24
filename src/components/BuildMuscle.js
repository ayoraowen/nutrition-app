
import React, { useState, useEffect } from "react";

function BuildMuscle() {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/buildMuscleFoods")
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, []); 
  
  useEffect(() => {
    fetch("http://localhost:3000/buildMuscleRecipies")
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, []);


  return (
    <div>
      <h2>Build Muscle Foods</h2>
      <ul>
        {foods.map((food) => (
          <li key={food.id}>
            <h3>{food.name}</h3>
            <img src={food.image_link} alt={food.name} width="200" height="200" />
            <p>{food.daily_consumption_quantity}</p>
            <p>Calories: {food.nutritional_value.calories}</p>
            <p>Protein: {food.nutritional_value.protein}</p>
            <p>Fat: {food.nutritional_value.fat}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BuildMuscle;

