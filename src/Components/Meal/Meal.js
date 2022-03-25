import React from 'react';

const Meal = (props) => {
    const {idMeal, strMeal, strMealThumb, strCategory } = props.meal;
    // const {handleAddToCart} = props;

    return (
        <div>
<div>
<p>
meal name: {strMeal}
        </p>
        <img src={strMealThumb} alt="" />
        <p>Catagory
            :{ strCategory}
        </p>
        <h5>ID: {idMeal}</h5>
        <button onClick={()=> props.handleAddToCart(props.meal)}>Add to Cart</button>
</div>
<div>

</div>
        </div>
        
    );
};

export default Meal;