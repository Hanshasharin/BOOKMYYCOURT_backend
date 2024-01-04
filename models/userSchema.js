const mongoose = require("mongoose");
const userSchema =new mongoose.Schema({
  name: { type: String, required: true },

  email: { type: String, required: true },

  phone: { type: Number },

  password: { type: String },

  role: {
    type: Number,
    required: true,
    default: 2,
  },
  timestamp: {
    type: Date,

    default: new Date(),
  }
});
const USERS =mongoose.model('users',userSchema)
module.exports= USERS

