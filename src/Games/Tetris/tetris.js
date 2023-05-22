import React from "react"
import "./tetris.css"

import Game from "../../components/tetriscomp/Game"

export default function Tetris() {
  return (
    <div className="App">
      <Game rows={20} columns={10} />
      <h1>Hello</h1>
    </div>
  )
}
