import React, { useEffect } from 'react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import MatchRing from '../../../components/MatchRing';
import SkillChip from '../../../components/SkillChip';
import JobCard from '../../../components/JobCard';
import './SampleReport.css';

const SampleReport = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="resume-iq">
      <Navbar />
      
      <div className="sample-report-container container">
        <div className="sr-header">
          <div className="sr-eyebrow">SAMPLE ANALYSIS</div>
          <h1 className="sr-heading">Frontend Engineer at Stripe</h1>
          <p className="sr-sub">Candidate: Jane Doe &middot; Generated on Oct 24, 2026</p>
        </div>

        <div className="sr-grid">
          {/* Top Left: Match Score */}
          <div className="sr-card sr-match-card">
            <h3 className="sr-card-title">Overall Fit</h3>
            <MatchRing score="84" />
            <p className="sr-match-desc">Your technical skills align well, but you are missing some key cloud infrastructure experience explicitly requested in the job description.</p>
          </div>

          {/* Top Right: Skill Gap */}
          <div className="sr-card sr-skills-card">
            <h3 className="sr-card-title">Skill Gap Analysis</h3>
            
            <div className="sr-skill-section">
              <div className="sr-skill-label">Validated Skills (Matches)</div>
              <div className="chip-container">
                <SkillChip text="React" type="have" />
                <SkillChip text="TypeScript" type="have" />
                <SkillChip text="Node.js" type="have" />
                <SkillChip text="REST APIs" type="have" />
                <SkillChip text="Git" type="have" />
                <SkillChip text="Jest" type="have" />
              </div>
            </div>

            <div className="sr-skill-section mt-4">
              <div className="sr-skill-label">Missing Skills (Critical Gaps)</div>
              <div className="chip-container">
                <SkillChip text="Docker" type="miss" />
                <SkillChip text="GraphQL" type="miss" />
                <SkillChip text="CI/CD Pipelines" type="miss" />
                <SkillChip text="AWS S3" type="miss" />
              </div>
            </div>
          </div>
        </div>

        {/* 4-Week Planner */}
        <div className="sr-card sr-planner-card mt-6">
          <h3 className="sr-card-title">Recommended 4-Week Action Plan</h3>
          <p className="sr-card-sub">Focusing on your critical gaps: Docker, CI/CD, and AWS.</p>
          
          <div className="planner-board">
            <div>
              <div className="pb-col-header c-w1">Week 1: Containerization</div>
              <div className="pb-task pb-t-w1">
                <div className="pb-task-name">Intro to Docker Concepts</div>
                <div className="pb-task-bottom">
                  <span className="pb-task-dur">45 min</span>
                  <span className="pb-task-icon">&#8599;</span>
                </div>
              </div>
              <div className="pb-task pb-t-w1">
                <div className="pb-task-name">Write your first Dockerfile</div>
                <div className="pb-task-bottom">
                  <span className="pb-task-dur">60 min</span>
                  <span className="pb-task-icon">&#8599;</span>
                </div>
              </div>
            </div>
            
            <div>
              <div className="pb-col-header c-w2">Week 2: Advanced Docker</div>
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
            </div>
            
            <div>
              <div className="pb-col-header c-w3">Week 3: CI/CD</div>
              <div className="pb-task pb-t-w3">
                <div className="pb-task-name">GitHub Actions setup</div>
                <div className="pb-task-bottom">
                  <span className="pb-task-dur">90 min</span>
                  <span className="pb-task-icon">&#8599;</span>
                </div>
              </div>
              <div className="pb-task pb-t-w3">
                <div className="pb-task-name">Automated testing pipelines</div>
                <div className="pb-task-bottom">
                  <span className="pb-task-dur">60 min</span>
                  <span className="pb-task-icon">&#8599;</span>
                </div>
              </div>
            </div>
            
            <div>
              <div className="pb-col-header c-w4">Week 4: Cloud Storage</div>
              <div className="pb-task pb-t-w4">
                <div className="pb-task-name">AWS S3 Fundamentals</div>
                <div className="pb-task-bottom">
                  <span className="pb-task-dur">60 min</span>
                  <span className="pb-task-icon">&#8599;</span>
                </div>
              </div>
              <div className="pb-task pb-t-w4">
                <div className="pb-task-name">Deploy with GitHub Actions</div>
                <div className="pb-task-bottom">
                  <span className="pb-task-dur">180 min</span>
                  <span className="pb-task-icon">&#8599;</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Alternative Jobs */}
        <div className="sr-card sr-jobs-card mt-6">
          <h3 className="sr-card-title">Jobs That Match You Better</h3>
          <p className="sr-card-sub">Roles where your current skillset yields a 90%+ match.</p>
          
          <div className="jobs-grid">
            <JobCard 
              companyInitial="N" 
              role="React Developer" 
              matchScore="94" 
              skills={['React', 'TypeScript', 'Redux']} 
              location="Remote" 
            />
            <JobCard 
              companyInitial="V" 
              role="Frontend Engineer" 
              matchScore="91" 
              skills={['Node.js', 'React', 'Jest']} 
              location="New York, NY" 
            />
            <JobCard 
              companyInitial="P" 
              role="UI Engineer" 
              matchScore="90" 
              skills={['React', 'CSS', 'Figma']} 
              location="San Francisco, CA" 
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SampleReport;
