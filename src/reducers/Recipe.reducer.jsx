export const initialState = {
  recipes: [],
};

export const RecipeReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "fetch_recipes":
      return { ...state, recipes: payload };

    case "delete_recipe": {
      const updatedRecipes = state.recipes.filter((recipe) => {
        return recipe.id !== payload.id;
      });
      return {
        ...state,
        recipes: updatedRecipes,
      };
    }

    case "add_recipe": {
      console.log(payload);
      return {
        ...state,
        recipes: [...state.recipes, payload],
      };
    }

    default:
      throw new Error("Unknown reducer call...");
  }
};
