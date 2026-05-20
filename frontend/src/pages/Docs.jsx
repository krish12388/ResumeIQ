import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../features/auth/pages/Home.css';

const Docs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="resume-iq">
      <Navbar />

      <section className="hero container animate-on-scroll">
        <div className="hero-content" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <div className="hero-eyebrow">✦ DOCUMENTATION</div>
          <h1 className="hero-heading" style={{ fontSize: '48px', lineHeight: '1.2' }}>
            How to use <br />
            <span>ResumeIQ effectively</span>
          </h1>
          <p className="hero-sub" style={{ margin: '24px auto', maxWidth: '600px' }}>
            A complete guide to getting the most out of our AI-powered resume intelligence platform. Follow these steps to maximize your chances of landing an interview.
          </p>
        </div>
      </section>

      <section className="how-it-works container animate-on-scroll" style={{ paddingTop: '0', paddingBottom: '100px' }}>
        <h2 className="section-heading" style={{textAlign: 'center', marginBottom: '60px'}}>From Upload to Offer-Ready</h2>
        <div className="steps-grid">
          
          <div className="step-card">
            <div className="step-number">01</div>
            <div className="step-icon-box s1-box">
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path></svg>
            </div>
            <h3 className="step-title">Upload your documents</h3>
            <p className="step-body">Navigate to the dashboard and click "Analyze". Provide your resume (PDF) and the target job description.</p>
          </div>
          
          <div className="step-connector conn-1">&rarr;</div>

          <div className="step-card">
            <div className="step-number">02</div>
            <div className="step-icon-box s2-box">
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
            </div>
            <h3 className="step-title">Review the Analysis</h3>
            <p className="step-body">Our AI processes your documents in seconds. Review your match score and identify critical skill gaps.</p>
          </div>

          <div className="step-connector conn-2">&rarr;</div>

          <div className="step-card">
            <div className="step-number">03</div>
            <div className="step-icon-box s3-box">
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path></svg>
            </div>
            <h3 className="step-title">Follow the Prep Plan</h3>
            <p className="step-body">Use the generated 4-week learning plan and practice the expected interview questions to get offer-ready.</p>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Docs;
