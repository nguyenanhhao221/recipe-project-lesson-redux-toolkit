import React, { useEffect } from "react";
import Recipe from "../../components/Recipe";
import { loadData } from "./allRecipesSlice";


export function AllRecipes({ allRecipes, dispatch }) {
    //When component first mount, load the data of recipes
    //Then render
    const onFirstRender = () => {
        dispatch(loadData());
    }
    useEffect(onFirstRender, [dispatch])

    return (
        <div className="recipes-container">
            {allRecipes.map((recipe) => (
                <Recipe recipe={recipe} key={recipe.id}>
                    {/* <FavoriteButton
                        onClickHandler={() => onAddRecipeHandler(recipe)}
                        icon={favoriteIconURL}
                    >
                        Add to Favorites
                    </FavoriteButton> */}
                </Recipe>
            ))}
            <img src="../../img/biscuits.jpg" alt="test"/>
            <img src="../../img/bulgogi.jpg" alt="test"/>
        </div>
    );

}