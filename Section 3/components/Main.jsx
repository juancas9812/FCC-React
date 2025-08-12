import { useState } from "react"
import ClaudeRecipe from "/components/ClaudeRecipe"
import IngredientsList from "/components/IngredientsList"
import { getRecipeFromMistral } from "/utils/ai"

const Main = () => {
  const [ingredients, setIngredients] = useState(["all the main spices", "pasta", "ground beef", "tomato paste"]);
  const [recipeResponse, setRecipeResponse] = useState("");

  const addIngredient = (formData) => {
    const newIngredient = formData.get("ingredient");
    setIngredients(
      prevIngredients => [
        ...prevIngredients,
        newIngredient
      ]
    )
  }

  const getRecipe = async () => {
    // setRecipeShown(prevRecipeShown => !prevRecipeShown)
    try {
      const response = await getRecipeFromMistral(ingredients);
      setRecipeResponse(response);
    } catch (error) {
      console.error("Failed request", error);
    }
  }
  
  return( 
    <main>
      {/* <form className="add-ingredient-form" onSubmit={handleSubmit}> */}
      <form className="add-ingredient-form" action={addIngredient}>
        <input 
          type="text"
          placeholder="e.g. oregano"
          aria-label="Add ingredient"
          name="ingredient"
        />
        <button>Add Ingredient</button>
      </form>
      {
        ingredients.length > 0 
        ? 
        <IngredientsList ingredients={ingredients} getRecipe={getRecipe} />
        :
        null
      }

      {
        recipeResponse
        ?
        <ClaudeRecipe recipe={recipeResponse}/>
        :
        null
      }
    </main>
  )
}

export default Main;