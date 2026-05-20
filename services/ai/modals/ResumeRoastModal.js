// create a modal for resume roast

import mongoose from "mongoose";

const resumeRoastSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
    trim:true,
  },
    title: {
        type: String,

        trim:true,
    },
    weaknesses: [
        {
            category: String,
            issue: String,
            severity: String,
            impact: String,
        },
    ],
    badPhrases: [String],
    brutalSummary: String,
    fix: [String],
    
}, { timestamps: true });

const ResumeRoastModal = mongoose.model("ResumeRoast", resumeRoastSchema);
export default ResumeRoastModal;
