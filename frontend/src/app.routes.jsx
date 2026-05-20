import {createBrowserRouter} from "react-router";
import Register from "./features/auth/pages/Register";
import Login from "./features/auth/pages/Login";
import Home from "./features/auth/pages/Home";
import SampleReport from "./features/auth/pages/SampleReport";
import InterviewFormPage from "./features/ai/pages/InterviewFormPage";
import InterviewReportPage from "./features/ai/pages/InterviewReportPage";
import Protected from "./Protected";
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";
import Docs from "./pages/Docs";
import RoastMyResume from "./features/ai/pages/RoastMyResume";

/**
 * @returns {object} router
 * @description router - router for the application
 */

export const router = createBrowserRouter([
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/register",
        element: <Register />,
    },{
        path:"/",
        element:<Protected><Home/></Protected>
    },{
        path: "/sample-report",
        element: <SampleReport />
    },{
        path: "/generate-report",
        element: <Protected><InterviewFormPage /></Protected>
    },{
        path: "/report/:id",
        element: <Protected><InterviewReportPage /></Protected>
    },{
        path: "/features",
        element: <Features />
    },{
        path: "/pricing",
        element: <Pricing />
    },{
        path: "/docs",
        element: <Docs />
    },{
        path: "/roast-my-resume",
        element: <Protected><RoastMyResume /></Protected>
    }
]);