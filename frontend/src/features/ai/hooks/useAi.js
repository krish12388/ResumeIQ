import { useContext } from "react";
import { AiContext } from "../Ai.context.jsx";
import { generateInterviewReport,getJobsByTitle,roastMyResume, getInterviewReportById, getAllInterviewReportsByUserId } from "../services/Ai.api.service.js";

function useAi() {
    const context = useContext(AiContext);
    if(!context){
        throw new Error("useAi must be used within an AiProvider");
    }
    const {roastData,setRoastData,roastLoading,setRoastLoading,roastError,setRoastError,jobDescription,setJobDescription,selfDescription,setSelfDescription,reportData,setReportData,loading,setLoading,error,setError} = context;
    
    const generateReport=async({jobDescription,file,resumeFile,selfDescription})=>{
      try {
        setLoading(true);
        const actualFile = file || resumeFile;
        const report = await generateInterviewReport(actualFile, jobDescription, selfDescription);
        console.log(report);
        setReportData(report.data);
        setError(null);
        return report.data;
      } catch (error) {
        console.log(error)
        setError(error?.response?.data?.message || error?.message || "An error occurred");
      } finally {
        setLoading(false);
      }
    }
    const getAllReport = async(userId)=>{
      try {
        setLoading(true);
        const reports = await getAllInterviewReportsByUserId(userId);
        setReportData(reports.data);
        setError(null);
        return reports.data;
      } catch (error) {
        console.log(error)
        setError(error?.response?.data?.message || error?.message || "An error occurred");
      } finally {
        setLoading(false);
      }
    }
    const getReportById = async(id)=>{
      try {
        setLoading(true);
        const report = await getInterviewReportById(id);
        setReportData(report.data);
        setError(null);
        return report.data;
      } catch (error) {
        console.log(error)
        setError(error?.response?.data?.message || error?.message || "An error occurred");
      } finally {
        setLoading(false);
      }
    }
const getJobs=async(title,location)=>{
  try {
    setLoading(true);
    const jobs=await getJobsByTitle(title,location)
    setError(null);
    return jobs.data;
  } catch (error) {
    console.log(error)
    setError(error?.response?.data?.message || error?.message || "An error occurred");
  } finally {
    setLoading(false);
  }
}
    
const roastResume=async(resumeFile)=>{
  try {
    setRoastLoading(true);
    const roast = await roastMyResume(resumeFile);
    console.log(roast);
    setRoastData(roast.data);
    setRoastError(null);
    return roast.data;
  } catch (error) {
    console.log(error)
    setRoastError(error?.response?.data?.message || error?.message || "An error occurred");
  } finally {
    setRoastLoading(false);
  }
}
    return {getJobs,roastResume,roastData,setRoastData,roastLoading,setRoastLoading,roastError,setRoastError,reportData,setReportData,loading,setLoading,error,setError,generateReport,getAllReport,getReportById,jobDescription,setJobDescription,selfDescription,setSelfDescription};
}

export {useAi}; 
