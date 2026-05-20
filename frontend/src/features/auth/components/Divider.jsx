function Divider({text}) {
  return (
    <div className="flex items-center gap-3 mb-6">
            <div className="h-px flex-1 bg-[#2e2e2e]"></div>
            <span className="text-[12px] text-[#666] uppercase tracking-wider">
              {text}
            </span>
            <div className="h-px flex-1 bg-[#2e2e2e]"></div>
          </div>
  )
}

export default Divider