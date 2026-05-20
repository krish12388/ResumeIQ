
function PhoneMockup() {
  return (
    <div 
            className="absolute top-10 right-[-60px] w-[280px] h-[420px] shadow-2xl overflow-hidden"
            style={{ 
              borderRadius: '36px',
              border: '6px solid #1a1a1a',
              background: 'linear-gradient(135deg, #1c1c1a 0%, #0d0d0c 100%)',
              boxShadow: '-10px 20px 40px rgba(0,0,0,0.5)'
            }}
          >
            {/* Phone Notch */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[100px] h-[24px] bg-[#1a1a1a] rounded-b-[12px] z-10"></div>
            
            {/* Warm Gradient Screen Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#4a5035] via-[#2a2d1e] to-[#111111] opacity-70"></div>
            
            {/* Fake Content on Screen */}
            <div className="absolute top-12 left-4 right-4 flex flex-col gap-3">
              <div className="w-full h-[60px] bg-white/10 rounded-xl backdrop-blur-sm"></div>
              <div className="w-3/4 h-[20px] bg-white/5 rounded-md backdrop-blur-sm"></div>
              <div className="w-full h-[120px] bg-white/10 rounded-xl backdrop-blur-sm mt-4"></div>
            </div>
          </div>
  )
}

export default PhoneMockup