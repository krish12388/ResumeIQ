import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../hooks/useAuth";
import { getAllInterviewReportsByUserId } from "../../ai/services/Ai.api.service";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import "./UserProfile.css";
import toast from "react-hot-toast";

const UserProfile = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [reports, setReports] = useState([]);
  const [loadingReports, setLoadingReports] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchUserReports = async () => {
      if (!user?.id) return;
      try {
        setLoadingReports(true);
        const res = await getAllInterviewReportsByUserId(user.id);
        if (res?.success) {
          setReports(res.data || []);
        } else {
          setReports([]);
        }
      } catch (err) {
        console.error("Failed to load reports:", err);
        toast.error("Could not load your interview reports");
      } finally {
        setLoadingReports(false);
      }
    };

    fetchUserReports();
  }, [user]);

  // Calculate statistics
  const totalReports = reports.length;
  const averageScore = totalReports > 0
    ? Math.round(reports.reduce((acc, curr) => acc + (parseInt(curr.matchScore) || 0), 0) / totalReports)
    : 0;

  // Filter reports dynamically by search term
  const filteredReports = reports.filter(report => {
    const title = (report.jobTitle || "").toLowerCase();
    const location = (report.location || "").toLowerCase();
    const term = searchTerm.toLowerCase();
    return title.includes(term) || location.includes(term);
  });

  // Generate initials for avatar
  const getInitials = (name) => {
    if (!name) return "U";
    const parts = name.trim().split(" ");
    if (parts.length >= 2) {
      return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
    }
    return name[0].toUpperCase();
  };

  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="resume-iq">
      <Navbar />

      <main className="container profile-container">
        {/* Horizontal Profile Banner */}
        <section className="profile-banner animate-on-scroll visible">
          <div className="banner-left">
            <div className="avatar-wrapper">
              <div className="avatar-ring"></div>
              <div className="avatar-large">{getInitials(user?.name)}</div>
            </div>
            <div className="user-info">
              <div className="user-badge-row">
                <h1 className="user-name">{user?.name || "Premium User"}</h1>
                <span className="status-badge">Pro Account</span>
              </div>
              <p className="user-email">{user?.email || "user@resumeiq.com"}</p>
              <div className="user-meta-sub">
                Member since May 2026 &bull; Verified Candidate
              </div>
            </div>
          </div>

          <div className="banner-stats">
            <div className="banner-stat-box">
              <span className="stat-number-large">{totalReports}</span>
              <span className="stat-label-small">Resumes Analyzed</span>
            </div>
            <div className="banner-stat-box">
              <span className="stat-number-large">{averageScore}%</span>
              <span className="stat-label-small">Average Score</span>
            </div>
          </div>
        </section>

        {/* Search, Filters, and Title Strip */}
        <section className="filter-strip animate-on-scroll visible">
          <h3 className="reports-area-title">
            Your Interview Reports
            <span className="reports-count-badge">{filteredReports.length}</span>
          </h3>

          <div className="search-input-wrapper">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              placeholder="Search reports by job title or location..."
              className="search-input"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </section>

        {/* Reports Area */}
        <section className="reports-area animate-on-scroll visible">
          {loadingReports ? (
            <div className="profile-empty-card" style={{ padding: "64px 0" }}>
              <div className="empty-icon" style={{ animation: "pulse-glow 2s infinite" }}>
                ⏳
              </div>
              <h4 className="empty-title">Loading Reports...</h4>
              <p className="empty-sub">Fetching your generated reports from ResumeIQ servers.</p>
            </div>
          ) : filteredReports.length === 0 ? (
            <div className="profile-empty-card">
              <div className="empty-icon">📊</div>
              <h4 className="empty-title">
                {searchTerm ? "No Matching Reports" : "No Reports Found"}
              </h4>
              <p className="empty-sub">
                {searchTerm
                  ? "We couldn't find any reports matching your search query. Try typing something else!"
                  : "You haven't generated any interview feedback reports yet. Upload a resume and job description to get started!"}
              </p>
              <button
                className="empty-btn"
                onClick={() => navigate(searchTerm ? "/profile" : "/generate-report")}
              >
                {searchTerm ? "Clear Search Filter" : "Analyze Resume Now"}
              </button>
            </div>
          ) : (
            <div className="reports-list-grid">
              {filteredReports.map((report) => (
                <div key={report._id} className="report-card-premium">
                  <div className="card-top-row">
                    <div className="report-card-info">
                      <h4 className="report-card-job-title" title={report.jobTitle || "Job Analysis"}>
                        {report.jobTitle || "Job Analysis"}
                      </h4>
                      <span className="report-card-date">{formatDate(report.createdAt)}</span>
                    </div>

                    {/* Compact Custom MatchRing */}
                    <div className="report-card-ring-wrapper">
                      <div className="match-ring-container">
                        <svg width="68" height="68" viewBox="0 0 100 100" style={{ transform: 'rotate(-90deg)' }}>
                          <circle cx="50" cy="50" r="40" className="match-ring-bg" style={{ fill: "none", stroke: "rgba(255, 255, 255, 0.03)", strokeWidth: "10" }} />
                          <circle cx="50" cy="50" r="40" className="match-ring-fill" style={{
                            fill: "none",
                            stroke: "var(--accent)",
                            strokeWidth: "10",
                            strokeLinecap: "round",
                            strokeDasharray: "251.2",
                            strokeDashoffset: 251.2 - (251.2 * (parseInt(report.matchScore) || 0)) / 100,
                            transition: "stroke-dashoffset 1s ease"
                          }} />
                        </svg>
                        <div className="match-ring-text" style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifycontent: "center" }}>
                          <div className="match-ring-score" style={{ fontSize: "15px", fontWeight: "600", color: "white", marginTop: "24px" }}>{report.matchScore}%</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="card-mid-row">
                    <div className="report-card-meta">
                      {report.location && (
                        <span className="report-meta-tag tag-location">
                          📍 {report.location}
                        </span>
                      )}
                      {report.skillGaps && report.skillGaps.length > 0 && (
                        <span className="report-meta-tag tag-skills">
                          🔑 {report.skillGaps.length} Skill Gaps
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="card-bottom-row">
                    <button 
                      className="report-card-btn"
                      onClick={() => navigate(`/report/${report._id}`)}
                    >
                      View Report Details
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default UserProfile;
