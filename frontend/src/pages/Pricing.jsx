import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../features/auth/pages/Home.css';

const Pricing = () => {
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

      <section className="hero container animate-on-scroll" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
        <div className="hero-content" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <div className="hero-eyebrow">✦ SIMPLE PRICING</div>
          <h1 className="hero-heading" style={{ fontSize: '48px', lineHeight: '1.2' }}>
            Pricing will be added on <br />
            <span>addition of further features</span>
          </h1>
          <p className="hero-sub" style={{ margin: '24px auto', maxWidth: '600px' }}>
            ResumeIQ is currently completely free to use while we continue to build and improve our core features. Enjoy unlimited resume analyses!
          </p>
          <div className="hero-cta-row text-black" style={{ justifyContent: 'center' }}>
            <a href="/register" className="hero-cta-primary">Get Started for Free &rarr;</a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;
