import {createRoot} from "react-dom/client"
import App from "./App"


const root = createRoot(document.getElementById("root"))
root.render(
  <App />
)



// import { createRoot } from "react-dom/client"
// import { Contact } from "./components/Contact"

// function App() {
//   return (
//     <div className="contacts">
//       <Contact img="/images/mr-whiskerson.png" name="Mr. Whiskerson" phone="(212) 555-1234" email="mr.whiskaz@catnap.meow" />
//       <Contact img="/images/fluffykins.png" name="Fluffykins" phone="(212) 555-2345" email="fluff@me.com" />
//       <Contact img="/images/felix.png" name="Felix" phone="(212) 555-4567" email="thecat@hotmail.com" />
//       <Contact img="/images/pumpkin.png" name="Pumpkin" phone="(0800) CAT KING" email="pumpkin@scrimba.com" />
//     </div>
//   )

// }

// createRoot(document.querySelector("#root")).render(<App />);



// import { createRoot } from "react-dom/client"
// import Joke from "./components/Joke";
// import jokesData from "./data/jokesData"

// function App() {
//   const jokeElements = jokesData.map((joke) => {
//     return <Joke setup={joke.setup} punchline={joke.punchline} />
//   })
//   return (
//     <main>
//       {jokeElements}
//     </main>
//   )
// }

// createRoot(document.querySelector("#root")).render(<App />);