import mongoose from "mongoose";
import axios from "axios";

const behavioralQuestionsSchema = new mongoose.Schema(
  {
    question: { type: String, required: true },
    intention: { type: String, required: true },
    answer: { type: String, required: true },
  },
  { _id: false },
);
const TechnicalQuestionsSchema = new mongoose.Schema(
  {
    question: { type: String, required: true },
    intention: { type: String, required: true },
    answer: { type: String, required: true },
  },
  { _id: false },
);
const skillGapsSchema = new mongoose.Schema(
  {
    skill: { type: String, required: true },
    severity: { type: String, enum: ["low", "medium", "high"], required: true },
    explanation: { type: String, required: true },
  },
  { _id: false },
);
const preparationPlanSchema = new mongoose.Schema(
  {
    day: { type: Number, required: true },
    focus: { type: String, required: true },
    tasks: [{ type: String, required: true }],
  },
  { _id: false },
);




const interviewReportSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    jobDescription: {
      type: String,
      required: [true, "Please provide job description"],
    },
    location: {
      type: String,
      required: [true, "Please provide location"],
    },
    resumeText: { type: String },

    selfDescription: {
      type: String,
      required: [true, "Please provide self description"],
    },

    matchScore: { type: Number, min: 0, max: 100, required: true },

    behavioralQuestions: { type: [behavioralQuestionsSchema], required: true },

    technicalQuestions: { type: [TechnicalQuestionsSchema], required: true },

    skillGaps: { 
      type: [skillGapsSchema], required: true 
    },
    
    preparationPlan: { 
      type: [preparationPlanSchema], required: true },
      title: {
        type: String,
      },
  },
  { timestamps: true },
);

const interviewReportModal = mongoose.model(
  "interviewReport",
  interviewReportSchema,
);
 
export default interviewReportModal;
