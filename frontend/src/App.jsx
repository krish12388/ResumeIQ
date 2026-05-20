import { RouterProvider } from "react-router"
import { router } from "./app.routes.jsx"
import { AuthProvider } from "./features/auth/auth.context.jsx"
import { GoogleOAuthProvider } from '@react-oauth/google';
import { Toaster } from 'react-hot-toast';
import { AiContextProvider } from "./features/ai/Ai.context.jsx";

const googleClientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;

// catch missing env variable early
if (!googleClientId) {
  console.error('❌ VITE_GOOGLE_CLIENT_ID is missing from your .env file');
}
function App() {
  return (
    <>
      <Toaster />
      <GoogleOAuthProvider clientId={googleClientId}>
        <AuthProvider>
          <AiContextProvider>
            <RouterProvider router={router} />
          </AiContextProvider>
        </AuthProvider>
      </GoogleOAuthProvider>
    </>
  )
}

export default App