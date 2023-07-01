import { useParams } from "react-router-dom";
import { useRecipes } from "../contexts/RecipeContext";
import { useNavigate } from "react-router-dom";

export const RecipePage = () => {
  const { recipeId } = useParams();
  const navigate = useNavigate();
  const { state } = useRecipes();
  const currentRecipe = state.recipes.find((recipe) => {
    return recipe.id === Number(recipeId);
  });

  const handleNavigation = () => {
    navigate("/");
  };

  return (
    <div className="">
      <div className="flex items-center justify-between">
        <button onClick={handleNavigation}>Go Back</button>
        <h1 className="text-center uppercase text-5xl font-bold">{currentRecipe.title}</h1>
        <p></p>
      </div>

      <div className="m-4 shadow-2xl p-8">
        <h5>Recipe ID: {recipeId}</h5>

        <div className="flex gap-32">
          <div className="">
            <img src={currentRecipe.mediaURL} alt="" className="rounded-lg" />
          </div>

          <div>
            <h1 className="uppercase text-xl font-bold mt-4">ingredients:</h1>
            <ul>{currentRecipe.ingredients.join(", ")}</ul>

            <h1 className="uppercase text-xl font-bold mt-4">cuisine:</h1>
            <p>{currentRecipe.cuisineType}</p>

            <h1 className="uppercase text-xl font-bold mt-4">instructions:</h1>
            <ul>
              {currentRecipe.instructions.map((instruction) => (
                <li key={instruction} style={{ listStyle: "circle" }}>
                  {instruction}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
