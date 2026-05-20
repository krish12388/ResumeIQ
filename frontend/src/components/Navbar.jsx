import React from "react";
import { Link, useNavigate } from "react-router";
import { useAuth } from "../features/auth/hooks/useAuth";

const Navbar = () => {
  const { user, handleLogout } = useAuth();
  const navigate = useNavigate();

  const onLogout = async () => {
    await handleLogout();
    navigate("/");
  };
  return (
    <nav className="navbar">
      <div className="container navbar-inner">
        <div className="nav-left">
          <div className="nav-logo-mark">
            <div className="nav-logo-sq"></div>
            <div className="nav-logo-sq"></div>
            <div className="nav-logo-sq"></div>
            <div className="nav-logo-sq"></div>
          </div>
          <span className="nav-wordmark">ResumeIQ</span>
        </div>
        <div className="nav-center">
          <Link to="/">How it Works</Link>
          <Link to="/features">Features</Link>
          <Link to="/pricing">Pricing</Link>
          <Link to="/docs">Docs</Link>
          <Link to="/roast-my-resume">Roast My Resume</Link>
        </div>
        <div className="nav-right">
          {user ? (
            <button
              onClick={onLogout}
              className="nav-btn text-white"
              style={{
                background: "#ef4444",
                border: "none",
                cursor: "pointer",
              }}
            >
              Logout
            </button>
          ) : (
            <>
              <Link to="/login" className="nav-signin">
                Sign in
              </Link>
              <Link to="/register" className="nav-btn text-white">
                Get Started Free
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
