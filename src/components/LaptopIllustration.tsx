import React, { useEffect, useState } from "react";

const LaptopIllustration: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 500);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div
      className={`relative transition-all duration-1000 ease-out transform ${
        isLoaded
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 translate-y-10 scale-90"
      } flex justify-center`}
    >
      {/* Ombra */}
      <div className="absolute left-1/2 -translate-x-1/2 top-64 w-[60vw] max-w-[340px] h-10 bg-black opacity-30 rounded-full blur-2xl z-0"></div>
      {/* Corpo laptop */}
      <div className="relative flex flex-col items-center z-10 w-[90vw] max-w-[420px]">
        {/* Schermo */}
        <div className="w-full h-[40vw] max-w-[420px] max-h-[260px] min-h-[180px] bg-[#e0e1dd] rounded-t-[2.5rem] shadow-2xl border-[10px] border-[#7c7c7c] relative z-10 flex items-center justify-center">
          {/* --- Schermo interno, NON MODIFICARE --- */}
          <div className="absolute inset-4 bg-gray-900 rounded-lg overflow-hidden">
            <div className="w-full h-full bg-black rounded-md relative overflow-hidden">
              <div className="bg-gray-800 h-6 flex items-center px-2 space-x-1">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="p-4 text-xs font-mono leading-relaxed">
                <div className="text-purple-400">
                  import <span className="text-white">React</span> from{" "}
                  <span className="text-green-400">'react'</span>;
                </div>
                <div className="text-blue-400 mt-2">
                  function <span className="text-yellow-300">Portfolio</span>(){" "}
                  {"{"}
                </div>
                <div className="ml-4 text-blue-400">return (</div>
                <div className="ml-8 text-green-500">
                  &lt;<span className="text-red-400">div</span>{" "}
                  <span className="text-blue-300">className</span>=
                  <span className="text-green-400">"welcome"</span>&gt;
                </div>
                <div className="ml-12 text-white">Welcome to my portfolio</div>
                <div className="ml-8 text-green-500">
                  &lt;/<span className="text-red-400">div</span>&gt;
                </div>
                <div className="ml-4 text-blue-400">);</div>
                <div className="text-blue-400">{"}"}</div>
                <div className="flex items-center mt-2">
                  <div className="text-cyan-400 animate-pulse">█</div>
                </div>
              </div>
              <div className="absolute inset-0 bg-blue-500 opacity-5 animate-pulse"></div>
            </div>
          </div>
          {/* --- Fine schermo interno --- */}
          {/* Cornice superiore */}
          <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-10 h-2 bg-[#bfc0c0] rounded-full opacity-70"></div>
        </div>
        {/* Cerniera */}
        <div className="w-[40vw] max-w-[120px] h-4 bg-[#bfc0c0] rounded-b-xl -mt-1 z-0"></div>
        {/* Base laptop */}
        <div className="w-full h-[10vw] max-w-[460px] max-h-[70px] min-h-[120px] bg-gradient-to-b from-[#bfc0c0] to-[#495057] rounded-b-[1.5rem] shadow-2xl border-t-[8px] border-[#7c7c7c] flex flex-col items-center relative z-0">
          {/* Tastiera realistica */}
          <div className="w-[70%] mx-auto mt-2 grid grid-cols-14 gap-1">
            {Array.from({ length: 56 }).map((_, i) => (
              <div
                key={i}
                className="h-3 w-3 bg-[#343a40] rounded-[3px] border border-[#868e96]"
              ></div>
            ))}
          </div>
          {/* Trackpad */}
          <div className="w-12 h-4 bg-[#adb5bd] rounded-lg mx-auto mt-2 shadow-inner border border-[#868e96]"></div>
        </div>
      </div>
    </div>
  );
};

export default LaptopIllustration;
