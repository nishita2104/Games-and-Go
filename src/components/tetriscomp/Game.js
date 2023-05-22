import Menu from "./Menu"
import { useGameOver } from "../../hooks/tetrishooks/useGameOver"
import Tetris from "./Tetris"

const Game = ({ rows, columns }) => {
  const [isGameOver, setGameOver, resetGameOver] = useGameOver()
  const startf = () => {
    resetGameOver()
  }

  return (
    <div className="Game">
      <h1>RULES</h1>
      {isGameOver ? (
        <Menu onClick={startf} />
      ) : (
        <Tetris rows={rows} columns={columns} setGameOver={setGameOver}/>
      )}
    </div>
  )
}

export default Game
