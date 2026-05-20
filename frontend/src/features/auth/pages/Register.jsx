import React from 'react';
import RegisterForm from '../components/RegisterForm';
import {useAuth} from '../hooks/useAuth';
import toast from 'react-hot-toast';
function Register() {
  const {handleRegister,handleGoogleLogin,loading,error}=useAuth();
  if(loading){
    toast.loading("Registering...",{id:"register"})
  }
  else{
    toast.dismiss("register")
  }
  if(error){
    toast.error(error,{id:"error"})
  }
  return (
    <RegisterForm handleRegister={handleRegister} handleGoogleLogin={handleGoogleLogin} loading={loading} error={error}/>
  );
}

export default Register;