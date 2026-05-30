const twilio = require("twilio");
require("dotenv").config();

const client = twilio(
  process.env.TWILIO_SID,
  process.env.TWILIO_AUTH
);

exports.makeCall = async (req, res) => {
  try {
    const { to, from } = req.body;

    const call = await client.calls.create({
      to: "+918600360790",                       // caller number
      from: process.env.TWILIO_PHONE,
      url: "http://demo.twilio.com/docs/voice.xml" 
    });

    res.json({ message: "Calling...", call });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};