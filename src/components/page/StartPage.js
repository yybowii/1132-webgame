"use client";

import Image from "next/image";
import { PlayCircle } from "lucide-react";
import { useRouter } from "next/navigation";

export default function StartPage({ gameState, setGameState }) {
  

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-[#f7f6f2]">
      <div className="w-full max-w-2xl bg-[#f7f6f2] shadow-xl rounded-2xl border-2 border-[#7FCDCD] overflow-hidden">
        <div className="relative flex items-center justify-center pt-8 pb-4"></div>

        <div className="flex flex-col md:flex-row gap-6 items-stretch p-6">
          {/* 左欄 */}
          <div className="md:w-1/2 flex flex-col border rounded-lg overflow-hidden border-[#7FCDCD]">
            <div className="relative flex-grow p-4 bg-[#55B4B0] min-h-[180px] md:min-h-0">
              <Image
                src="/05-112405091.png"
                alt="game"
                fill
                className="object-contain"
              />
            </div>
            <div className="bg-[#7FCDCD]/20 p-3 md:p-4 text-center border-t border-[#7FCDCD]">
              <h2 className="text-lg font-semibold text-[#BC243C]">跳格子</h2>
            </div>
          </div>

          {/* 右欄 */}
          <div className="bg-[#7FCDCD]/10 md:w-1/2 border p-4 rounded-lg flex flex-col justify-center border-[#7FCDCD]">
            <h3 className="text-xl font-semibold mb-3 text-left text-[#E15D44]">遊戲介紹</h3>
            <p className="text-sm leading-relaxed text-left text-[#7FCDCD]">
              歡迎來到 跳格子 !<br />
              依照指定的順序點擊或滑動畫面來跳格子<br /><br />
              點錯格子就需要重來，並且隨著遊戲進行速度會越來越快<br /><br />
              最終在時間內完成越多越高分
            </p>
          </div>
        </div>

        <div className="flex justify-center pt-8 pb-8">
          <button
            onClick={ () => {
              setGameState("gaming");
            } }
            className="rounded-full text-lg px-10 py-3 clay-inset bg-[#BC243C] hover:bg-[#BC243C]/90 text-white border-2 border-white flex items-center"
          >
            <PlayCircle size={24} className="mr-2" />
            進入遊戲
          </button>
        </div>
      </div>
    </div>
  );
}
