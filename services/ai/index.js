import express from "express";
import dotenv from "dotenv";
import dbConnect from "./configs/databaseConnect.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import interviewRouter from "./routes/interview.route.js";
dotenv.config();
const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({ origin: ["http://localhost:5173","http://localhost:5175", "http://localhost:3001","http://localhost:5175","https://resumeiq-frontend-v8en.onrender.com"], credentials: true }));

if (dbConnect()) {
  const PORT = process.env.PORT || 3002;
  app.use("/api/ai", interviewRouter);
  app.listen(PORT,"0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
  });
}
