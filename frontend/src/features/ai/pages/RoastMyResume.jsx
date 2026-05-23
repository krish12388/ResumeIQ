import React, { useState, useRef, useEffect } from "react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import "./RoastResume.css"; 
import {useAi} from "../hooks/useAi";
// fix the ui for roast my resume page 
const RoastMyResume = () => {
  const {roastResume,roastData,setRoastData,roastLoading,setRoastLoading,roastError,setRoastError}=useAi();
  const [file, setFile] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [loading, setLoading] = useState(false);
  const [roast, setRoast] = useState(null); // State to hold the AI roast text
  const fileInputRef = useRef(null);

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
    if (!file) return;
    
    // Placeholder for actual API call
    setLoading(true);
    const data=await roastResume(file);
    if(data){
      setRoastData(data);
      setRoastError(null);
    }else{
      setRoastError("An error occurred while generating the roast.");
    }
    setLoading(false);
  };
  useEffect(() => {
    if(roastData){
       setRoast(roastData);
    }
  }, [roastData]);
  return (
    <div className="interview-form-page" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />

      <main className="container" style={{ flexGrow: 1, padding: '40px 20px', display: 'flex', gap: '40px', flexWrap: 'wrap' }}>
        
        {/* LEFT SIDE: UPLOAD FORM */}
        <div style={{ flex: '1 1 400px', maxWidth: "600px"}}>
<div className="if-header" style={{ textAlign: 'left', marginBottom: '30px' }}>
  <div className="if-eyebrow">BRUTAL HONESTY</div>
  <h1 className="if-heading">Roast My Resume</h1>
  <p className="if-sub">
    Think your resume is flawless? Upload it and let our AI tear it apart...
  </p>
</div>
<div className="if-card">
  <form onSubmit={handleSubmit}>
    <div className="if-form-group">
      <label className="if-label">Upload your victim (PDF only)</label>
      <div
        className={`if-file-drop ${isDragging ? "active" : ""}`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current?.click()}
      >
        <input
          type="file"
          name="resume"
          ref={fileInputRef}
          className="if-file-input"
          accept=".pdf"
          onChange={handleFileChange}
          onClick={(e) => e.stopPropagation()} 
        />
        <div className="if-file-icon">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor"
            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="17 8 12 3 7 8" />
            <line x1="12" y1="3" x2="12" y2="15" />
          </svg>
        </div>
        {file ? (
          <>
            <div className="if-file-text">Selected file:</div>
            <div className="if-file-selected">{file.name}</div>
          </>
        ) : (
          <>
            <div className="if-file-text">Drag & drop your resume, or click to browse</div>
            <div className="if-file-subtext">PDF only · Max 5 MB</div>
          </>
        )}
      </div>
    </div>
 
    <button
      type="submit"
      className="if-submit-btn"
      disabled={loading}
    >
      {loading ? 'Roasting...' : '🔥 Roast Me Now'}
    </button>
  </form>
</div>
 </div>
<div className="roast-output-panel ">
 
  {/* EMPTY STATE */}
  {!roast && !loading && (
    <div className="roast-empty-state">
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
        <line x1="12" y1="9" x2="12" y2="13" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
      <p>Waiting for a victim...</p>
    </div>
  )}
 
  {/* LOADING STATE */}
  {loading && (
    <div className="roast-loading-state">
      <div className="roast-spinner" />
      <p>Preparing the burn unit...</p>
    </div>
  )}
 
  {/* RESULT */}
  {roast && !loading && (
    <div className="roast-result roast-scroll-area">
 
      {/* Verdict heading */}
      <h2 className="roast-verdict-heading">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor"
          strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
        </svg>
        The Verdict
      </h2>
 
      {/* ── BRUTAL SUMMARY ── */}
      <div className="roast-section">
        <div className="roast-block roast-block--summary">
          "{roast.brutalSummary}"
        </div>
      </div>
 
      <hr className="roast-divider" />
 
      {/* ── BAD PHRASES ── */}
      <div className="roast-section">
        <h3 className="roast-section-heading">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
            strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" /><line x1="15" y1="9" x2="9" y2="15" />
            <line x1="9" y1="9" x2="15" y2="15" />
          </svg>
          Bad Phrases
        </h3>
        <div className="roast-phrases-wrap">
          {roast.badPhrases.map((phrase, i) => (
            <span key={i} className="roast-phrase-pill">"{phrase}"</span>
          ))}
        </div>
      </div>
 
      <hr className="roast-divider" />
 
      {/* ── WEAKNESSES ── */}
      <div className="roast-section">
        <h3 className="roast-section-heading">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
            strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
            <line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" />
          </svg>
          Weaknesses
        </h3>
        {roast.weaknesses.map((w, i) => {
          const sev = (w.severity || 'medium').toLowerCase();
          return (
            <div key={i} className="roast-weakness-card">
              <div className="roast-weakness-header">
                <span className="roast-weakness-category">{w.category}</span>
                <span className={`roast-severity roast-severity--${sev}`}>
                  {w.severity}
                </span>
              </div>
              <p className="roast-weakness-issue">{w.issue}</p>
              {w.impact && (
                <div className="roast-weakness-impact">
                  <strong>Impact</strong>
                  {w.impact}
                </div>
              )}
            </div>
          );
        })}
      </div>
 
      <hr className="roast-divider" />
 
      {/* ── FIXES ── */}
      <div className="roast-section">
        <h3 className="roast-section-heading">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
            strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
          Fixes
        </h3>
        {roast.fix.map((f, i) => (
          <div key={i} className="roast-fix-item">
            <span className="roast-fix-number">{i + 1}</span>
            <p className="roast-fix-text">{f}</p>
          </div>
        ))}
      </div>
                
              </div>
            )}
       
          </div>

        

      </main>

      <Footer />
    </div>
  );
};

export default RoastMyResume;
