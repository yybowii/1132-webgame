"use client";

export default function ResultPage({ gameState, setGameState, step, setStep, score, setScore }) {
  const handleRestart = () => {
    setScore(0);
    setStep(0);
    setGameState("gaming");
  };

  const handleBackToHome = () => {
    setScore(0);
    setStep(0);
    setGameState("start");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#f7f6f2] p-6">
      <div className="max-w-lg bg-white rounded-2xl shadow-lg p-8 text-center border-2 border-[#7FCDCD]">
        <h2 className="text-4xl font-extrabold mb-4 text-[#BC243C]">遊戲結束</h2>
        <p className="text-xl mb-2">你的分數：{score}</p>
        <p className="text-xl mb-8">你跳了 {step} 步</p>

        <div className="flex gap-4 justify-center">
          <button
            onClick={handleRestart}
            className="bg-[#55B4B0] px-6 py-3 rounded-lg text-white hover:bg-[#489D9A]"
          >
            再玩一次
          </button>
          <button
            onClick={handleBackToHome}
            className="bg-[#BC243C] px-6 py-3 rounded-lg text-white hover:bg-[#A3213A]"
          >
            回首頁
          </button>
        </div>
      </div>
    </div>
  );
}
