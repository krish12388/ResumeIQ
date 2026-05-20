import React from 'react';

function AiMockup() {
  return (
    <div 
      className="absolute top-12 right-[-20px] w-[340px] h-[340px] overflow-hidden rounded-3xl transition-transform hover:translate-y-[-5px] duration-500 flex flex-col items-center justify-end pb-4"
      style={{ 
        border: '1px solid rgba(255,255,255,0.08)',
        background: 'linear-gradient(180deg, #111111 0%, #050505 100%)',
        boxShadow: '0 20px 40px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.1)'
      }}
    >
      {/* Background glow behind robot */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[240px] h-[240px] bg-blue-500/10 blur-[60px] rounded-full pointer-events-none z-0"></div>

      {/* Robot Agent Container (Floating animation) */}
      <div className="relative z-10 flex flex-col items-center mt-6 ">
        
        {/* Head */}
        <div 
           className="relative w-[160px] h-[135px] flex items-center justify-center z-20"
           style={{
              background: 'linear-gradient(145deg, #ffffff 0%, #d1d5db 70%, #9ca3af 100%)',
              borderRadius: '50% 50% 45% 45% / 55% 55% 45% 45%',
              boxShadow: '0 15px 25px rgba(0,0,0,0.6), inset -5px -10px 20px rgba(0,0,0,0.2), inset 5px 10px 15px rgba(255,255,255,0.9)'
           }}
        >
           {/* Glowing Visor */}
           <div 
              className="relative w-[130px] h-[85px] mt-2 rounded-[60px] flex items-center justify-center gap-6 overflow-hidden"
              style={{
                 background: '#050505',
                 boxShadow: 'inset 0 0 15px #000, 0 0 20px rgba(56, 189, 248, 0.5), inset 0 0 15px rgba(56, 189, 248, 0.4)',
                 border: '2px solid rgba(56, 189, 248, 0.9)'
              }}
           >
              {/* Left Eye */}
              <div 
                 className="w-9 h-11 rounded-3xl animate-pulse"
                 style={{
                    background: 'radial-gradient(circle, rgba(253, 224, 71, 1) 0%, rgba(202, 138, 4, 0.9) 70%)',
                    backgroundImage: 'radial-gradient(#fef08a 25%, transparent 26%), radial-gradient(#fef08a 25%, transparent 26%)',
                    backgroundSize: '4px 4px',
                    backgroundPosition: '0 0, 2px 2px',
                    boxShadow: '0 0 12px rgba(253, 224, 71, 0.6)'
                 }}
              ></div>
              {/* Right Eye */}
              <div 
                 className="w-9 h-11 rounded-3xl animate-pulse"
                 style={{
                    background: 'radial-gradient(circle, rgba(253, 224, 71, 1) 0%, rgba(202, 138, 4, 0.9) 70%)',
                    backgroundImage: 'radial-gradient(#fef08a 25%, transparent 26%), radial-gradient(#fef08a 25%, transparent 26%)',
                    backgroundSize: '4px 4px',
                    backgroundPosition: '0 0, 2px 2px',
                    boxShadow: '0 0 12px rgba(253, 224, 71, 0.6)',
                    animationDelay: '200ms'
                 }}
              ></div>

              {/* Visor Glass Glare */}
              <div className="absolute top-[-5px] left-6 w-[90px] h-[35px] rounded-[50px] bg-white/10 blur-[1px] rotate-[-8deg] pointer-events-none"></div>
           </div>
        </div>

        {/* Neck */}
        <div className="w-[45px] h-[18px] bg-gradient-to-r from-[#111] via-[#333] to-[#111] -mt-3 z-10 border-x-2 border-[#000] rounded-b-sm shadow-inner"></div>

        {/* Torso & Arms Container */}
        <div className="relative flex justify-center -mt-2 z-20">
            {/* Left Arm */}
            <div className="absolute left-[-35px] top-[15px] w-[35px] h-[85px] z-10 origin-top animate-[swing-left_4s_ease-in-out_infinite]" style={{ animationDirection: 'alternate' }}>
               <div className="w-full h-full rounded-full" style={{ background: 'linear-gradient(145deg, #ffffff, #9ca3af)', boxShadow: 'inset -4px -6px 12px rgba(0,0,0,0.4), 5px 5px 10px rgba(0,0,0,0.5)' }}></div>
            </div>

            {/* Torso */}
            <div 
               className="w-[110px] h-[120px] z-20 flex flex-col items-center pt-4 relative"
               style={{
                  background: 'linear-gradient(145deg, #ffffff 0%, #d1d5db 70%, #9ca3af 100%)',
                  borderRadius: '40% 40% 45% 45%',
                  boxShadow: '0 15px 25px rgba(0,0,0,0.5), inset -5px -10px 20px rgba(0,0,0,0.3), inset 5px 10px 15px rgba(255,255,255,0.9)'
               }}
            >
               {/* Chest detail (AI Logo) */}
               <div className="w-[45px] h-[20px] border border-gray-400 rounded-full flex items-center justify-center opacity-60">
                  <span className="text-[10px] font-black text-gray-500 tracking-widest">AI</span>
               </div>
               
               {/* Belly detail (Orange Vents) */}
               <div className="absolute bottom-3 w-[55px] h-[45px] bg-gradient-to-b from-[#222] to-[#0a0a0a] rounded-b-[20px] rounded-t-[5px] flex flex-col items-center justify-center gap-[3px] shadow-[inset_0_0_15px_#000] border border-[#333]">
                  <div className="w-8 h-1.5 bg-[#f97316] rounded-full shadow-[0_0_6px_#f97316] opacity-90"></div>
                  <div className="w-6 h-1.5 bg-[#f97316] rounded-full shadow-[0_0_6px_#f97316] opacity-90"></div>
                  <div className="w-8 h-1.5 bg-[#f97316] rounded-full shadow-[0_0_6px_#f97316] opacity-90"></div>
               </div>
            </div>

            {/* Right Arm */}
            <div className="absolute right-[-35px] top-[15px] w-[35px] h-[85px] z-10 origin-top animate-[swing-right_4s_ease-in-out_infinite]" style={{ animationDirection: 'alternate-reverse' }}>
               <div className="w-full h-full rounded-full" style={{ background: 'linear-gradient(145deg, #ffffff, #9ca3af)', boxShadow: 'inset -4px -6px 12px rgba(0,0,0,0.4), -5px 5px 10px rgba(0,0,0,0.5)' }}></div>
            </div>
        </div>

        {/* Base/Legs */}
        <div className="flex gap-3 -mt-6 z-10">
            <div className="w-[50px] h-[55px] rounded-[25px] relative overflow-hidden" style={{ background: 'linear-gradient(145deg, #f3f4f6, #9ca3af)', boxShadow: '0 10px 15px rgba(0,0,0,0.6), inset -3px -8px 12px rgba(0,0,0,0.4)' }}>
               <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-6 h-1.5 bg-[#222] rounded-full"></div>
            </div>
            <div className="w-[50px] h-[55px] rounded-[25px] relative overflow-hidden" style={{ background: 'linear-gradient(145deg, #f3f4f6, #9ca3af)', boxShadow: '0 10px 15px rgba(0,0,0,0.6), inset -3px -8px 12px rgba(0,0,0,0.4)' }}>
               <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-6 h-1.5 bg-[#222] rounded-full"></div>
            </div>
        </div>

      </div>

      {/* Internal Styles for keyframes */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes swing-left {
          0% { transform: rotate(8deg); }
          100% { transform: rotate(-4deg); }
        }
        @keyframes swing-right {
          0% { transform: rotate(-8deg); }
          100% { transform: rotate(4deg); }
        }
      `}} />
      
      {/* Floating status text */}
      <div className="absolute top-5 left-5 flex items-center gap-2 z-30 bg-black/40 px-3 py-1.5 rounded-full backdrop-blur-md border border-white/10">
          <div className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399] animate-pulse"></div>
          <span className="text-white/80 text-[10px] font-bold tracking-widest uppercase">Agent Online</span>
      </div>
    </div>
  );
}

export default AiMockup;
