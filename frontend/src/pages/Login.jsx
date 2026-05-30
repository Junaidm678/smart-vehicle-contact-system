import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

function Login() {
  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    try {
      const res = await API.post("/auth/login", form);

      //  Save token
      localStorage.setItem("token", res.data.token);

      alert("Login successful");

      // Go to dashboard
      navigate("/dashboard");

    } catch (err) {
      alert(err.response?.data?.message || "Error");
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
  <div className="card shadow p-4" style={{ width: "350px" }}>
    <h3 className="text-center mb-3">Welcome Back</h3>

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

    <button className="btn btn-primary w-100" onClick={handleLogin}>
      Login
    </button>

    <p
      className="text-center mt-3 text-primary"
      style={{ cursor: "pointer" }}
      onClick={() => navigate("/signup")}
    >
      New user? Signup
    </p>
  </div>
</div>
  );
}

export default Login;