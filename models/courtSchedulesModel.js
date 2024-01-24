const mongoose = require("mongoose");
const courtSchedulesModel =new mongoose.Schema({

  date: { type: Date, required: true },

  slots: { type: Object, required: true },

  cost: { type: Number , required: true},

  bookedBy : { type:mongoose.Types.ObjectId },

  cancellations: { type: Array },

  courtId : { type:mongoose.Types.ObjectId , required: true},

  paymentOrders : { type: Array },
})
const CourtSchedules = mongoose.model('CourtSchedules',courtSchedulesModel)
module.exports=CourtSchedules
