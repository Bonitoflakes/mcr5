/* eslint-disable react/prop-types */
import { useReducer } from "react";
import { createContext } from "react";
import { RecipeReducer, initialState } from "../reducers/Recipe.reducer";
import { useContext } from "react";

export const RecipeContext = createContext(null);

export const RecipeContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(RecipeReducer, initialState);

  const value = { state, dispatch };
  return <RecipeContext.Provider value={value}>{children}</RecipeContext.Provider>;
};

export const useRecipes = () => {
  const context = useContext(RecipeContext);
  if (!context) throw new Error("Something wrong in Recipe context");

  return context;
};
