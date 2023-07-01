/* eslint-disable react/prop-types */

import { useRecipes } from "../contexts/RecipeContext";

export const AddRecipeModal = ({ toggleModal }) => {
  const { dispatch } = useRecipes();

const onSubmit = (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData);

  const instructions = data.instructions.split("\n");
  const description = data.description.split("\n");
  const ingredients = data.ingredients.split("\n");

  const body = {
    data,
    instructions,
    description,
    ingredients,
  };

  console.table(body);

  dispatch({ type: "add_recipe", payload: body });
  toggleModal();
};

  return (
    <div className="absolute top-0 w-full h-full right-0 bottom-0 backdrop-blur-md p-10">
      <form onSubmit={onSubmit} className="bg-slate-500 w-full h-full flex flex-col p-8">
        <div className="flex justify-between mb-8">
          <h1 className="text-4xl font-bold">Add a Recipe</h1>
          <button type="submit" className="uppercase bg-green-400 py-1 px-4 rounded-3xl">
            Save
          </button>
        </div>

        <InputField name="title" label="Title:" type="text" required />
        <InputField name="description" label="Description:" type="textarea" required />
        <InputField name="prepTime" label="Preparation Time:" type="text" required />
        <InputField name="cookTime" label="Cooking Time:" type="text" required />
        <InputField name="mediaURL" label="Media URL:" type="text" required />
        <InputField name="cuisineType" label="Cuisine Type:" type="text" required />
        <InputField name="ingredients" label="Ingredients:" type="textarea" required />
        <InputField name="instructions" label="Instructions:" type="textarea" required />
      </form>
    </div>
  );
};

const InputField = ({ name, label, type, required }) => (
  <>
    <label className="text-lg font-semibold mt-4" htmlFor={name}>
      {label}
    </label>
    {type === "textarea" ? (
      <textarea name={name} className="px-4 p-1 rounded-lg" id={name} required={required} />
    ) : (
      <input name={name} className="rounded-lg p-1 px-4" type={type} id={name} required={required} />
    )}
  </>
);
