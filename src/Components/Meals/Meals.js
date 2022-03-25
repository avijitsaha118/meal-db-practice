import React, { useState, useEffect } from 'react';
import Meal from '../Meal/Meal';

const Meals = () => {
    const [meals, setMeals] = useState([]);

    const [cart, setCart]= useState([]);
    
    useEffect (()=>{
      fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
      .then(res=>res.json())
      .then(data=>setMeals(data.meals))
    }, []);

    const handleAddToCart = (meal)=>{
        // console.log(meal);
        const newCart =[...cart, meal];
        setCart(newCart);
    }



// console.log(meals);
    return (
        <div>
            <h3>Desired meal</h3>
            <div>
                {
                    meals.map(meal=><Meal key={meal.idMeal} meal={meal} handleAddToCart={handleAddToCart}></Meal>)
                }
            </div>
            <div>
                <h5> Order Summary: <p>seleceted item: {cart.length}</p> </h5>
            </div>
        </div>
    );
};

export default Meals;