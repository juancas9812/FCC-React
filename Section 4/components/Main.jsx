// import { useState, useEffect } from "react"

// export default function Main() {
//   const [meme, setMeme] = useState({ topText: "One does not simply", bottomText: "Walk into Mordor", imageUrl: "http://i.imgflip.com/1bij.jpg" })
//   const [memesList, setMemesList] = useState([]);

//   useEffect(() => {
//     fetch("https://api.imgflip.com/get_memes")
//       .then(res => res.json())
//       .then(json => setMemesList(json.data.memes))
//   }, [])


//   const getRandomImage = (images) => {
//     const idx = Math.floor(Math.random()*images.length);
//     return images[idx].url;
//   }

//   const getNewImage = () => {
//     setMeme(prevMeme => ({
//       ...prevMeme,
//       imageUrl: getRandomImage(memesList)
//     }))
//   }

//   const handleChange = (event) => {
//     // console.log(event)
//     const { name, value } = event.currentTarget
//     setMeme(prevMeme => ({ ...prevMeme, [name]: value }
//     ))
//   }

//   return (
//     <main>
//       <div className="form">
//         <label>Top Text
//           <input
//             type="text"
//             placeholder="One does not simply"
//             name="topText"
//             onChange={handleChange}
//             value={meme.topText}
//           />
//         </label>

//         <label>Bottom Text
//           <input
//             type="text"
//             placeholder="Walk into Mordor"
//             name="bottomText"
//             onChange={handleChange}
//             value={meme.bottomText}
//           />
//         </label>
//         <button onClick={getNewImage}>Get a new meme image 🖼</button>
//       </div>
//       <div className="meme">
//         <img src={meme.imageUrl} />
//         <span className="top">{meme.topText}</span>
//         <span className="bottom">{meme.bottomText}</span>
//       </div>
//     </main>
//   )
// }




//////////////
// Chef Claude
//////////////
import { useState, useRef, useEffect } from "react"
import ClaudeRecipe from "/components/ClaudeRecipe"
import IngredientsList from "/components/IngredientsList"
import { getRecipeFromMistral } from "/utils/ai"

const Main = () => {
  const [ingredients, setIngredients] = useState(["all the main spices", "pasta", "ground beef", "tomato paste"]);
  const [recipeResponse, setRecipeResponse] = useState("");

  const recipeSection = useRef(null);
  // console.log(recipeSection)

  useEffect(() => {
    if (recipeResponse !== "" && recipeSection.current !== null) {
      recipeSection.current.scrollIntoView({behavior: "smooth"});
    }
  },[recipeResponse]);

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
        <IngredientsList ingredients={ingredients} getRecipe={getRecipe} ref={recipeSection}/>
        :
        undefined
      }

      {
        recipeResponse
        ?
        <ClaudeRecipe recipe={recipeResponse}/>
        :
        undefined
      }
    </main>
  )
}

export default Main;