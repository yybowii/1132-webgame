"use client";

import { useState, useEffect, useRef } from "react";
import useSound from "use-sound";

export default function GamePage({ gameState, setGameState, step, setStep, score, setScore }) {
  const [lastClickNumber, setLastClickNumber] = useState(0);
  const [timeLeft, setTimeLeft] = useState(15);
  const [gridData, setGridData] = useState([]);

  const [playClick] = useSound("/assets/click.mp3");
  const [playError] = useSound("/assets/error.mp3");

  const gridCols = 10;
  const gridRows = 10;

  // Generate grid layout with different sizes but fixed number order
  useEffect(() => {
    const newGrid = [];
    let num = 1;
    while (num <= 50) {
      const colSpan = Math.floor(Math.random() * 2) + 1; // 1 or 2
      const rowSpan = Math.floor(Math.random() * 2) + 1; // 1 or 2
      newGrid.push({
        number: num,
        colSpan,
        rowSpan,
      });
      num++;
    }
    setGridData(newGrid);
  }, [gameState]);

  // Countdown timer
  useEffect(() => {
    if (timeLeft <= 0) {
      setGameState("result");
      return;
    }
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const handleJump = (currentNumber) => {
    if (lastClickNumber + 1 === currentNumber) {
      playClick();
      setLastClickNumber(currentNumber);
      setStep((prev) => prev + 1);
      setScore((prev) => prev + 10);
    } else {
      playError();
      setScore((prev) => prev - 5);
      if (navigator.vibrate) navigator.vibrate(200);
    }
  };

  const handleEnd = () => {
    setGameState("result");
  };

  const colors = ["#BC243C", "#7FCDCD", "#E15D44", "#55B4B0"];

  return (
    <div className="h-screen flex flex-col bg-white">
      {/* Score + Timer */}
      <div className="p-4 bg-gray-100 flex justify-between items-center text-lg font-semibold">
        <div>步數：{step}</div>
        <div>分數：{score}</div>
        <div className="text-red-500">倒數：{timeLeft}s</div>
        <button
          onClick={handleEnd}
          className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
        >
          結束遊戲
        </button>
      </div>

      {/* Grid Area */}
      <div
        className="grid flex-grow gap-0"
        style={{
          gridTemplateColumns: `repeat(${gridCols}, 1fr)`,
          gridTemplateRows: `repeat(${gridRows}, 1fr)`
        }}
      >
        {gridData.map((cell, index) => {
          const isClicked = cell.number <= lastClickNumber;
          const color = colors[index % colors.length];

          return (
            <div
              key={cell.number}
              onClick={() => handleJump(cell.number)}
              style={{
                gridColumn: `span ${cell.colSpan}`,
                gridRow: `span ${cell.rowSpan}`,
                backgroundColor: color,
                opacity: isClicked ? 0.2 : 1,
              }}
              className="flex items-center justify-center text-white font-bold text-xl cursor-pointer hover:scale-105 transition-transform"
            >
              {cell.number}
            </div>
          );
        })}
      </div>
    </div>
  );
}
