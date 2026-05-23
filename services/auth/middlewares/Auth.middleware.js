
const jwt = require('jsonwebtoken')

exports.verifyUser = async(req,res,next)=>{
    const token = req.cookies.token
    if(!token){
        return res.status(401).json({message:"Unauthorized"})
    }
    try{
        const decoded = jwt.verify(token,process.env.JWT_SECRET)
        req.user = decoded
        next()
    }catch(err){
      console.log(err)
        return res.status(401).json({message:"Unauthorized"})
    }
}

exports.userIsAuthenticated = (req, res, next) => {
  // Check Authorization header first, then cookie
  const authHeader = req.headers.authorization;
  const token = authHeader?.startsWith("Bearer ") 
    ? authHeader.split(" ")[1] 
    : req.cookies.token;

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