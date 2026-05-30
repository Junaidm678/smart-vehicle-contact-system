import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

function Signup() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignup = async () => {
    try {
      await API.post("/auth/signup", form);
      alert("Signup successful");
      navigate("/");
    } catch (err) {
      alert(err.response?.data?.message || "Error");
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
  <div className="card shadow p-4" style={{ width: "350px" }}>
    <h3 className="text-center mb-3">Create Account</h3>

    <input
      name="name"
      className="form-control mb-3"
      placeholder="Full Name"
      onChange={handleChange}
    />

    <input
      name="email"
      className="form-control mb-3"
      placeholder="Email"
      onChange={handleChange}
    />

    <input
      name="password"
      type="password"
      className="form-control mb-3"
      placeholder="Password"
      onChange={handleChange}
    />

    <button className="btn btn-success w-100" onClick={handleSignup}>
      Sign Up
    </button>

    <p
      className="text-center mt-3 text-primary"
      style={{ cursor: "pointer" }}
      onClick={() => navigate("/login")}
    >
      Already have an account? Login
    </p>
  </div>
</div>
  );
}

export default Signup;