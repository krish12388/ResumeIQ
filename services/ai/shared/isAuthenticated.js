import jwt from 'jsonwebtoken';
import dotenv from "dotenv";
dotenv.config();
userIsAuthenticated = (req, res, next) => {
  // Check Authorization header first, then cookie
  const authHeader = req.headers.authorization;
  const cookieToken = authHeader?.startsWith("Bearer ") 
    ? authHeader.split(" ")[1] 
    : req.cookies.token;
console.log("Auth header:", authHeader);        // ← add this
  console.log("Cookie token:", cookieToken);
  const token=cookieToken;
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    if (!req.user.id || !req.user.email) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    req.userId = decoded.id;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Unauthorized" });
  }
};

export default userIsAuthenticated;
