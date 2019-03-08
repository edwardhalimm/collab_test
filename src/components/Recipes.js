import React from 'react';

import { Link } from "react-router-dom";

const Recipes = props => (
    <div className="container">
        <div className="row">
        { props.hits.map((oneRecipe) => {
          return (
            // <div key={oneRecipe.recipe.calories}>
            //   <img src={oneRecipe.recipe.image} alt={oneRecipe.recipe.label}/>
            //   <p>{oneRecipe.recipe.label}</p>
            //   <p>Calories: {oneRecipe.recipe.calories.toFixed(0)}</p>
            // </div>

             <div key={oneRecipe.recipe.label} className="col-md-4" style={{ marginBottom:"2rem" }} > 
                <div className="recipe_box">
                <img className="recipe_box-img" src={oneRecipe.recipe.image} alt={oneRecipe.recipe.label}/>
                    <div className="recipe_text">
                        <h5 className="recipe_title">
                            { oneRecipe.recipe.label.length < 18 ? `${ oneRecipe.recipe.label }` 
                            : `${oneRecipe.recipe.label.substring(0, 25)}...` }
                        </h5>
                    </div>
                    <button className="recipe_button">
                        <Link to={{ 
                            pathname: `/recipe/${oneRecipe.recipe.label}`,
                            state: { oneRecipe: oneRecipe.recipe.label }
                        }} >View recipe
                        </Link>
                    </button>

                </div>
             </div>

          );
        })}
        </div>
    </div>
);

export default Recipes;