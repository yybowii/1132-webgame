"use client";

import { useRouter, useSearchParams } from "next/navigation";

export default function ResultPage({ gameState, setGameState, step, setStep, score, setScore }) {
  

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#f7f6f2] p-6">
      <div className="max-w-lg bg-white rounded-2xl shadow-lg p-8 text-center border-2 border-[#7FCDCD]">
        <h2 className="text-4xl font-extrabold mb-4 text-[#BC243C]">遊戲結束</h2>
        <p className="text-xl mb-2">你的分數：{score}</p>
        <p className="text-xl mb-8">你跳了 {steps} 步</p>

        <div className="flex gap-4 justify-center">
          <button
            onClick={() => setGameState("gaming")}
            className="bg-[#55B4B0] px-6 py-3 rounded-lg text-white hover:bg-[#489D9A]"
          >
            再玩一次
          </button>
          <button
            onClick={() => setGameState("start")}
            className="bg-[#BC243C] px-6 py-3 rounded-lg text-white hover:bg-[#A3213A]"
          >
            回首頁
          </button>
        </div>
      </div>
    </div>
  );
}
