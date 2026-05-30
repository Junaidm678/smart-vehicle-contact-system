const mongoose = require("mongoose")


const userSchema = new mongoose.Schema({
    userId: String,
    name: String,
    phone: String,

    emergencyContact: {
        name: String,
        phone: String
    },

    uniqueId: String,
    qrCode: String,
    qrImage: String

}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);