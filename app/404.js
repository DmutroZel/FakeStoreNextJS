import { useEffect, useState } from "react";
import Link from "next/link";

export default function NotFound() {
  const [sonicPos, setSonicPos] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSonicPos(prev => {
        if (prev >= 100) return -10;
        return prev + 1;
      });
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen w-full bg-[#9ECAD6] flex flex-col relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img src="/cloud.png" alt="" className="absolute top-[10%] left-[10%] w-56 opacity-80 animate-float"/>
        
        <img src="/cloud.png" alt="" className="absolute top-[20%] right-[15%] w-56 opacity-70 animate-float"/>
        
        <img src="/cloud.png" alt="" className="absolute top-[40%] left-[5%] w-78 opacity-60 animate-float"/>
        
        <img src="/cloud.png" alt="" className="absolute top-[60%] right-[20%] w-66 opacity-75 animate-float"/>
        
        <img src="/cloud.png" alt="" className="absolute top-[15%] left-[60%] w-44 opacity-65 animate-float"/>
        
        <img src="/cloud.png" alt="" className="absolute top-[70%] left-[30%] w-76 opacity-70 animate-float"/>
      </div>


      <div className="text-center w-full h-screen flex flex-col items-center justify-center gap-8 relative z-10">
          <div className="relative flex items-center justify-center gap-4">
            <div className="text-[240px] font-bold text-[#F5CBCB] leading-none"> 4 </div>
            
            <div className="relative w-[240px] h-[240px]">
              <img src="/sonicRing.gif" alt="Ring" className="w-full h-full"/>
            </div>
            
            <div className="text-[240px] font-bold text-[#F5CBCB] leading-none"> 4 </div>
          </div> 
          <div className="absolute inset-0 w-full h-full overflow-hidden">
            <div className="absolute bottom-0 w-full h-8 bg-gradient-to-b from-green-600 to-green-700">
              <div className="absolute top-0 w-full h-2 bg-green-500"></div>
            </div>
            <div className="absolute bottom-8 transition-none" style={{ left: `${sonicPos}%`, }}>
             <img src="/sonic.gif" alt="Sonic" className="w-24 h-24"/>
            </div>
          </div>

          <Link href="/" className="w-[150px] h-[50px] flex justify-center items-center z-50 bg-[#FFEAEA] text-[#F5CBCB] text-xl font-bold px-8 py-4 rounded-full hover:bg-white hover:scale-110 hover:shadow-2xl transition-all duration-300">
            Back to home
          </Link>
        </div>
  
    </div>
  );
}