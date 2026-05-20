import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MatchRing from '../components/MatchRing';
import SkillChip from '../components/SkillChip';
import '../features/auth/pages/Home.css'; // Reusing landing page CSS for uniform design

const Features = () => {
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
          <div className="hero-eyebrow">✦ POWERFUL FEATURES</div>
          <h1 className="hero-heading" style={{ fontSize: '48px', lineHeight: '1.2' }}>
            Everything you need to <br />
            <span>ace your next interview</span>
          </h1>
          <p className="hero-sub" style={{ margin: '24px auto', maxWidth: '600px' }}>
            ResumeIQ goes beyond basic keyword matching to give you actionable insights and a clear path to getting hired.
          </p>
        </div>
      </section>

      <section className="features-deep container animate-on-scroll" style={{ paddingTop: '0' }}>
        <div className="feature-row">
          <div>
            <div className="section-eyebrow">MATCH SCORING</div>
            <h2 className="section-heading" style={{marginTop: '16px'}}>An honest number, not empty encouragement</h2>
            <p className="feature-body">We don't just look for keyword matches. Our AI understands the context of your experience and the true requirements of the role.</p>
            <ul className="feature-bullets">
              <li>Scores normalized against historical hiring data</li>
              <li>Penalty for generic buzzwords, reward for specific impact</li>
              <li>12-dimensional analysis of your technical profile</li>
            </ul>
          </div>
          <div className="feature-visual">
            <MatchRing score="84" />
            <div className="micro-card mc-1">Technical Skills &middot; 91%</div>
            <div className="micro-card mc-2">Experience Fit &middot; 78%</div>
            <div className="micro-card mc-3">Keywords &middot; 85%</div>
          </div>
        </div>

        <div className="feature-row">
          <div className="feature-visual">
            <div className="skill-cloud">
              <SkillChip text="React" type="have" />
              <SkillChip text="Node.js" type="have" />
              <SkillChip text="Docker" type="miss" />
              <SkillChip text="PostgreSQL" type="have" />
              <SkillChip text="AWS S3" type="miss" />
              <SkillChip text="TypeScript" type="have" />
              <SkillChip text="CI/CD" type="miss" />
            </div>
          </div>
          <div>
            <div className="section-eyebrow">SKILL GAPS</div>
            <h2 className="section-heading" style={{marginTop: '16px'}}>See exactly what's missing, not just that something is</h2>
            <p className="feature-body">Stop wondering why your application was filtered out. We extract the exact explicit and implicit skills required by the job and cross-reference them with your profile.</p>
            <ul className="feature-bullets">
              <li>Identifies both hard and soft skill gaps</li>
              <li>Prioritizes critical missing requirements</li>
              <li>Actionable insights to fill the gaps quickly</li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Features;
