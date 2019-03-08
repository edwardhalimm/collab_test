import React from 'react';

import { Link } from "react-router-dom";

const API_KEY = "c1d6ebdfab337a5f6d26dd1abbb4ad09";
const API_ID = "512e40ea";

class Recipe extends React.Component {
    state = {
        activeRecipe: []
    }
    componentDidMount = async () => {
        const title = this.props.location.state.oneRecipe;
        const req = await fetch
        (`https://cors-anywhere.herokuapp.com/https://api.edamam.com/search?app_id=${API_ID}&app_key=${API_KEY}&q=${title}`);

        const res = await req.json();
        this.setState({ activeRecipe: res.hits[0]});
    }
   
    render() {
        const recipe = this.state.activeRecipe;
        console.log('active recipe', this.state.activeRecipe);
        console.log('props', this.props);
    
        //console.log(recipe.recipe);
        return (
            <div className="container">
                {
                    this.state.activeRecipe.length !== 0 && 
                    <div className="active-recipe">
                        <img className="active-recipe_img" src={recipe.recipe.image} alt={recipe.label}/>
                            <div className="recipeLabel">
                                <h1 className="foodFacts-h1">Food Facts</h1>
                                <hr/>
                                <h1 id="foodTitle" className="active-recipe_title">{recipe.recipe.label}</h1>
                                <h3 id="servings" className="active-recipe_title"> {Math.ceil(recipe.recipe.calories/2000) > 1 ? `${ Math.ceil(recipe.recipe.calories/2000) } servings` : `1 serving`}</h3>
                                <h3 id="servingSize" className="active-recipe_title">Serving size ({Math.round(recipe.recipe.totalWeight)}g)</h3>
                                <hr id="hr2"/>
                                <h3 className="active-recipe_title">Amount per serving </h3>
                                <h3 id="calories" className="active-recipe_title">Total Cal: {Math.round(recipe.recipe.calories)}</h3>
                                <hr id="hr2"/>
                                <h4 id="smallSub" className="active-recipe_title"><strong>Diet Label: </strong>{recipe.recipe.dietLabels != "" ? `${recipe.recipe.dietLabels}` : `-`}</h4>
                                <h4 id="smallSub" className="active-recipe_title"><strong>Ingredient: </strong>
                                    <br/>
                                {recipe.recipe.ingredientLines}
                                </h4>
                               
                                <div className="active-recipe_website">
                                    <button className="recipe_button">
                                        <a href={recipe.recipe.url}>Full Recipe</a> 
                                    </button>           
                                </div>
                            </div>
                        <button className="active-recipe_button">
                            <Link to="/">Home</Link>
                        </button>
                    </div>
                }
            </div>             
        );
    }
};


export default Recipe;