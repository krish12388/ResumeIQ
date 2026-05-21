import axios from "axios";
const authInstance= axios.create({
  baseURL: "http://localhost:3001/api/user",
  withCredentials: true,
})

async function register({ name, email, password }) {
  try {
    const response = await authInstance.post(
      "/register",
      { name, email, password }
    );
  
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

    return response.data;
  } catch (error) {
    console.log(error);
    return error.message; //handle error in UI
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
      return result.data;
    } catch (e) {
      console.log(e);
      return e.message; //handle error in UI
    }
}

export { register, login, logout, getCurrentUser,loginWithGoogle };
