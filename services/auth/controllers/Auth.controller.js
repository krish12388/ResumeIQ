// write the boiler plate code for auth controller
const User = require("../modals/user.modal");
const { createHmac } = require("node:crypto");
const jwt = require("jsonwebtoken");
const axios = require("axios");
const { oauth2Client } = require("../config/googleLoginConfig");


const verifyToken = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET);
};

exports.register = async (req, res) => {
  try {
    const { name, email, password, profileImage } = req.body;
    const user = await User.create({
      name,
      email,
      password,
      profileImage,
    });
    const token = jwt.sign({
      name: user.name,
      email: user.email,
      id: user._id,
      profileImage: user.profileImage,
    }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.cookie("token", token, { httpOnly: true });
    return res.status(201).json({
      success: true,
      message: "User registered successfully",
      user: {
        name: user.name,
        email: user.email,
        id: user._id,
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.json(
        { success: false, message: "Please provide email and password" },
        400,
      );
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ success: false, message: "User not found" }, 404);
    }
    const decriptedPass = createHmac("sha256", process.env.PASSWORD_SECRET)
      .update(password)
      .digest("hex");
    if (decriptedPass != user.password) {
      return res.json({ success: false, message: "Invalid password" }, 401);
    }
    const payload = {
      name: user.name,
      email: user.email,
      id: user._id,
      profileImage: user.profileImage,
    };
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.cookie("token", token, { httpOnly: true });
    return res.status(200).json({
      success: true,
      message: "Login successful",
      user: {
        name: user.name,
        email: user.email,
        id: user._id,
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.loginWithGoogle = async (req, res) => {
  try {
    const { code } = req.body;
    if (!code) {
      return res.status(400).json({ message: "code is required" });
    }
    if (!process.env.JWT_SECRET) {
      throw new Error("JWT_SECRET missing");
    }
    const googleResponse = await oauth2Client.getToken(code);
    oauth2Client.setCredentials(googleResponse.tokens);

    if (!googleResponse.tokens.access_token) {
      return res.status(500).json({ message: "No access token" });
    }

    const userRes = await axios.get(
      `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${googleResponse.tokens.access_token}`,
    );
    const { name, email, picture } = userRes.data;

    if (!email) {
      return res.status(400).json({ message: "Email not found" });
    }

    let user = await User.findOne({ email });
    if (!user) {
      user = await User.create({
        email,
        name,
        image: picture,
      });
    }
    const payload = {
      email: user.email,
      id: user._id,
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.cookie("token", token, { httpOnly: true, secure: true });
    //log the details for debugging => to be deleted later
    console.log(token);
    console.log(user);
    return res.status(200).json({
      success: true,
      message: "Login with Google successful",
      user: {
        name: user.name,
        email: user.email,
        id: user._id,
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
exports.logout = async (req, res) => {
  try {
    res.clearCookie("token");
    res.status(200).json({
      success: true,
      message: "Logout successful",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.getMe = async (req, res) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized - Token not found",
      });
    }
    const payload = verifyToken(token);
    if (!payload.id || !payload.email) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized - Invalid token",
      });
    }
    const user = await User.findById(payload.id);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
    return res.status(200).json({
      success: true,
      message: "User found",
      user: {
        name: user.name,
        email: user.email,
        id: user._id,
        profileImage: user.profileImage,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};