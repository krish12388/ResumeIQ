import axios from "axios";

const aiInstance = axios.create({
    baseURL: `${import.meta.env.VITE_AI_BASE_URL}/api/ai`,
    withCredentials: true,
})
aiInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

async function generateInterviewReport(resumeFile,jobDescription,selfDescription){
 try {
  const formData = new FormData();
  formData.append("resume",resumeFile);
  formData.append("jobDescription",jobDescription);
  formData.append("selfDescription",selfDescription);
     const response = await aiInstance.post("/report",formData,{headers:{
      "Content-Type": "multipart/form-data",
     }})
    return response.data
 } catch (error) {
  console.log("Error in generating interview report",error)
  throw error;
 }
}

async function getInterviewReportById(id){
  
  try {
    const response = await aiInstance.get(`/report/${id}`)
    return response.data
  } catch (error) {
    console.log("Error in fetching interview report",error)
    throw error;
  }
}

async function getAllInterviewReportsByUserId(userId){
    try {
        const response = await aiInstance.get(`/reports/all/${userId}`)
        return response.data
    } catch (error) {
        console.log("Error in fetching all interview reports",error)
        throw error;
    }
}
async function getJobsByTitle(title,location){
  try {
    const response = await aiInstance.get('/jobs', {
      params: { title, location }
    })
    return response.data
  } catch (error) {
    console.log("Error in fetching jobs",error)
    throw error;
  }
}

async function roastMyResume(resumeFile){
  try {
    const formData = new FormData();
    formData.append("resume",resumeFile);
    const response = await aiInstance.post("/resume-roast",formData,{
      headers:{
        "Content-Type": "multipart/form-data",
      }
    })
    return response.data;
  } catch (error) {
    console.log("Error in roasting resume",error)
    throw error;
  }
}
export {generateInterviewReport, getInterviewReportById, getAllInterviewReportsByUserId, getJobsByTitle, roastMyResume} 