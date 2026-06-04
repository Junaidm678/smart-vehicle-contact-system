const User = require("../models/User");
const { v4: uuidv4 } = require("uuid");
const QRCode = require("qrcode");

exports.registerUser = async (req, res) => {
    try {
        const { name, phone, emergencyContact } = req.body;

        const uniqueId = uuidv4();

        const qrData = `https://smart-vehicle-contact-system.vercel.app/${uniqueId}`;
        console.log("QR DATA GENERATED:", qrData);

        const qrImage = await QRCode.toDataURL(qrData);

        const user = new User({
            userId: req.user.userId,
            name,
            phone,
            emergencyContact,
            uniqueId,
            qrCode: qrData,
            qrImage: qrImage
        });

        await user.save();

        res.json({
            message: "User registered",
            qrImage,
            qrData
        });

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getUserByQR = async (req, res) => {
    try {
        const { id } = req.params;

        const user = await User.findOne({ uniqueId: id });

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.json({
            name: user.name,
            message: "Choose action",
            options: {
                contactOwner: true,
                callEmergency: true
            }
        });

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getEmergencyContact = async (req, res) => {
    try {
        const { id } = req.params;

        const user = await User.findOne({ uniqueId: id });

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.json({
            success: true,
            emergencyContact: {
                name: user.emergencyContact.name,
                phone: user.emergencyContact.phone
            }
        });

    } catch (err) {
        res.status(500).json({
            success: false,
            error: err.message
        });
    }
};

exports.getMyVehicle = async (req, res) => {
  try {
    const user = await User.findOne({
      userId: req.user.userId   
    });

    res.json(user); 

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};