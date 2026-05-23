import { useNavigate, Link } from "react-router";
import { useState } from "react";
import toast from "react-hot-toast";
import { useAuth } from "../../auth/hooks/useAuth";
function LoginForm({ handleLogin, handleGoogleLogin, loading, error }) {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async ({ email, password }) => {
    try {
      const data = await handleLogin({ email, password });
      if (data) {
        toast.success(data.message || "Login successful");
        navigate("/");
      }
    } catch (error) {
      toast.error(error.message || "Login failed");
      console.log(error);
    }
  };
  // Toasts are handled in parent Login.jsx component
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      {/* Main Container */}
      <div
        className="flex flex-col md:flex-row w-full max-w-[1000px] overflow-hidden"
        style={{
          backgroundColor: "#0a0a0a",
          borderRadius: "12px",
          minHeight: "520px",
          border: "1px solid #1a1a1a",
        }}
      >
        {/* Left Panel - Form */}
        <div
          className="w-full md:w-1/2 flex flex-col gap-2"
          style={{ padding: "52px 48px" }}
        >
          {/* Logo Mark */}
          <div className="w-[28px] h-[28px] grid grid-cols-2 grid-rows-2 gap-[2px] mb-12">
            <div className="bg-white rounded-sm"></div>
            <div className="bg-white/40 rounded-sm"></div>
            <div className="bg-white/40 rounded-sm"></div>
            <div className="bg-transparent"></div>
          </div>

          {/* Heading & Subtext */}
          <div className="mb-8">
            <h1
              className="text-white font-semibold mb-2"
              style={{
                fontSize: "30px",
                letterSpacing: "-0.5px",
                lineHeight: "1.2",
              }}
            >
              Welcome back!
            </h1>
            <p
              className="text-[#888888]"
              style={{
                fontSize: "13.5px",
                maxWidth: "320px",
                lineHeight: "1.5",
              }}
            >
              Stop guessing why you're getting rejected. Let AI analyze your
              resume and tell you exactly what you need to learn.
            </p>
          </div>

          {/* Form */}
          <form
            className="flex flex-col gap-4 mb-6"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="flex flex-col gap-1.5">
              <label
                className="text-[13px] text-[#a0a0a0]  font-medium"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                onChange={(e) => {
                  e.preventDefault();
                  setEmail(e.target.value);
                }}
                placeholder="you@example.com"
                className="w-full h-[42px] p-3  outline-none text-[14px]  text-center text-white transition-colors focus:border-[#444]"
                style={{
                  backgroundColor: "#1c1c1c",
                  border: "1px solid #2e2e2e",
                  borderRadius: "8px",
                }}
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                className="text-[13px] text-[#a0a0a0] font-medium"
                htmlFor="password"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="••••••••"
                onChange={(e) => {
                  e.preventDefault();
                  setPassword(e.target.value);
                }}
                className="w-full h-[42px] text-center outline-none text-[14px] text-white transition-colors focus:border-[#444]"
                style={{
                  backgroundColor: "#1c1c1c",
                  border: "1px solid #2e2e2e",
                  borderRadius: "8px",
                }}
              />
            </div>

            <button
              type="button"
              onClick={async (e) => {
                e.preventDefault();
                await handleSubmit({ email, password });
              }}
              className="w-full h-[42px] mt-2 flex items-center justify-center transition-opacity hover:opacity-90"
              style={{
                backgroundColor: "white",
                color: "black",
                fontWeight: 600,
                borderRadius: "8px",
                fontSize: "14px",
              }}
            >
              Sign in
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px flex-1 bg-[#2e2e2e]"></div>
            <span className="text-[12px] text-[#666] uppercase tracking-wider">
              or
            </span>
            <div className="h-px flex-1 bg-[#2e2e2e]"></div>
          </div>

          {/* Social Buttons */}
          <div className="flex items-center justify-center gap-4 mb-auto">
            {/* Google */}
            <button
              className="h-[40px] w-[160px] flex items-center justify-center hover:bg-[#222] transition-colors"
              onClick={(e) => {
                e.preventDefault();
                const data = await handleGoogleLogin();
                if (data?.success) navigate("/");
              }}
              style={{
                backgroundColor: "#181818",
                border: "1px solid #2e2e2e",
                borderRadius: "8px",
              }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
            </button>
          </div>

          {/* Footer Link */}
          <div className="mt-8 text-[13px] text-[#888]">
            Don't have an account?{" "}
            <Link className="text-[#f97316] hover:underline" to={"/register"}>
              Register
            </Link>
          </div>
        </div>

        {/* Right Panel - Decorative */}
        <div
          className="hidden md:block w-1/2 relative overflow-hidden"
          style={{ backgroundColor: "#111111" }}
        >
          {/* Top-Right Decorative Phone Mockup */}
          <div
            className="absolute top-10 right-[-60px] w-[280px] h-[420px] shadow-2xl overflow-hidden"
            style={{
              borderRadius: "36px",
              border: "6px solid #1a1a1a",
              background: "linear-gradient(135deg, #1c1c1a 0%, #0d0d0c 100%)",
              boxShadow: "-10px 20px 40px rgba(0,0,0,0.5)",
            }}
          >
            {/* Phone Notch */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[100px] h-[24px] bg-[#1a1a1a] rounded-b-[12px] z-10"></div>

            {/* Warm Gradient Screen Overlay */}
            <div className="absolute inset-0 bg-linear-to-br from-[#4a5035] via-[#2a2d1e] to-[#111111] opacity-70"></div>

            {/* Fake Content on Screen */}
            <div className="absolute top-12 left-4 right-4 flex flex-col gap-3">
              <div className="w-full h-[60px] bg-white/10 rounded-xl backdrop-blur-sm"></div>
              <div className="w-3/4 h-[20px] bg-white/5 rounded-md backdrop-blur-sm"></div>
              <div className="w-full h-[120px] bg-white/10 rounded-xl backdrop-blur-sm mt-4"></div>
            </div>
          </div>

          {/* Bottom Testimonial Card */}
          <div
            className="absolute bottom-8 left-8 right-12 p-8 backdrop-blur-md"
            style={{
              backgroundColor: "rgba(30, 30, 22, 0.85)",
              border: "1px solid #3a3a2a",
              borderRadius: "14px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
            }}
          >
            {/* Pill Tags */}
            <div className="flex gap-4 mt-2 mb-4">
              <span 
                className="text-[11px] font-medium text-[#d0d0c0] bg-[#2a2a20] rounded-full border border-[#4a4a3a]"
                style={{ padding: '6px 12px' }}
              >
                Early-Career Dev
              </span>
              <span 
                className="text-[11px] font-medium text-[#d0d0c0] bg-[#2a2a20] rounded-full border border-[#4a4a3a]"
                style={{ padding: '6px 12px' }}
              >
                Software Engineering
              </span>
            </div>

            {/* Quote text */}
            <p
              className="text-[14px] leading-relaxed mb-4"
              style={{ color: "#e8e8e0" }}
            >
              "ResumeIQ completely changed how I applied for jobs. It didn't
              just tell me my resume was weak—it gave me a day-by-day plan to
              learn exactly what I was missing. I landed three interviews the
              very next month."
            </p>

            {/* Author Attribution */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-linear-to-br from-[#666] to-[#333] flex items-center justify-center border border-[#444]">
                <span className="text-[11px] text-white font-medium">AC</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[13px] text-[#e8e8e0] font-medium">
                  Alex Chen
                </span>
                <span className="text-[12px] text-[#888]">
                  Junior Engineer,{" "}
                  <span className="font-bold text-[#aaa]">TechNova</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Internal CSS for placeholders since Tailwind requires config for placeholder colors often, though we can use pseudo-classes */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        input::placeholder {
          color: #555555;
        }
      `,
        }}
      />
    </div>
  );
}

export default LoginForm;
