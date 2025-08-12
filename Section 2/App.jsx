import Header from "./components/Header";
import Entry from "./components/Entry";
import entryData from "./data/entryData";

const App = () => {
  const entryElements = entryData.map((entry) => {
    return (
      <Entry 
        key={entry.id}
        {...entry}
      />
    )
  })
  
  return (
    <>
      <Header />
      <main className="container">
        {entryElements}
      </main>
    </>
  )
}

export default App;