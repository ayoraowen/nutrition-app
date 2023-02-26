
import React, { useState, useEffect } from "react";

function BuildMuscle() {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/buildMuscleFoods")
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, []); 
  
  // useEffect(() => {
  //   fetch("http://localhost:3000/buildMuscleRecipies")
  //     .then((res) => res.json())
  //     .then((data) => setFoods(data));
  // }, []);


  return (
  //   <div>
  //     <h2>Build Muscle Foods</h2>
  //     <ul>
  //       {foods.map((food) => (
  //         <li key={food.id}>
  //           <h3>{food.name}</h3>
  //           <img src={food.image_link} alt={food.name} width="200" height="200" />
  //           <p>{food.daily_consumption_quantity}</p>
  //           {/* <p>Calories: {food.nutritional_value.calories}</p> */}
  //           {/* <p>Protein: {food.nutritional_value.protein}</p>
  //           <p>Fat: {food.nutritional_value.fat}</p> */}
  //         </li>
  //       ))}
  //     </ul>
  //   </div>
  // );

  <div className="menu-container"> 
      {foods.map((foodItem) => {
        console.log(foodItem)
      return (    
          <div className="card" style={{width: "18rem"}} key={foodItem}>
              <img src={foodItem.image_link} className="card-img-top" alt="..."/>
              <div className="card-body">
                  <h5 className="card-title blackentext" >{foodItem.name}</h5>
                  <h9>{foodItem.daily_consumption_quantity}</h9>
                  <p className="card-text blackentext">Nutritional Content</p>
              </div>
              <ul className="list-group list-group-flush">
                  {/* <li className="list-group-item">An item</li>
                  <li className="list-group-item">A second item</li>
                  <li className="list-group-item">A third item</li> */}
                  {console.log(foodItem.nutritional_value)}
                  {foodItem.nutritional_value.map((item, key) => <li className="list-group-item">{Object.keys(item).concat("     ",Object.values(item),"µg")}</li>)}
              </ul>
              <div className="card-body">
                  <a href="#" className="btn btn-primary">See more</a>
                  {/* <a href="#" className="btn btn-primary">Another link</a> */}
              </div>
          </div>
      ); 
      })}   
  </div>  

  )


}

export default BuildMuscle;

