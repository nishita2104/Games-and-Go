import { useCallback, useState } from "react"

export const useGameOver =()=>{
    const [isGameOver,setGameOver]=useState(true);
    const resetGameOver=useCallback(()=>{
        setGameOver(false);
    },[])

    return [isGameOver,setGameOver,resetGameOver];
}