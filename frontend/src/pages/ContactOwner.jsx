import { useParams } from "react-router-dom";
import { useState } from "react";
import API from "../services/api";

function ContactOwner() {
  const messages = [
    "Your car is blocking my way",
    "Your car lights are on",
    "Your vehicle is in danger",
    "Please contact me urgently",
  ];

  const [selectedMessage, setSelectedMessage] = useState("");
  const { id } = useParams();
  const [phone, setPhone] = useState("");

  const sendRequest = async () => {
    await API.post("/requests/create", {
      vehicleId: id,
      requesterPhone: phone,
      message: selectedMessage,
      type: "contact",
    });

    alert("Request Sent");
    setPhone("");
    setSelectedMessage("");
  };
  const handleCall = async () => {
  try {
    await API.post("/call", {
      to: `+91${phone}`,          // caller phone
      from: "ownerNumber" // later dynamic
    });

    alert("Calling...");

  } catch (err) {
    console.log(err);
    alert("Call failed");
  }
};

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Contact Owner</h2>

      <input
        placeholder="Enter your phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <br />
      <br />
      <div>
        <h4>Select Message</h4>

        {messages.map((msg, index) => (
          <button
            key={index}
            className={`btn m-2 ${
              selectedMessage === msg ? "btn-primary" : "btn-outline-primary"
            }`}
            onClick={() => setSelectedMessage(msg)}
          >
            {msg}
          </button>
        ))}
      </div>

      <button onClick={sendRequest}>Send Request</button>
      <button className="btn btn-success mt-3" onClick={handleCall}>
        Call Owner 📞
      </button>
    </div>
  );
}

export default ContactOwner;
