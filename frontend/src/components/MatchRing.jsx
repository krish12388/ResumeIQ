import React from 'react';

const MatchRing = ({ score }) => {
  return (
    <div className="match-ring-container">
      <svg width="180" height="180" viewBox="0 0 100 100" style={{ transform: 'rotate(-90deg)' }}>
        <circle cx="50" cy="50" r="40" className="match-ring-bg" />
        <circle cx="50" cy="50" r="40" className="match-ring-fill" />
      </svg>
      <div className="match-ring-text">
        <div className="match-ring-score">{score}</div>
        <div className="match-ring-label">Match Score</div>
      </div>
    </div>
  );
};

export default MatchRing;
