import React, { useEffect } from "react";
import Recipe from "../../components/Recipe";
import { loadData, selectFilteredAllRecipes } from "./allRecipesSlice";
import FavoriteButton from "../../components/FavoriteButton";
import { addRecipe } from "../favoriteRecipes/favoriteRecipesSlice";
//import useSelector hook
import { useSelector, useDispatch } from "react-redux";


const favoriteIconURL = 'https://static-assets.codecademy.com/Courses/Learn-Redux/Recipes-App/icons/favorite.svg'
export function AllRecipes() {
    //useSelector hook
    //selectFilteredAllRecipes will get the state in the redux store off allRecipes after filter compare with searchTerm
    //Then the useSelector hook will return that data from selectFilteredAllRecipes and return to the allRecipes variable.
    //also when we call the useSelector inside AllRecipes component, it will also subscribe the AllRecipes component to re-render if any changes to the allRecipes portion of the store
    const allRecipes = useSelector(selectFilteredAllRecipes);

    //useDispatch hook
    //call useDispatch hook and assigned to dispatch variable
    //later "dispatch" follow with action 
    //no need to use props
    const dispatch = useDispatch();

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