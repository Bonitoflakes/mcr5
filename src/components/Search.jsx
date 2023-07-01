/* eslint-disable react/prop-types */
export const Search = ({ search, handleQuery, handleFilter }) => {
  return (
    <div className="flex border rounded-lg gap-4 p-1">
      <input
        placeholder="Search the item you want..."
        type="text"
        className="focus-within:outline-gray-700 px-2 rounded-lg"
        value={search.query}
        onChange={handleQuery}
      />

      <div className="flex items-center gap-4">
        <h4 className="text-lg font-medium">Filters: </h4>

        <label className="flex items-center gap-1" htmlFor="Name">
          <input
            type="radio"
            value="Name"
            id="Name"
            name="recipeFilter"
            onChange={handleFilter}
            checked={search.filter === "Name"}
          />
          <p>Name</p>
        </label>

        <label className="flex items-center gap-1" htmlFor="Ingredients">
          <input
            type="radio"
            value="Ingredients"
            id="Ingredients"
            name="recipeFilter"
            onChange={handleFilter}
            checked={search.filter === "Ingredients"}
          />{" "}
          Ingredients
        </label>

        <label className="flex items-center gap-1" htmlFor="Cuisine">
          <input
            type="radio"
            value="Cuisine"
            id="Cuisine"
            name="recipeFilter"
            onChange={handleFilter}
            checked={search.filter === "Cuisine"}
          />{" "}
          Cuisine
        </label>
      </div>
    </div>
  );
};
