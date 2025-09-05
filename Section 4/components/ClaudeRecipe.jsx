import ReactMarkdown from 'react-markdown'

const ClaudeRecipe = (props) => {
  return (
    <section>
      <h2>Chef Claude Recommends:</h2>
      <article className="suggested-recipe-container" aria-live="polite">
        <ReactMarkdown>{props.recipe}</ReactMarkdown>
      </article>
    </section>
  )
}

export default ClaudeRecipe;