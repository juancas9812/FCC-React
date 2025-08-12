const Joke = (props) => {
  // props: setup, punchline
  return (
    <>
      <p>{props.setup}</p>
      <p>{props.punchline}</p>
      <hr />
    </>
  )
}

export default Joke;