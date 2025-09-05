import Header from "./components/Header"
import Main from "./components/Main"
import { useState, useEffect } from "react"

export default function App() {

  return (
    <>
      <Header />
      <Main />
    </>
  )
}


// const App = () => {
//   const [starWarsData, setStarWarsData] = useState(null);
//   const [count, setCount] = useState(1);
  
//   useEffect(() => {
//     fetch(`https://swapi.info/api/people/${count}`)
//       .then(res => res.json())
//       .then(json => setStarWarsData(json))
//   },[count])

//   return (
//     <div>
//       <h2>The count is {count}</h2>
//       <button onClick={() => setCount(prevCount => prevCount +1)}>Add</button>
//       <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
//     </div>
//   )
// }

// import WindowTracker from "./components/WindowTracker"

// const App = () => {
//   const [show, setShow] = useState(true);
//   return (
//     <main className="container">
//       <button onClick={() => {setShow(prevShow => !prevShow)}}>
//         ToggleWindowTracker
//       </button>
//       {show ? <WindowTracker /> : undefined}
//     </main>
//   )
// }

// export default App;