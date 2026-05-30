const mongoose = require("mongoose");

const requestSchema = new mongoose.Schema({
  vehicleId: String,   // uniqueId of vehicle 
  requesterPhone: String,
  message: String,
  status: {
    type: String,
    default: "pending"
  }
}, { timestamps: true });

module.exports = mongoose.model("Request", requestSchema);