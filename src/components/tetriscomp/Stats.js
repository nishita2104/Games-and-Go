import React from "react"

import "./Stats.css"

const Stats = ({ stats }) => {
  const { level, points, linesCompleted, linesPerLevel } = stats
  const linesToLevel = linesPerLevel - linesCompleted

  return (
    <ul className="Stats Stats__left">
      <li className="stat_item"><b>Level</b><br/><br/>{level}</li>
      <li className="stat_value"></li>
      {/* <li>Lines to level</li>
      <li className="stat_value">{linesToLevel}</li> */}
      <li className="stat_item">Points<br></br><br></br>{points}</li>
      <li className="stat_value"></li>
    </ul>
  )
}

export default React.memo(Stats)
//renders only when stats change otherwise not
