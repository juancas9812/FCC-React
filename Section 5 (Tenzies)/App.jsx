import { useState, useRef, useEffect } from 'react'
import Die from './components/Die'
import { nanoid } from 'nanoid';
import Confetti from 'react-confetti'

const App = () => {
  const [dice, setDice] = useState(() => generateAllNewDice());

  let gameWon;
  if (dice.every(die => die.isHeld) && dice.every(die => die.value === dice[0].value)) {
    gameWon=true;
  }

  const diceElements = dice.map(die => {
    return (
      <Die key={die.id} id={die.id} value={die.value} isHeld={die.isHeld} hold={hold}/> 
    )
  });

  function generateAllNewDice () {
    // const newDice = [];
    // for (let i=0; i< 10; i++) {
    //   newDice.push(Math.ceil(Math.random()*6))
    // }
    // return newDice;
    return new Array(10)
      .fill(0)
      .map(() => ({
        value: Math.ceil(Math.random()*6),
        isHeld: false,
        id: nanoid()
      }))
  }

  function rollDice() {
    if (gameWon) {
      setDice(generateAllNewDice());
    }
    else {
      setDice(prevDice => prevDice.map(die => 
        !die.isHeld ? 
          {...die, value: Math.ceil(Math.random()*6)} :
          die
      ));
    }
    
  }

  function hold(id) {
    function findIdx(value,index,array) {
      return value.id===id
    }
    const position = dice.findIndex(findIdx);
    setDice(prevDice => [
        ...prevDice.slice(0,position),
        {
          ...prevDice[position],
          isHeld: !prevDice[position].isHeld
        },
        ...prevDice.slice(position+1)
      ]      
    )
  }

  const newGameRef = useRef(null);
  useEffect(() => {
      if (gameWon &&  newGameRef.current !== null) {
        newGameRef.current.focus();
      }
    },[gameWon]);

  return ( 
    <main>
      {gameWon ? <Confetti />: undefined}
      <div aria-live="polite" className="sr-only">
        {gameWon ? <p>Congratulations! You won! Press "New Game" to start again.</p> : undefined}
      </div>
      <h1 className="title">Tenzies</h1>
      <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <div className="dice">
        {diceElements}
      </div>
      <button
        className='roll-dice'
        type='button'
        onClick={rollDice}
        ref={newGameRef}
      >
        {gameWon ? "New Game" : "Roll"}
      </button>
    </main>
  )
}

export default App;