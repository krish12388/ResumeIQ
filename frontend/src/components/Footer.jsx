import React from 'react';

const Footer = () => {
  return (
    <footer className="footer animate-on-scroll">
      <div className="container footer-grid">
        <div>
          <div className="nav-left">
            <div className="nav-logo-mark">
              <div className="nav-logo-sq"></div>
              <div className="nav-logo-sq"></div>
              <div className="nav-logo-sq"></div>
              <div className="nav-logo-sq"></div>
            </div>
            <span className="nav-wordmark">ResumeIQ</span>
          </div>
          <p className="footer-tagline">AI-powered resume intelligence for early-career developers.</p>
          <p className="footer-copy">&copy; 2026 ResumeIQ. All rights reserved.</p>
        </div>
        <div>
          <div className="footer-col-heading">Product</div>
          <div className="footer-links">
            <a href="#">Features</a>
            <a href="#">Pricing</a>
            <a href="#">Sample Report</a>
            <a href="#">Job Board</a>
          </div>
        </div>
        <div>
          <div className="footer-col-heading">Company</div>
          <div className="footer-links">
            <a href="#">About Us</a>
            <a href="#">Blog</a>
            <a href="#">Careers</a>
            <a href="#">Contact</a>
          </div>
        </div>
        <div>
          <div className="footer-col-heading">Legal</div>
          <div className="footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
