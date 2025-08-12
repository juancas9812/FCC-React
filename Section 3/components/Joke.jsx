import { useState } from "react";

const Joke = (props) => {
  const [isShown, setIsShown] = useState(false);

  const toggle = () => {
    setIsShown(prevShown => !prevShown)
  }

  console.log(isShown);

  return (
    <>
      {props.setup && <h3>{props.setup}</h3>}
      {isShown && <p>{props.punchline}</p>}
      <button onClick={toggle}>Show punchline</button>
      <hr />
    </>
  )
}

export default Joke;