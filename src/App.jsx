import "./App.css";
import Dice from "./components/Dice";
import { useState } from "react";
import { nanoid } from "nanoid";
import { useWindowSize } from "react-use";
import ReactConfetti from "react-confetti";
function App() {
  const { width, height } = useWindowSize();

  function generateRandomDice() {
    return new Array(10).fill(0).map(() => ({
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid(),
    }));
  }
  const [dice, setDice] = useState(generateRandomDice());
  const [rollCount, setRollCount] = useState(0);
  function hold(id) {
    setDice((oldDice) =>
      oldDice.map((die) =>
        die.id === id ? { ...die, isHeld: !die.isHeld } : die
      )
    );
  }
  let gameWon =
    dice.every((die) => die.isHeld === true) &&
    dice.every((die) => die.value === dice[0].value);
  function rollDice() {
    gameWon
      ? setRollCount(0)
      : setRollCount((prevRollCount) => prevRollCount + 1);
    if (!gameWon) {
      setDice((oldDice) =>
        oldDice.map((die) =>
          die.isHeld ? die : { ...die, value: Math.ceil(Math.random() * 6) }
        )
      );
    } else {
      setDice(generateRandomDice());
    }
  }

  const DiceElements = dice.map((dieObj) => (
    <Dice
      key={dieObj.id}
      value={dieObj.value}
      isHeld={dieObj.isHeld}
      hold={() => hold(dieObj.id)}
    />
  ));

  return (
    <main>
      {gameWon && <ReactConfetti width={width} height={height} />}
      <div aria-live="polite" className="sr-only">
        {gameWon && (
          <p>Congratulations! You won! Press "New Game" to start again.</p>
        )}
      </div>
      {gameWon ? (
        <h1 className="win-text">✨ Congratulations! Tenzies Completed!</h1>
      ) : (
        <h1 className="title">Tenzies</h1>
      )}
      <p className="instructions">
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
      <div className="dice-container">{DiceElements}</div>
      <button className="roll-dice" onClick={rollDice}>
        {gameWon ? "New Game" : " Roll"}
      </button>
      <p>Roll Count : {rollCount}</p>
    </main>
  );
}

export default App;
