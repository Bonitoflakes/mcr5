/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { MdOutlineAddCircleOutline } from "react-icons/md";

import { RecipeCard } from "../components/RecipeCard";
import { Search } from "../components/Search";
import { useRecipes } from "../contexts/RecipeContext";
import { recipes } from "../api/recipes";
import { AddRecipeModal } from "../components/AddRecipeModal";

export default function HomePage() {
  const { state, dispatch } = useRecipes();
  const [search, setSearch] = useState({ query: "", filter: "Name" });
  const [showModal, setShowModal] = useState(false);

  const filteredRecipes = state.recipes.filter((recipe) => {
    switch (search.filter) {
      case "Name":
        return recipe.title.toLowerCase().includes(search.query.toLowerCase());

      case "Ingredients": {
        return recipe.ingredients.join(" ").toLowerCase().includes(search.query.toLowerCase());
      }

      case "Cuisine": {
        return recipe.cuisineType.toLowerCase().includes(search.query.toLowerCase());
      }

      default:
        throw new Error("unknown filter types");
    }
  });

  useEffect(() => {
    dispatch({ type: "fetch_recipes", payload: recipes });
  }, []);

  const handleFilter = (e) => {
    setSearch({ ...search, filter: e.target.value });
  };

  const handleQuery = (e) => {
    setSearch({ ...search, query: e.target.value });
  };

  const toggleModal = () => {
    setShowModal((p) => !p);
  };

  return (
    <div className="m-4 ">
      <Search search={search} handleFilter={handleFilter} handleQuery={handleQuery} />

      <h1 className="text-6xl font-bold p-4">All Recipes: </h1>

      <div className="flex flex-wrap gap-4">
        {filteredRecipes.map((recipe) => {
          return <RecipeCard recipe={recipe} key={recipe.id} />;
        })}

        <AddNewRecipeCard toggleModal={toggleModal} />
      </div>

      {showModal && <AddRecipeModal toggleModal={toggleModal} />}
    </div>
  );
}

const AddNewRecipeCard = ({ toggleModal }) => {
  return (
    <div className="flex items-center justify-center w-[400px]" onClick={toggleModal}>
      <button className="text-6xl rounded-full p-4 flex items-center justify-center">
        <MdOutlineAddCircleOutline />
      </button>
    </div>
  );
};
