import React, { useEffect } from "react";
import "./Home.css";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import MatchRing from "../../../components/MatchRing";
import SkillChip from "../../../components/SkillChip";
import JobCard from "../../../components/JobCard";
import { useNavigate } from "react-router";

const Home = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 },
    );

    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="resume-iq">
      {/* 1. NAVBAR */}
      <Navbar />

      {/* 2. HERO SECTION */}
      <section className="hero container animate-on-scroll">
        <div className="hero-content">
          <div className="hero-eyebrow">✦ AI-Powered Resume Intelligence</div>
          <h1 className="hero-heading">
            Know Exactly Why
            <br />
            <span>You're Getting Rejected</span>
          </h1>
          <p className="hero-sub">
            Upload your resume and job description. Get an AI match score, skill
            gap analysis, and a personalized 4-week learning plan — in under 60
            seconds.
          </p>
          <div className="hero-cta-row">
            <button
              className="hero-cta-primary"
              onClick={() => navigate("/generate-report")}
            >
              Analyze My Resume &rarr;
            </button>
            <a
              href="/sample-report"
              className="hero-cta-secondary text-center"
              style={{ display: "inline-block" }}
            >
              &#9654; See Sample Report
            </a>
          </div>
          <div className="hero-trust">
            Free to start &middot; No credit card &middot; Results in ~45
            seconds
          </div>
        </div>

        {/* 3. HERO DASHBOARD MOCKUP */}
        <div className="hero-mockup-wrapper">
          <div className="mockup-shell">
            <div className="mockup-browser-bar">
              <div className="mockup-dots">
                <div className="mockup-dot dot-red"></div>
                <div className="mockup-dot dot-yel"></div>
                <div className="mockup-dot dot-grn"></div>
              </div>
              <div className="mockup-url"></div>
            </div>
            <div className="mockup-dashboard">
              <div className="mockup-card mockup-match-card">
                <MatchRing score="84" />
              </div>
              <div className="mockup-card">
                <div className="mockup-title">Skill Gap Analysis</div>
                <div className="chip-container">
                  <SkillChip text="React" type="have" />
                  <SkillChip text="TypeScript" type="have" />
                  <SkillChip text="REST APIs" type="have" />
                  <SkillChip text="Git" type="have" />
                </div>
                <div className="chip-container">
                  <SkillChip text="Docker" type="miss" />
                  <SkillChip text="GraphQL" type="miss" />
                  <SkillChip text="CI/CD" type="miss" />
                </div>
              </div>
              <div className="mockup-card">
                <div className="mockup-title">4-Week Plan</div>
                <div className="planner-grid">
                  <div>
                    <div className="planner-col-label">WEEK 1</div>
                    <div className="planner-task pt-w1"></div>
                    <div className="planner-task pt-w1"></div>
                  </div>
                  <div>
                    <div className="planner-col-label">WEEK 2</div>
                    <div className="planner-task pt-w2"></div>
                    <div className="planner-task pt-w2"></div>
                  </div>
                  <div>
                    <div className="planner-col-label">WEEK 3</div>
                    <div className="planner-task pt-w3"></div>
                    <div className="planner-task pt-w3"></div>
                  </div>
                  <div>
                    <div className="planner-col-label">WEEK 4</div>
                    <div className="planner-task pt-w4"></div>
                    <div className="planner-task pt-w4"></div>
                  </div>
                </div>
              </div>
              <div className="mockup-card">
                <div className="mockup-title">Matched Jobs</div>
                <div className="job-row">
                  <div className="job-avatar">S</div>
                  <div className="job-title">Frontend Engineer</div>
                  <div className="job-badge">84%</div>
                </div>
                <div className="job-row">
                  <div className="job-avatar">M</div>
                  <div className="job-title">React Developer</div>
                  <div className="job-badge">81%</div>
                </div>
                <div className="job-row">
                  <div className="job-avatar">G</div>
                  <div className="job-title">UI Engineer</div>
                  <div className="job-badge">79%</div>
                </div>
              </div>
            </div>
            <div className="mockup-fade"></div>
          </div>
        </div>
      </section>

      {/* 4. SOCIAL PROOF STRIP */}
      <div className="social-strip-wrapper">
        <section className="container animate-on-scroll">
          <div className="social-label">STUDENTS FROM</div>
          <div className="social-logos">
            <span>MIT</span>
            <span>Stanford</span>
            <span>IIT Delhi</span>
            <span>Carnegie Mellon</span>
            <span>UC Berkeley</span>
            <span>Georgia Tech</span>
            <span>NUS</span>
          </div>
        </section>
      </div>

      {/* 5. HOW IT WORKS */}
      <section className="how-it-works container animate-on-scroll" id="how">
        <div className="section-eyebrow">HOW IT WORKS</div>
        <h2 className="section-heading">
          From Upload to Offer-Ready in 3 Steps
        </h2>
        <div className="steps-grid">
          <div className="step-card">
            <div className="step-number">01</div>
            <div className="step-icon-box s1-box">
              <svg
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path>
              </svg>
            </div>
            <h3 className="step-title">Upload</h3>
            <p className="step-body">
              Drop your resume PDF and paste the job description. Supports all
              formats — parsed instantly with zero manual input.
            </p>
          </div>
          <div className="step-connector conn-1">&rarr;</div>

          <div className="step-card">
            <div className="step-number">02</div>
            <div className="step-icon-box s2-box">
              <svg
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <h3 className="step-title">Analyze</h3>
            <p className="step-body">
              Claude AI cross-references your skills against the role, scoring
              fit across 12 competency dimensions in real time.
            </p>
          </div>
          <div className="step-connector conn-2">&rarr;</div>

          <div className="step-card">
            <div className="step-number">03</div>
            <div className="step-icon-box s3-box">
              <svg
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
              </svg>
            </div>
            <h3 className="step-title">Improve</h3>
            <p className="step-body">
              Get a custom 4-week learning plan with hand-picked courses, docs,
              and projects to close every skill gap.
            </p>
          </div>
        </div>
      </section>

      {/* 6. FEATURE DEEP-DIVE */}
      <section
        className="features-deep container animate-on-scroll"
        id="features"
      >
        <div className="feature-row">
          <div>
            <div className="section-eyebrow">MATCH SCORING</div>
            <h2 className="section-heading" style={{ marginTop: "16px" }}>
              An honest number, not empty encouragement
            </h2>
            <p className="feature-body">
              We don't just look for keyword matches. Our AI understands the
              context of your experience and the true requirements of the role.
            </p>
            <ul className="feature-bullets">
              <li>Scores normalized against historical hiring data</li>
              <li>Penalty for generic buzzwords, reward for specific impact</li>
              <li>12-dimensional analysis of your technical profile</li>
            </ul>
            <a href="#" className="feature-link">
              See how scoring works &rarr;
            </a>
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
            <h2 className="section-heading" style={{ marginTop: "16px" }}>
              See exactly what's missing, not just that something is
            </h2>
            <p className="feature-body">
              Stop wondering why your application was filtered out. We extract
              the exact explicit and implicit skills required by the job and
              cross-reference them with your profile.
            </p>
            <ul className="feature-bullets">
              <li>Identifies both hard and soft skill gaps</li>
              <li>Prioritizes critical missing requirements</li>
              <li>
                Suggests resume rewording for skills you have but didn't
                highlight
              </li>
            </ul>
            <a href="#" className="feature-link">
              View a sample gap analysis &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* 7. 4-WEEK PLANNER */}
      <div className="planner-section">
        <section className="container animate-on-scroll">
          <h2 className="section-heading" style={{ marginTop: 0 }}>
            Your Learning Plan, Pre-Built
          </h2>
          <p className="planner-sub">
            A curated, day-by-day roadmap to close your skill gaps before the
            interview.
          </p>
          <div className="planner-board">
            <div>
              <div className="pb-col-header c-w1">Week 1</div>
              <div className="pb-task pb-t-w1">
                <div className="pb-task-name">Intro to Docker Concepts</div>
                <div className="pb-task-bottom">
                  <span className="pb-task-dur">45 min</span>
                  <span className="pb-task-icon">&#8599;</span>
                </div>
              </div>
              <div className="pb-task pb-t-w1">
                <div className="pb-task-name">Write first Dockerfile</div>
                <div className="pb-task-bottom">
                  <span className="pb-task-dur">60 min</span>
                  <span className="pb-task-icon">&#8599;</span>
                </div>
              </div>
              <div className="pb-task pb-t-w1">
                <div className="pb-task-name">Containerizing Node.js</div>
                <div className="pb-task-bottom">
                  <span className="pb-task-dur">90 min</span>
                  <span className="pb-task-icon">&#8599;</span>
                </div>
              </div>
            </div>

            <div>
              <div className="pb-col-header c-w2">Week 2</div>
              <div className="pb-task pb-t-w2">
                <div className="pb-task-name">Docker Compose Basics</div>
                <div className="pb-task-bottom">
                  <span className="pb-task-dur">60 min</span>
                  <span className="pb-task-icon">&#8599;</span>
                </div>
              </div>
              <div className="pb-task pb-t-w2">
                <div className="pb-task-name">Multi-container apps</div>
                <div className="pb-task-bottom">
                  <span className="pb-task-dur">120 min</span>
                  <span className="pb-task-icon">&#8599;</span>
                </div>
              </div>
              <div className="pb-task pb-t-w2">
                <div className="pb-task-name">Networking concepts</div>
                <div className="pb-task-bottom">
                  <span className="pb-task-dur">45 min</span>
                  <span className="pb-task-icon">&#8599;</span>
                </div>
              </div>
            </div>

            <div>
              <div className="pb-col-header c-w3">Week 3</div>
              <div className="pb-task pb-t-w3">
                <div className="pb-task-name">Intro to CI/CD pipelines</div>
                <div className="pb-task-bottom">
                  <span className="pb-task-dur">45 min</span>
                  <span className="pb-task-icon">&#8599;</span>
                </div>
              </div>
              <div className="pb-task pb-t-w3">
                <div className="pb-task-name">GitHub Actions setup</div>
                <div className="pb-task-bottom">
                  <span className="pb-task-dur">90 min</span>
                  <span className="pb-task-icon">&#8599;</span>
                </div>
              </div>
              <div className="pb-task pb-t-w3">
                <div className="pb-task-name">Automated testing</div>
                <div className="pb-task-bottom">
                  <span className="pb-task-dur">60 min</span>
                  <span className="pb-task-icon">&#8599;</span>
                </div>
              </div>
            </div>

            <div>
              <div className="pb-col-header c-w4">Week 4</div>
              <div className="pb-task pb-t-w4">
                <div className="pb-task-name">AWS S3 Fundamentals</div>
                <div className="pb-task-bottom">
                  <span className="pb-task-dur">60 min</span>
                  <span className="pb-task-icon">&#8599;</span>
                </div>
              </div>
              <div className="pb-task pb-t-w4">
                <div className="pb-task-name">IAM Roles & Policies</div>
                <div className="pb-task-bottom">
                  <span className="pb-task-dur">45 min</span>
                  <span className="pb-task-icon">&#8599;</span>
                </div>
              </div>
              <div className="pb-task pb-t-w4">
                <div className="pb-task-name">Deploy fullstack app</div>
                <div className="pb-task-bottom">
                  <span className="pb-task-dur">180 min</span>
                  <span className="pb-task-icon">&#8599;</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* 8. JOB RECOMMENDATIONS */}
      <section className="jobs-section container animate-on-scroll">
        <h2 className="section-heading" style={{ marginTop: 0 }}>
          Jobs That Actually Fit You Right Now
        </h2>
        <p className="planner-sub">
          Based on your validated skills, not just keywords.
        </p>
        <div className="jobs-grid">
          <JobCard
            companyInitial="S"
            role="Frontend Engineer"
            matchScore="84"
            skills={["React", "TypeScript", "Redux"]}
            location="Remote"
          />
          <JobCard
            companyInitial="V"
            role="Fullstack Developer"
            matchScore="79"
            skills={["Node.js", "React", "MongoDB"]}
            location="New York, NY"
          />
          <JobCard
            companyInitial="A"
            role="Software Engineer"
            matchScore="76"
            skills={["Python", "FastAPI", "AWS"]}
            location="San Francisco, CA"
          />
        </div>
      </section>

      {/* 9. STATS BAR */}
      <div className="stats-bar-wrapper">
        <section
          className="stats-bar container animate-on-scroll"
          style={{ border: "none", padding: 0 }}
        >
          <div className="stats-container">
            <div className="stat-item">
              <div className="stat-num">12,400+</div>
              <div className="stat-label">Resumes Analyzed</div>
            </div>
            <div className="stat-item">
              <div className="stat-num">94%</div>
              <div className="stat-label">
                Match Accuracy vs Human Reviewers
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-num">3.2 weeks</div>
              <div className="stat-label">Avg. Time to First Interview</div>
            </div>
          </div>
        </section>
      </div>

      {/* 10. FINAL CTA */}
      <section className="final-cta container animate-on-scroll">
        <div className="final-cta-card">
          <h2 className="fcta-heading">Stop Guessing. Start Matching.</h2>
          <p className="fcta-sub">
            Upload your resume and a target job description. We'll show you
            exactly where you stand and what to learn next.
          </p>
          <button className="fcta-btn" onClick={() => navigate("/generate-report")}>Analyze My Resume &rarr;</button>
          <p className="fcta-micro">
            Join 12,400+ students already using ResumeIQ
          </p>
        </div>
      </section>

      {/* 11. FOOTER */}
      <Footer />
    </div>
  );
};

export default Home;
