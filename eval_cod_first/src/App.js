import "./App.css";
import { AddRecipe } from "./components/AddRecipe";
import { Recipe } from "./components/Recipe";
import { Details } from "./components/Details";

function App() {
  return (
    <div className="App">
      <AddRecipe />
      <Recipe />
      <Details />
    </div>
  );
}

export default App;