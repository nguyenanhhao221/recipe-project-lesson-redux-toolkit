import React, { useEffect } from "react";
import Recipe from "../../components/Recipe";
import { loadData } from "./allRecipesSlice";
import FavoriteButton from "../../components/FavoriteButton";
import { addRecipe } from "../favoriteRecipes/favoriteRecipesSlice";

const favoriteIconURL = 'https://static-assets.codecademy.com/Courses/Learn-Redux/Recipes-App/icons/favorite.svg'
export function AllRecipes({ allRecipes, dispatch }) {
    //When component first mount, load the data of recipes
    //Then render
    const onFirstRender = () => {
        dispatch(loadData());
    }
    useEffect(onFirstRender, [dispatch])

    //onClick handler to add recipe to favorite recipes
    const onAddRecipeHandler = recipe => dispatch(addRecipe(recipe))
    return (
        <div className="recipes-container">
            {allRecipes.map((recipe) => (
                <Recipe recipe={recipe} key={recipe.id}>
                    <FavoriteButton
                        onClickHandler={() => onAddRecipeHandler(recipe)}
                        icon={favoriteIconURL}
                    >
                        Add to Favorites
                    </FavoriteButton>
                </Recipe>
            ))}
        </div>
    );

}