import "./Tetris.css"
import Board from "./Board.js"
import Stats from "./Stats"
import { useStats } from "../../hooks/tetrishooks/useStats"
import { useBoard } from "../../hooks/tetrishooks/useBoard"

const Tetris = ({ rows, columns, setGameOver }) => {
  const [stats, addLinesCleared] = useStats()
  const [board, setBoard] = useBoard({ rows, columns })

  return (
    <div className="Tetris">
      <Board board={board} />
      <Stats stats={stats} />
      
    </div>
  )
}

export default Tetris
