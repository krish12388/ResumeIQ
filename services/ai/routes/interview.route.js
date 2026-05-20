//using import statement
import express from 'express';
import userIsAuthenticated from "../../shared/middlewares/isAuthenticated.js";
import {interviewController,roastResume, getInterviewReportById, getAllInterviewReportsByUserId, getJobsByTitle} from "../controller/interviewController.js";
import fileMiddleware from "../middlewares/file.middleware.js";
const interviewRouter = express.Router();
/**
 * @description: takes job description, resume text, self description from frontend and returns the interview report
 * @route: POST /interview
 * @access: authenticated user
 */
interviewRouter.post('/report',userIsAuthenticated,fileMiddleware.single("resume"), interviewController);
/**
 * @description: takes interview report id from frontend and returns the interview report
 * @route: GET /interview
 * @access: authenticated user
 */
interviewRouter.get(`/report/:id`,userIsAuthenticated, getInterviewReportById);
/**
 * @description: takes user id from frontend and returns the interview report
 * @route: GET /interview
 * @access: authenticated user
 */
interviewRouter.get('/reports/all/:id',userIsAuthenticated, getAllInterviewReportsByUserId);
/**
 * @description: takes title and location from frontend and returns the jobs
 * @route: GET /interview
 * @access:authenticated user 
 */
interviewRouter.get('/jobs/:title/:location',userIsAuthenticated, getJobsByTitle);
/**
 * @description: takes resume and resume text from frontend and returns the resume roast
 * @route: POST /interview
 * @access:authenticated user
 */
interviewRouter.post('/resume-roast',userIsAuthenticated,fileMiddleware.single("resume"), roastResume);

export default interviewRouter;