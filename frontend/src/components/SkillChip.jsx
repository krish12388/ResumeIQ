import React from 'react';

const SkillChip = ({ text, type = 'have' }) => {
  const chipClass = type === 'have' ? 'chip-green' : 'chip-red';
  return (
    <span className={`chip ${chipClass}`}>
      {text}
    </span>
  );
};

export default SkillChip;
