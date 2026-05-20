import React from 'react';
import SkillChip from './SkillChip';

const JobCard = ({ companyInitial, role,apply_url, location }) => {
  return (
    <div className="job-card ">
      <div className="job-card-top">
        <div className="job-card-avatar w-10 h-10 text-md">{companyInitial}</div>
        <div className="job-card-title text-lg">{role}</div>
        
      </div>
      <div className="job-card-mid">
        
        <span className="job-card-loc">{location}</span>
      </div>
      <a href={apply_url} className="job-card-bot text-white">View Job &rarr;</a>
    </div>
  );
};

export default JobCard;
