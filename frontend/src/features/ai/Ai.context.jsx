import { createContext, useState, useEffect } from "react";
import { useAuth } from "../auth/hooks/useAuth.js";
import { getAllInterviewReportsByUserId } from "./services/Ai.api.service.js";
const AiContext = createContext();

function AiContextProvider({ children }) {
  const [roastData, setRoastData] = useState(null);
  const [roastLoading, setRoastLoading] = useState(false);
  const [roastError, setRoastError] = useState(null);
  const [interviewReports, setInterviewReports] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useAuth();
  const [reportData, setReportData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchInterviewReports = async () => {
      setIsLoading(true);
      const data = await getAllInterviewReportsByUserId(user.id);
      setInterviewReports(data);
      setIsLoading(false);
    };
    if (user) fetchInterviewReports();
  }, [user]);
  return (
    <AiContext.Provider
      value={{
        roastData,
        setRoastData,
        roastLoading,
        setRoastLoading,
        roastError,
        setRoastError,
        interviewReports,
        isLoading,
        reportData,
        setReportData,
        loading,
        setLoading,
        error,
        setError,
      }}
    >
      {children}
    </AiContext.Provider>
  );
}

export { AiContextProvider, AiContext };
