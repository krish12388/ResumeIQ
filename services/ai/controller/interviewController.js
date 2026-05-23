import { PDFParse } from "pdf-parse";
import GenerateInterviewReportController from "./Ai.response.controller.js";
import interviewReportModal from "../modals/AiResponseModal.js";
import {roastResumeController} from '../controller/roastResume.js'
import ResumeRoastModal from "../modals/ResumeRoastModal.js";
import {scrapeJobs} from "../controller/Ai.response.controller.js"
async function interviewController(req, res) {
  const { jobDescription, selfDescription } = req.body;

  if (!req.file) {
    return res.status(400).json({
      success: false,
      message: "Resume PDF is required",
    });
  }

  // Convert Buffer -> Uint8Array
  const pdfData = new Uint8Array(req.file.buffer);

  // Create parser instance
  const parser = new PDFParse({ data: pdfData });

  // Get parsed result
  const parsedResume = await parser.getText();

  // Extract ONLY text
  const resumeText = parsedResume.text;

  try {
    const interviewReportbyAi = await GenerateInterviewReportController({
      jobDescription,
      resumeText,
      selfDescription,
    });
    const interviewReport = await interviewReportModal.create({
      userId: req.userId,
      resumeText: resumeText,
      jobDescription: jobDescription,
      selfDescription: selfDescription,
      location: interviewReportbyAi.location,
      ...interviewReportbyAi,
    });
    res.status(201).json({
      success: true,
      message: "interview report created successfully",
      data: interviewReport,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "interview report creation failed",
      error: error.message,
    });
  }
}

export async function getAllInterviewReportsByUserId(req, res) {
  try {
    const interviewReport = await interviewReportModal
      .find({ userId: req.userId })
      .sort({ createdAt: -1 })
      .select("-jobDescription -resumeText -selfDescription -technicalQuestions -behavioralQuestions -skillGaps -preparationPlan -__v");
    if (!interviewReport) {
      return res.status(404).json({
        success: false,
        message: "interview report not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "interview report fetched successfully",
      data: interviewReport,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "interview report fetching failed",
      error: error.message,
    });
  }
}
export async function getInterviewReportById(req, res) {
  try {
    const interviewReport = await interviewReportModal.findOne({
      _id: req.params.id,
      userId: req.user.id,
    });
    if (!interviewReport) {
      return res.status(404).json({
        success: false,
        message: "interview report not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "interview report fetched successfully",
      data: interviewReport,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "interview report fetching failed",
      error: error.message,
    });
  }
}
export async function getJobsByTitle(req, res) {
  try {
    const { title, location } = req.query;  

    if (!title || !location) {
      return res.status(400).json({
        success: false,
        message: "title and location are required",
      });
    }

    const jobList = await scrapeJobs(title, location);
    console.log(jobList);
    if (!jobList || jobList.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No jobs found for the given title and location",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Job list fetched successfully",
      data: jobList,
    });

  } catch (error) {
   res.status(500).json({
  success: false,
  message: "Job list fetching failed",
  error: error.message || error.code || 'Unknown error — check server logs'
});
  }
}

export async function roastResume(req, res) {
   if (!req.file) {
    return res.status(400).json({
      success: false,
      message: "Resume PDF is required",
    });
  }

  // Convert Buffer -> Uint8Array
  const pdfData = new Uint8Array(req.file.buffer);

  // Create parser instance
  const parser = new PDFParse({ data: pdfData });

  // Get parsed result
  const parsedResume = await parser.getText();

  // Extract ONLY text
  const resumeText = parsedResume.text;
  try {
    const roastedResume = await roastResumeController({
      resumeText,
    });
    const resumeRoast = await ResumeRoastModal.create({
      userId: req.userId,
      ...roastedResume,
    });
    res.status(201).json({
      success: true,
      message: "roast resume created successfully",
      data: roastedResume,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "roast resume creation failed",
      error: error.message,
    });
  }
}

export { interviewController };
