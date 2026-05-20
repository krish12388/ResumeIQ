import React from "react";

/**
 * A reusable macOS-style window container.
 * You can wrap any content inside this component to display it within an Apple screen mockup.
 *
 * @param {React.ReactNode} children - The content to display inside the window.
 * @param {string} title - Optional title to display in the top bar.
 * @param {string} className - Optional Tailwind classes for the outer container (e.g., width, height).
 */
function MacWindow({ children, title = "", className = "w-full max-w-5xl" }) {
  return (
    <div
      className={`rounded-2xl overflow-hidden shadow-2xl flex p-4 gap-2 flex-col ${className}`}
      style={{
        border: "1px solid rgba(255, 255, 255, 0.1)",
        backgroundColor: "#0a0a0a",
        boxShadow:
          "0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(0,0,0,0.5)",
      }}
    >
      {/* Mac Window Header */}
      <div
        className="h-12 w-full flex items-center px-4 relative select-none mb-4"
        style={{
          backgroundColor: "#1a1a1a",
          borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
        }}
      >
        {/* Window Controls */}
        <div className="flex items-center gap-2 absolute left-4">
          <div className="w-3.5 h-3.5 rounded-full bg-[#ff5f56] hover:bg-[#ff4b4b] transition-colors cursor-pointer shadow-[inset_0_0_4px_rgba(0,0,0,0.2)]"></div>
          <div className="w-3.5 h-3.5 rounded-full bg-[#ffbd2e] hover:bg-[#ffb01f] transition-colors cursor-pointer shadow-[inset_0_0_4px_rgba(0,0,0,0.2)]"></div>
          <div className="w-3.5 h-3.5 rounded-full bg-[#27c93f] hover:bg-[#1fbc35] transition-colors cursor-pointer shadow-[inset_0_0_4px_rgba(0,0,0,0.2)]"></div>
        </div>

        {/* Optional Title or Browser Search Bar effect */}
        {title ? (
          <div className="w-full text-center text-[13px] text-[#888] font-medium tracking-wide">
            {title}
          </div>
        ) : (
          <div className="w-full flex justify-center">
            <div className="w-64 h-7 bg-[#0a0a0a] rounded-md border border-white/5 opacity-50"></div>
          </div>
        )}
      </div>

      {/* Window Content */}
      <div className="flex-1 overflow-hidden relative g-2 bg-[#0a0a0a]">
        {/* Optional Glare Effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.02] to-transparent pointer-events-none z-50"></div>

        {/* User Content renders here */}
        <div className="relative w-full h-full z-10 flex flex-col">
          {children ? (
            children
          ) : (
            // Dummy Content Dashboard Mockup
            <div className="flex-1 min-h-[480px] flex p-6 sm:p-8 gap-6 sm:gap-8 w-full">
              {/* Dummy Sidebar */}
              <div className="w-56 bg-[#111] rounded-xl flex flex-col gap-4 p-5 border border-white/5 hidden sm:flex">
                <div className="w-full h-8 bg-white/10 rounded-lg mb-4"></div>
                <div className="w-3/4 h-5 bg-white/5 rounded-md mt-2"></div>
                <div className="w-5/6 h-5 bg-white/5 rounded-md mt-2"></div>
                <div className="w-4/6 h-5 bg-white/5 rounded-md mt-2"></div>
                <div className="w-full h-5 bg-white/5 rounded-md mt-auto"></div>
              </div>

              {/* Dummy Main Content */}
              <div className="flex-1 flex flex-col gap-6 sm:gap-8">
                {/* Top Chart Area */}
                <div className="w-full min-h-[220px] bg-gradient-to-br from-[#1a1a1a] to-[#111111] rounded-2xl border border-white/5 p-6 sm:p-8 flex flex-col justify-between shadow-inner">
                  <div className="w-40 h-8 bg-white/10 rounded-lg mb-6"></div>
                  <div className="flex items-end gap-3 sm:gap-4 h-28 w-full overflow-hidden">
                    <div className="flex-1 h-[40%] bg-blue-500/30 rounded-t-md"></div>
                    <div className="flex-1 h-[60%] bg-blue-500/40 rounded-t-md"></div>
                    <div className="flex-1 h-[30%] bg-blue-500/30 rounded-t-md"></div>
                    <div className="flex-1 h-[80%] bg-blue-500/60 rounded-t-md"></div>
                    <div className="flex-1 h-[50%] bg-blue-500/40 rounded-t-md"></div>
                    <div className="flex-1 h-[90%] bg-blue-500/80 shadow-[0_0_20px_rgba(59,130,246,0.6)] rounded-t-md relative">
                      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-2 h-2 bg-white rounded-full shadow-[0_0_10px_white]"></div>
                    </div>
                    <div className="flex-1 h-[70%] bg-blue-500/50 rounded-t-md"></div>
                  </div>
                </div>

                {/* Bottom Stats Area */}
                <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 flex-1">
                  {/* Text lines */}
                  <div className="flex-2 g-2 bg-[#111] rounded-2xl border border-white/5 p-6 sm:p-8 flex flex-col justify-center">
                    <div className="w-32 h-6 bg-white/10 rounded-md mb-6"></div>
                    <div className="w-full h-4 bg-white/5 rounded-full mb-4"></div>
                    <div className="w-full h-4 bg-white/5 rounded-full mb-4"></div>
                    <div className="w-3/4 h-4 bg-white/5 rounded-full mb-4"></div>
                    <div className="w-1/2 h-4 bg-white/5 rounded-full"></div>
                  </div>

                  {/* Circular widget */}
                  <div className="flex-1 bg-[#111] rounded-2xl border border-white/5 p-6 sm:p-8 flex items-center justify-center">
                    <div className="w-32 h-32 rounded-full border-[5px] border-white/5 border-t-emerald-400 border-r-emerald-400 shadow-[0_0_25px_rgba(52,211,153,0.15)] flex items-center justify-center">
                      <span className="text-emerald-400 font-bold text-2xl">
                        76%
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MacWindow;
