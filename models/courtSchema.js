const mongoose = require("mongoose");
const courtSchema = new mongoose.Schema({
  courtname: { type: String, required: true },

  location: { type: String, required: true },

  adress: { type: String },

  mobilenumber: { type: Number },

  /* description: {
  //    type: [String], // Allow an array of strings
  //    default: [],
  // },*/

  description:{ type:String},

  timestamp: {
    type: Date,

    default: new Date(),
  },
  courtPic: {
    type: String,
  },
});

const courts = mongoose.model("courts", courtSchema);
module.exports = courts;
