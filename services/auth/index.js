const express = require("express");
const dotenv = require("dotenv");
const dbConnect = require("./config/databaseConnect");
const userRoutes = require("./routes/user.route");
const cookieParser = require("cookie-parser");
const { userIsAuthenticated } = require("./middlewares/Auth.middleware");
const cors = require("cors");
require("dotenv").config({path:"./auth.env"});
const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({
  origin: "http://localhost:5173", 
  credentials: true,               
}));


if (dbConnect()) {
  app.get("/hello",(req,res)=>{
    res.send("hello world from auth service")
  })
  app.get("/api/v1/test", userIsAuthenticated, (req, res) => {
    res.json({ msg: "auth service is running" });
  });
  app.use("/api/user", userRoutes);
  const PORT = process.env.PORT || 3001;

  app.listen(PORT, "0.0.0.0",() => {
    console.log(`Server running on port ${PORT}`);
  });
}
