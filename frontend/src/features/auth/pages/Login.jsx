
import LoginForm from "../components/LoginForm";
import {useAuth} from "../hooks/useAuth";
import toast from "react-hot-toast";
import { useEffect } from "react";
function Login() {
  const {handleLogin,loading,error,handleGoogleLogin,user}=useAuth();
  useEffect(() => {
    if (user) navigate("/");
  }, [user]);

  useEffect(() => {
    if(loading){
      toast.loading("Logging in...",{id:"login"})
    }
    else{
      toast.dismiss("login")
    }
  }, [loading]);

  useEffect(() => {
    if(error){
      toast.error(error,{id:"error"})
    }
  }, [error]);
  return (
    <main className="h-screen w-full">
      <LoginForm handleLogin={handleLogin} handleGoogleLogin={handleGoogleLogin} loading={loading} error={error}/>
    </main>
  );
}

export default Login;
