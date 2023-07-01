/* eslint-disable react/prop-types */

import { MdOutlineDelete, MdModeEdit } from "react-icons/md";
import { useRecipes } from "../contexts/RecipeContext";
import { Link } from "react-router-dom";

export const RecipeCard = ({ recipe }) => {
  const { title, mediaURL, cuisineType } = recipe;
  const { dispatch } = useRecipes();

  const onDeleteClick = (id) => {
    dispatch({ type: "delete_recipe", payload: { id } });
  };

  return (
    <div className="p-4 rounded-lg shadow-xl flex flex-col w-[400px] relative">
      <div className="w-full">
        <img src={mediaURL} alt="" className="rounded-lg" />
      </div>

      <h1 className="text-5xl font-bold my-6 ">{title}</h1>
      <p className="text-2xl font-bold">Cuisine Type: {cuisineType}</p>
      <Link to={`/recipes/${recipe.id}`}>
        <p className="text-2xl font-bold">Ingredients: See Recipe {">"}</p>
      </Link>

      <Link to={`/recipes/${recipe.id}`}>
        <p className="text-2xl font-bold">Instructions: See Recipe {">"}</p>
      </Link>

      <div className="absolute right-0 px-4 py-1 flex gap-4  bg-white">
        <button>
          <MdModeEdit fontSize={32} />
        </button>

        <button className="pr-4" onClick={() => onDeleteClick(recipe.id)}>
          <MdOutlineDelete fontSize={32} />
        </button>
      </div>
    </div>
  );
};
