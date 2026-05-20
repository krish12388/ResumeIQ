import React, { useEffect, useState } from "react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import MatchRing from "../../../components/MatchRing";
import "./InterviewReportPage.css";
import { useAi } from "../hooks/useAi";
import { useParams } from "react-router-dom";
import JobCard from "../../../components/JobCard";

const InterviewReportPage = () => {
  const { getJobs, reportData, getReportById, loading } = useAi();
  const { id } = useParams();
  const [jobs, setJobs] = useState([]);
  const [jobsLoading, setJobsLoading] = useState(false);
  const [jobsError, setJobsError] = useState(null);
useEffect(() => {
    if (id) {
      getReportById(id);
    }
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
  if (!reportData) return;
  console.log('skillGaps:', reportData.skillGaps);
  console.log('preparationPlan:', reportData.preparationPlan);
  console.log('technicalQuestions:', reportData.technicalQuestions);
  console.log('behavioralQuestions:', reportData.behavioralQuestions);
}, [reportData]);

useEffect(() => {
  if (!reportData) return;

  const title = reportData?.title;
  const location = reportData?.location || 'india'; // fallback if location missing

  const fetchJobs = async () => {
    try {
      setJobsLoading(true);
      setJobsError(null);

      const res = await getJobs(title, location);
      console.log('getJobs raw response:', res); // see what's actually returned

      // handle both {data: [...]} and direct array
      const jobList = Array.isArray(res) ? res
        : Array.isArray(res?.data) ? res.data
        : [];

      setJobs(jobList);
    } catch (err) {
      setJobsError(err?.response?.data?.message || err?.message || 'Failed to load jobs');
    } finally {
      setJobsLoading(false);
    }
  };

  fetchJobs();
}, [reportData]); // ✅ runs when reportData loads
  
  if (!reportData && loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }
  if (!reportData) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }
  const data = reportData;
  return (
    <div className="resume-iq">
      <Navbar />

      <div className="report-page-container container">
        {/* Header */}
        <div className="rp-header">
          <div className="rp-header-left">
            <div className="rp-eyebrow">INTERVIEW INTELLIGENCE REPORT</div>
            <h1>{data.title?.toUpperCase()}</h1>
            <p
              className="text-muted"
              style={{ marginTop: "8px", color: "var(--color-text-muted)" }}
            >
              Analysis complete. Here is your personalized prep plan based on
              your resume and the job description.
            </p>
          </div>
          <div className="rp-header-right">
            <h3
              style={{
                fontSize: "14px",
                color: "var(--color-text-secondary)",
                marginBottom: "16px",
              }}
            >
              Match Score
            </h3>
            <MatchRing score={data.matchScore} />
          </div>
        </div>

        {/* Skill Gaps */}
        <section className="rp-section">
          <h2 className="rp-section-title">Critical Skill Gaps Identified</h2>
          <div className="rp-gap-grid">
            {data.skillGaps?.map((gap, idx) => (
              <div key={idx} className="rp-gap-card">
                <div className="rp-gap-header">
                  <span className="rp-gap-title">{gap.skill}</span>
                  <span className={`rp-badge ${gap.severity}`}>
                    {gap.severity}
                  </span>
                </div>
                <p className="rp-gap-desc">{gap.explanation}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Preparation Plan */}
        <section className="rp-section">
          <h2 className="rp-section-title">Day-by-Day Preparation Plan</h2>
          <div className="rp-plan-grid">
            {data.preparationPlan?.map((plan, idx) => (
              <div key={idx} className="rp-plan-day">
                <div className="rp-day-badge">
                  <span className="rp-day-text">DAY</span>
                  <span className="rp-day-num">{plan.day}</span>
                </div>
                <div className="rp-day-content">
                  <h3 className="rp-day-focus">{plan.focus}</h3>
                  <ul className="rp-task-list">
                    {plan.tasks.map((task, tIdx) => (
                      <li key={tIdx}>{task}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Questions */}
        <section className="rp-section">
          <h2 className="rp-section-title">Expected Technical Questions</h2>
          <div className="rp-qna-list">
            {data.technicalQuestions?.map((q, idx) => (
              <div key={idx} className="rp-qna-card">
                <h3 className="rp-q-text">Q: {q.question}</h3>
                <div className="rp-q-intention">
                  <span className="rp-q-label">Interviewer's Intention</span>
                  {q.intention}
                </div>
                <div>
                  <span className="rp-q-label">How to Answer</span>
                  <p className="rp-q-answer">{q.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Behavioral Questions */}
        <section className="rp-section" style={{ marginBottom: 0 }}>
          <h2 className="rp-section-title">Expected Behavioral Questions</h2>
          <div className="rp-qna-list">
            {reportData.behavioralQuestions?.map((q, idx) => (
              <div key={idx} className="rp-qna-card">
                <h3 className="rp-q-text">Q: {q.question}</h3>
                <div className="rp-q-intention">
                  <span className="rp-q-label">Interviewer's Intention</span>
                  {q.intention}
                </div>
                <div>
                  <span className="rp-q-label">How to Answer</span>
                  <p className="rp-q-answer">{q.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        <br />
        <br />
        <br />
        <br />

        <section className="jobs-similar-section flex flex-col gap-4" style={{ marginTop: "3rem" }}>
          <h2 className="rp-section-title">
            More Similar Jobs You Might Be Interested In
          </h2>
          {jobsLoading && (
            <p className="text-gray-400 text-sm">Loading jobs...</p>
          )}
          {jobsError && <p className="text-red-400 text-sm">{jobsError}</p>}
          {!jobsLoading && !jobsError && jobs.length === 0 && (
            <p className="text-gray-400 text-sm">No similar jobs found.</p>
          )}
          {jobs?.map((job, idx) => (
            <JobCard key={idx} companyInitial={job.company.slice(0,2).toUpperCase()} role={job.title} location={job.location} apply_url={job.apply_url} />
          ))}
        </section>

        <br />
        <br />
        <br />
        <br />
      </div>
      <Footer />
    </div>
  );
};

export default InterviewReportPage;
