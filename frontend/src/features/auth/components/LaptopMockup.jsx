import React, { useState, useEffect } from 'react';

function LaptopMockup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Trigger the open animation shortly after mounting
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div 
      className="absolute top-16 right-[-40px] w-[380px] flex flex-col items-center drop-shadow-2xl transition-transform hover:scale-105 duration-500"
      style={{ zIndex: 10, perspective: '1200px' }}
    >
      {/* Screen Frame (Lid) */}
      <div 
        className="w-full h-[240px] rounded-t-xl overflow-hidden relative z-20"
        style={{ 
          border: '4px solid #1a1a1a',
          borderBottom: 'none',
          background: 'linear-gradient(135deg, #161616 0%, #0a0a0a 100%)',
          transformOrigin: 'bottom center',
          transform: isOpen ? 'rotateX(0deg)' : 'rotateX(-95deg)',
          transition: 'transform 1.5s cubic-bezier(0.25, 1, 0.3, 1)',
          transformStyle: 'preserve-3d'
        }}
      >
        {/* Inner Screen */}
        <div 
          className="absolute inset-0 bg-[#0d0d0d] overflow-hidden flex flex-col transition-opacity duration-1000"
          style={{ 
            opacity: isOpen ? 1 : 0, 
            transitionDelay: isOpen ? '0.6s' : '0s' 
          }}
        >
          {/* Top Bar (Browser/App Header) */}
          <div className="h-6 w-full bg-[#1a1a1a] flex items-center px-3 gap-1.5 border-b border-[#2e2e2e]">
            <div className="w-2 h-2 rounded-full bg-[#ff5f56]"></div>
            <div className="w-2 h-2 rounded-full bg-[#ffbd2e]"></div>
            <div className="w-2 h-2 rounded-full bg-[#27c93f]"></div>
            <div className="mx-auto w-32 h-2 bg-[#2e2e2e] rounded-full"></div>
          </div>
          
          {/* Content */}
          <div className="flex-1 p-3 flex gap-3 h-full">
            {/* Sidebar */}
            <div className="w-14 h-full flex flex-col gap-2">
              <div className="w-full h-6 bg-[#2a2a2a] rounded-md"></div>
              <div className="w-full h-4 bg-white/5 rounded-md mt-2"></div>
              <div className="w-full h-4 bg-white/5 rounded-md"></div>
              <div className="w-full h-4 bg-white/5 rounded-md"></div>
              <div className="w-full h-4 bg-white/5 rounded-md mt-auto"></div>
            </div>
            {/* Main Area */}
            <div className="flex-1 flex flex-col gap-3">
              <div className="w-full h-20 bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] rounded-lg border border-[#333] flex p-2">
                 <div className="w-8 h-8 rounded-full bg-[#3a3a3a] mr-2"></div>
                 <div className="flex flex-col gap-1 mt-1">
                    <div className="w-24 h-2 bg-[#555] rounded-full"></div>
                    <div className="w-16 h-2 bg-[#444] rounded-full"></div>
                 </div>
              </div>
              <div className="flex gap-3">
                 <div className="flex-1 h-16 bg-[#1a1a1a] rounded-lg border border-[#333] p-2 flex flex-col justify-end">
                    <div className="w-full h-8 bg-gradient-to-t from-[#f97316]/20 to-transparent border-b-2 border-[#f97316]"></div>
                 </div>
                 <div className="flex-1 h-16 bg-[#1a1a1a] rounded-lg border border-[#333] p-2 flex flex-col justify-end">
                    <div className="w-full h-6 bg-gradient-to-t from-[#4285F4]/20 to-transparent border-b-2 border-[#4285F4]"></div>
                 </div>
              </div>
            </div>
          </div>
          
          {/* Overlay gradient for screen glare */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none"></div>
        </div>
      </div>
      
      {/* Laptop Base */}
      <div 
        className="w-[420px] h-[14px] rounded-b-xl relative z-10"
        style={{ 
          backgroundColor: '#222',
          borderTop: '1px solid #333',
          boxShadow: '0 15px 35px rgba(0,0,0,0.8)'
        }}
      >
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[70px] h-[4px] bg-[#111] rounded-b-md shadow-inner"></div>
      </div>
    </div>
  );
}

export default LaptopMockup;
