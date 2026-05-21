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
      if (data?.success) {
        setUser(data.user);
      } else {
        setUser(null); // no active session, that's fine
      }
    } catch (err) {
      setUser(null);
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