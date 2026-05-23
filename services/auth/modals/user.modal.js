const { Schema, model } = require("mongoose");
const { createHmac } = require("node:crypto");
const userSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
  },
  password: {
    type: String,
    required: false,
  default: null,
  },
  profileImage: {
    type: String,
    default:
      "https://cdn.pixabay.com/photo/2018/08/28/13/29/avatar-3637561_1280.png",
  },
  bio: {
    type: String,
    default: "",
  },
});
userSchema.pre("save", function(next) {
  if (!this.password || !this.isModified("password")) return next();
  
  this.password = createHmac("sha256", process.env.PASSWORD_SECRET)
    .update(this.password)
    .digest("hex");
  next();
});

const User = model("User", userSchema);
module.exports = User;
