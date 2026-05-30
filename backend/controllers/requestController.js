const Request = require("../models/Request");
const User = require("../models/User");

exports.createRequest = async (req, res) => {
  try {
    const { vehicleId, requesterPhone, message } = req.body;

    const request = new Request({
      vehicleId, //  IMPORTANT
      requesterPhone,
      message,
      status: "pending"
    });

    await request.save();

    res.json({
      message: "Request sent to owner",
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getRequests = async (req, res) => {
  try {
    //  Step 1: find vehicle of logged-in user
    const user = await User.findOne({
      userId: req.user.userId,
    });

    if (!user) {
      return res.json([]); // no vehicle
    }

    //  Step 2: fetch requests using vehicle uniqueId
    const requests = await Request.find({
      vehicleId: user.uniqueId,
    });

    res.json(requests);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.approveRequest = async (req, res) => {
  try {
    const { requestId } = req.params;

    const request = await Request.findByIdAndUpdate(
      requestId,
      { status: "approved" },
      { new: true },
    );

    res.json({
      message: "Request approved",
      request,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.rejectRequest = async (req, res) => {
  try {
    const { requestId } = req.params;

    const request = await Request.findByIdAndUpdate(
      requestId,
      { status: "rejected" },
      { new: true },
    );

    res.json({
      message: "Request rejected",
      request,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
