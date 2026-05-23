import { useContext } from "react";
import { AuthContext } from "../auth.context.jsx";
import { useGoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router";
import {
  login,
  register,
  logout,
  getCurrentUser,
  loginWithGoogle,
} from "../services/auth.api.js";

function useAuth() {
  const navigate = useNavigate();
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  const { user, setUser, loading, setLoading, error, setError } = context;
  const handleLogin = async ({ email, password }) => {
    try {
      setLoading(true);
      const data = await login({ email, password });
      setUser(data.user);
      setError(null);
      return data;
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async ({ name, email, password }) => {
    try {
      setLoading(true);
      const data = await register({ name, email, password });
      setUser(data.user);
      setError(null);
      return data;
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      setLoading(true);
      const data = await logout();
      setUser(null);
      setError(null);
      return data;
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const handleGetCurrentUser = async () => {
    try {
      setLoading(true);
      const data = await getCurrentUser();
      setUser(data.user);
      setError(null);
      return data;
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = useGoogleLogin({
    onSuccess: async (codeResponse) => {
      try {
        setLoading(true);
        const data = await loginWithGoogle(codeResponse.code);
        setUser(data.user);
        setError(null);
        navigate("/");  
      } catch (err) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    },
    onError: (error) => setError(error),
    flow: "auth-code",
    redirect_uri: import.meta.env.VITE_GOOGLE_REDIRECT_URL,
  });

  return {
    handleLogin,
    handleRegister,
    handleLogout,
    handleGetCurrentUser,
    user,
    loading,
    error,
    setError,
    handleGoogleLogin,
  };
}

export {useAuth};
