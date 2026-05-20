import { createContext, useState, useEffect } from "react";
import { getCurrentUser } from "./services/auth.api";
const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // Start loading as true
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const data = await getCurrentUser();
        if (data && data.success) {
          setUser(data.user);
        }
        if(!data){
          setUser(null);
          setError(data?.message);
        }
      } catch (err) {
        console.log("No active session found");
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, []);

  const value = {user,setUser,loading,setLoading,error,setError};
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>; 
}
export {AuthProvider,AuthContext};