import axios from "axios";
const authInstance = axios.create({
  baseURL: `${import.meta.env.VITE_AUTH_BASE_URL}/api/user`,
  withCredentials: true,
});

authInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
async function register({ name, email, password }) {
  try {
    const response = await authInstance.post(
      "/register",
      { name, email, password }
    );
    localStorage.setItem("token", response.data.token);
    return response.data;
    
  } catch (error) {
    console.log(error);
    return error.message; //handle error in UI
  }
}

async function login({ email, password }) {
  try {
    const response = await authInstance.post(
      "/login",
      { email, password }
    );
    localStorage.setItem("token", response.data.token);
    return response.data;
  } catch (error) {
    console.log(error);
    return error.message; //handle error in UI
  }
}

async function logout() {
  try {
    const response = await authInstance.post(
      "/logout",
      {}
    );
localStorage.removeItem("token");  
  return response.data;
  } catch (error) {
    console.log(error);
    return error.message;
  }
}

async function getCurrentUser() {
  try { 
    const response = await authInstance.get(
      "/get-me"
    );
    if(!response.data?.success){
      throw new Error("Session has expired. Please login again.");
    }
    return response.data;
  } catch (error) {
    console.log(error);
    return error.message; //handle error in UI
  }
}

async function loginWithGoogle(code){
      try {
      const result = await authInstance.post("/login-with-google", { code });
      localStorage.setItem("token", result.data.token);
      return result.data;
    } catch (e) {
      console.log(e);
      throw error;//handle error in UI
    }
}

export { register, login, logout, getCurrentUser,loginWithGoogle };
