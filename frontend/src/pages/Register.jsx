import { useState } from "react";
import API from "../services/api";

function Register() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    emergencyName: "",
    emergencyPhone: "",
  });

  const [qr, setQr] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const res = await API.post(
        "/users/register",
        {
          name: form.name,
          phone: form.phone,
          emergencyContact: {
            name: form.emergencyName,
            phone: form.emergencyPhone,
          },
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        },
      );

      setQr(res.data.qrImage);
    } catch (err) {
      console.log(err); //  see error in console
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
  <div className="card shadow p-4 text-center" style={{ width: "400px" }}>
    <h3 className="mb-3">Register Vehicle 🚗</h3>

    <input
      name="name"
      className="form-control mb-3"
      placeholder="Owner Name"
      onChange={handleChange}
    />

    <input
      name="phone"
      className="form-control mb-3"
      placeholder="Phone Number"
      onChange={handleChange}
    />

    <input
      name="emergencyName"
      className="form-control mb-3"
      placeholder="Emergency Contact Name"
      onChange={handleChange}
    />

    <input
      name="emergencyPhone"
      className="form-control mb-3"
      placeholder="Emergency Contact Phone"
      onChange={handleChange}
    />

    <button className="btn btn-primary w-100" onClick={handleSubmit}>
      Register Vehicle
    </button>

    {qr && (
      <div className="mt-4">
        <h5>Your QR Code</h5>
        <img src={qr} alt="QR Code" style={{ width: "150px" }} />
      </div>
    )}
  </div>
</div>
    
 
  );
}

export default Register;
