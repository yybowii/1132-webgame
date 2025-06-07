"use client";

import { useState } from "react";
import StartPage from "@/components/page/StartPage";
import GamePage from "@/components/page/GamePage";
import ResultPage from "@/components/page/ResultPage";



export default function Home() {
  // redirect("/start");

  const [gameState, setGameState] = useState("start");
  //start, gaming, result


  
  return (
    <div>
      {gameState === "start" && <StartPage gameState={gameState} setGameState={setGameState}/>}
      {gameState === "gaming" && <GamePage gameState={gameState} setGameState={setGameState}/>}
      {gameState === "result" && <ResultPage gameState={gameState} setGameState={setGameState}/>}
    </div>
  );
}
