"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function GamePage() {
  const router = useRouter();

  const [page, setPage] = useState("start");
  const [score, setScore] = useState(0);
  const [step, setStep] = useState(0);

  const handleStart = () => {
    setPage("game");
    setScore(0);
    setStep(0);
  };

  const handleJump = () => {
    setStep((prev) => prev + 1);
    setScore((prev) => prev + 10);
  };

  const handleEnd = () => {
    // 結束遊戲後，帶分數與步數跳轉到結果頁
    router.push(`/result?score=${score}&steps=${step}`);
  };

  if (page === "start") {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-blue-100">
        <h2 className="text-3xl font-bold mb-4">準備開始遊戲</h2>
        <button
          onClick={handleStart}
          className="bg-blue-500 px-6 py-3 rounded-full text-white text-lg hover:bg-blue-600"
        >
          開始遊戲
        </button>
      </div>
    );
  }

  if (page === "game") {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-blue-100">
        <h2 className="text-3xl font-bold mb-4">遊戲中</h2>
        <p className="mb-2">你已經跳了 {step} 步</p>
        <p className="mb-6">目前分數：{score}</p>
        <div className="flex gap-4">
          <button
            onClick={handleJump}
            className="bg-blue-400 px-5 py-2 rounded-lg hover:bg-blue-500 text-white"
          >
            跳！
          </button>
          <button
            onClick={handleEnd}
            className="bg-gray-500 px-5 py-2 rounded-lg hover:bg-gray-600 text-white"
          >
            結束
          </button>
        </div>
      </div>
    );
  }

  return null;
}
