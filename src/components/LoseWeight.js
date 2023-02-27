import React, {useState, useEffect} from 'react'


function LoseWeight() {
// useEffect(()=>{
//     fetch("url")
//     .then(res =>  res.json())
//     .then(data =>(data))
// })
//   return (
//     <div>LoseWeight</div>
//   )

const[foodItems, setFoodItem] = useState([]);
  const[recipe, setRecipe] = useState([])
useEffect(()=>{
    fetch("http://localhost:3000/weightLossFoods")
    .then(res =>  res.json())
    .then(data => {
      console.log(data)
      setFoodItem(data)
    })
}, [])

useEffect(()=>{
  fetch("http://localhost:3000/weightLossRecipes")
  .then(res => res.json())
  .then(data => {
    console.log(data)
    setRecipe(data)
  })
}, [])

return (
  <div className="menu-container"> 
      {foodItems.map((foodItem) => {
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


export default LoseWeight;

