"use client";

import { useState } from "react";
import StartPage from "../components/page/StartPage";
import GamePage from "../components/page/GamePage";
import ResultPage from "../components/page/ResultPage";

export default function Home() {
  const [gameState, setGameState] = useState("start");
  const [step, setStep] = useState(0);
  const [score, setScore] = useState(0);

  return (
    <div>
      {gameState === "start" && (
        <StartPage gameState={gameState} setGameState={setGameState} />
      )}
      {gameState === "gaming" && (
        <GamePage
          gameState={gameState}
          setGameState={setGameState}
          step={step}
          setStep={setStep}
          score={score}
          setScore={setScore}
        />
      )}
      {gameState === "result" && (
        <ResultPage
          gameState={gameState}
          setGameState={setGameState}
          step={step}
          setStep={setStep}
          score={score}
          setScore={setScore}
        />
      )}
    </div>
  );
}
