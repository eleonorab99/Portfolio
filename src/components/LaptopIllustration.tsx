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
      }`}
    >
      {/* Ombra sotto */}
      <div className="absolute left-1/2 -translate-x-1/2 top-56 w-96 h-10 bg-black opacity-20 rounded-full blur-2xl"></div>
      {/* Corpo laptop */}
      <div className="relative flex flex-col items-center">
        {/* Schermo */}
        <div className="w-[420px] h-[260px] bg-gradient-to-br from-gray-700 to-gray-900 rounded-t-[1.5rem] shadow-2xl border-8 border-gray-800 relative z-10 flex items-center justify-center">
          {/* --- Qui resta il tuo schermo interno, non toccare questa parte --- */}
          <div className="absolute inset-4 bg-black rounded-lg overflow-hidden">
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
          {/* Cornice superiore - webcam */}
          <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-500 rounded-full"></div>
        </div>
        {/* Cerniera */}
        <div className="w-[340px] h-4 bg-gray-800 rounded-b-2xl -mt-1 z-0 flex items-center justify-center">
          <div className="w-16 h-1 bg-gray-600 rounded-full"></div>
        </div>
        {/* Base laptop */}
        <div className="w-[420px] h-[140px] bg-gray-400 rounded-b-[1.5rem] shadow-2xl border-t-4 border-gray-700 flex flex-col items-center relative z-0">
          {/* Tastiera stilizzata */}
          <div className="w-[340px] mx-auto mt-4 grid grid-cols-14 gap-1">
            {Array.from({ length: 56 }).map((_, i) => (
              <div
                key={i}
                className="h-3 w-3 bg-gray-900 rounded-sm shadow-md"
                style={{
                  gridColumn: (i % 14) + 1,
                  marginLeft: i % 14 === 0 ? "4px" : "0",
                  border: "1px solid rgba(255,255,255,0.1)"
                }}
              ></div>
            ))}
          </div>
          {/* Trackpad */}
          <div className="w-24 h-6 bg-gray-600 rounded-md mx-auto mt-3 shadow-inner border border-gray-500">
            <div className="w-full h-full flex justify-center items-center">
              <div className="w-8 h-1 bg-gray-500 opacity-30 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaptopIllustration;
