import { useState, useCallback } from "react"

const buildStats = () => ({
  level: 1,
  linesCompleted: 0,
  linesPerLevel: 10,
  points: 0,
})

export const useStats = () => {
  const [stats, setStats] = useState(buildStats())

  const addLinesCleared = useCallback(() => {}, [])
  return [stats, addLinesCleared]
}
