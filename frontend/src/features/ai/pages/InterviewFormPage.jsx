import React, { useState, useRef, useEffect } from "react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import "./InterviewFormPage.css";
import { useAi } from "../hooks/useAi";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
const InterviewFormPage = () => {
  const {
    generateReport,
    error,
    loading,
  } = useAi();
  const [jobDescription, setJobDescription] = useState("");
  const [selfDescription, setSelfDescription] = useState("");
  const [file, setFile] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
  if (loading) {
    toast.loading("Generating report...", { id: "generateReport" });
  } else {
    toast.dismiss("generateReport");
  }
  if (error) {
    toast.error(error, { id: "error" });
  }
  },[loading, error]);
  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await generateReport({
      file,
      jobDescription,
      selfDescription,
    });
    if (result) {
      toast.success("Report generated successfully");
      navigate(`/report/${result._id}`,{state: {
    title: result.jobTitle,
    location: result.jobLocation|| "india"
  }})
    }
  };
 if(loading){
    return <div className="flex items-center justify-center h-screen"><div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div></div>
  }
  return (
    <div className="interview-form-page">
      <Navbar />

      <main className="if-container">
        <div className="if-header">
          <div className="if-eyebrow">Interview Prep</div>
          <h1 className="if-heading">Generate Interview Report</h1>
          <p className="if-sub">
            Upload your resume, paste the job description, and add a brief
            self-introduction. Our AI will generate a personalized interview
            plan tailored exactly to you and the role.
          </p>
        </div>

        <div className="if-card">
          <form onSubmit={handleSubmit}>
            {/* 1. Resume Upload */}
            <div className="if-form-group">
              <label className="if-label">1. Upload Resume (PDF/DOCX)</label>
              <div
                className={`if-file-drop ${isDragging ? "active" : ""}`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current.click()} 
              >
                <input
                  type="file"
                  ref={fileInputRef}
                  className="if-file-input"
                  accept=".pdf"
                  onChange={handleFileChange}
                  required={!file}
                  onClick={(e) => e.stopPropagation()} 
                />

                <div className="if-file-icon">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="17 8 12 3 7 8"></polyline>
                    <line x1="12" y1="3" x2="12" y2="15"></line>
                  </svg>
                </div>

                {file ? (
                  <div>
                    <div className="if-file-text">Selected File:</div>
                    <div className="if-file-selected">{file.name}</div>
                  </div>
                ) : (
                  <div>
                    <div className="if-file-text">
                      Drag & drop your resume here, or click to browse
                    </div>
                    <div className="if-file-subtext">
                      Supports PDF (Max 5MB)
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* 2. Job Description */}
            <div className="if-form-group">
              <label className="if-label">2. Job Description</label>
              <textarea
                className="if-textarea"
                placeholder="Paste the full job description here. Include requirements, responsibilities, and any other relevant details."
                value={jobDescription}
                onChange={(e) => setJobDescription(e.target.value)}
                required
              ></textarea>
            </div>

            {/* 3. Self Description */}
            <div className="if-form-group">
              <label className="if-label">3. Self Description (Optional)</label>
              <textarea
                className="if-textarea"
                placeholder="Tell us a bit about your current situation. Are you a recent grad? Transitioning careers? What are your strongest skills?"
                value={selfDescription}
                onChange={(e) => setSelfDescription(e.target.value)}
              ></textarea>
            </div>

            {/* Submit Button */}
            <button type="submit" className="btn btn-accent if-submit-btn">
              Generate Report Plan &rarr;
            </button>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default InterviewFormPage;
