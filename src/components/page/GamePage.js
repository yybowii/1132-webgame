"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function GamePage({ gameState, setGameState, step, setStep, score, setScore }) {
  

  const handleEnd = () => {
    // 結束遊戲後，帶分數與步數跳轉到結果頁
    setGameState("result");
  };


  const [lastClickNumber, setLastClickNumber] = useState(0);

  const handleJump = (currentNumber) => {
    
    console.log(lastClickNumber, currentNumber);

    if (lastClickNumber+1 == currentNumber) {
      //跳格子成功
      console.log("跳格子成功");
      setLastClickNumber(currentNumber);
    } else {
      //跳格子失敗
      console.log("跳格子失敗");
    }
  }


  
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-blue-300">
      <h2 className="text-3xl font-bold mb-4">遊戲中</h2>

      {/* 跳跳區 */}

      {lastClickNumber}


      <div className="flex gap-3">
        <div className={`
          w-[48px] h-[48px] flex items-center justify-center border border-white
            ${lastClickNumber >= 1 ? "opacity-20" : ""}
        `} onClick={() => handleJump(1)}>
          1
        </div>

        <div className={`
          w-[48px] h-[48px] flex items-center justify-center border border-white
            ${lastClickNumber >= 2 ? "opacity-20" : ""}
        `} onClick={() => handleJump(2)}>
          2
        </div>

        <div className={`
          w-[48px] h-[48px] flex items-center justify-center border border-white
            ${lastClickNumber >= 3 ? "opacity-20" : ""}
        `} onClick={() => handleJump(3)}>
          3
        </div>
      </div>



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
