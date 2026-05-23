import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router";
import { useAuth } from "../features/auth/hooks/useAuth";

const Navbar = () => {
  const { user, handleLogout } = useAuth();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const onLogout = async () => {
    await handleLogout();
    setMenuOpen(false);
    navigate("/");
  };

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  // Close menu on route change / scroll lock
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const navLinks = [
    { to: "/", label: "How it Works" },
    { to: "/features", label: "Features" },
    { to: "/pricing", label: "Pricing" },
    { to: "/docs", label: "Docs" },
    { to: "/roast-my-resume", label: "Roast My Resume" },
  ];

  return (
    <nav className="navbar" ref={menuRef}>
      <div className="container navbar-inner">
        {/* Logo */}
        <div className="nav-left">
          <div className="nav-logo-mark">
            <div className="nav-logo-sq"></div>
            <div className="nav-logo-sq"></div>
            <div className="nav-logo-sq"></div>
            <div className="nav-logo-sq"></div>
          </div>
          <span className="nav-wordmark">ResumeIQ</span>
        </div>

        {/* Desktop center links */}
        <div className="nav-center">
          {navLinks.map((l) => (
            <Link key={l.to} to={l.to}>{l.label}</Link>
          ))}
        </div>

        {/* Desktop right actions */}
        <div className="nav-right nav-right--desktop">
          {user ? (
            <>
              <Link to="/profile">
                <button className="nav-btn" style={{ background: "#e87e36", border: "none", cursor: "pointer", color: "white" }}>
                  Profile
                </button>
              </Link>
              <button onClick={onLogout} className="nav-btn" style={{ background: "#ef4444", border: "none", cursor: "pointer", color: "white" }}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="nav-signin">Sign in</Link>
              <Link to="/register" className="nav-btn" style={{ color: "white" }}>Get Started Free</Link>
            </>
          )}
        </div>

        {/* Hamburger button (mobile only) */}
        <button
          className={`nav-hamburger ${menuOpen ? "nav-hamburger--open" : ""}`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile drawer */}
      <div className={`nav-mobile-drawer ${menuOpen ? "nav-mobile-drawer--open" : ""}`}>
        <div className="nav-mobile-links">
          {navLinks.map((l) => (
            <Link key={l.to} to={l.to} className="nav-mobile-link" onClick={() => setMenuOpen(false)}>
              {l.label}
            </Link>
          ))}
        </div>
        <div className="nav-mobile-actions">
          {user ? (
            <>
              <Link to="/profile" className="nav-mobile-btn nav-mobile-btn--profile" onClick={() => setMenuOpen(false)}>
                Profile
              </Link>
              <button onClick={onLogout} className="nav-mobile-btn nav-mobile-btn--logout">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="nav-mobile-btn nav-mobile-btn--ghost" onClick={() => setMenuOpen(false)}>
                Sign in
              </Link>
              <Link to="/register" className="nav-mobile-btn nav-mobile-btn--primary" onClick={() => setMenuOpen(false)}>
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