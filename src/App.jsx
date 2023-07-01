import { Routes } from "react-router-dom";
import HomePage from "./pages/Home.page";
import { Route } from "react-router-dom";
import { RecipePage } from "./pages/Recipe.page";

export default function App() {
  return (
    <div className="m-4">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recipes/:recipeId" element={<RecipePage />} />
      </Routes>
    </div>
  );
}
