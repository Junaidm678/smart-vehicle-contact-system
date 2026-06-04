import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import API from "../services/api";

function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    try {
      setLoading(true);
      const res = await API.post("/auth/login", form);

      //  save token
      localStorage.setItem("token", res.data.token);

      toast.success("Login successful!");

      // go to dashboard
      setTimeout(() => {
        navigate("/dashboard");
      }, 1000);
    } catch (err) {
      toast.error(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
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

        <button
          onClick={handleLogin}
          disabled={loading}
          className="btn btn-primary"
        >
          {loading ? (
            <>
              <span
                className="spinner-border spinner-border-sm me-2"
                role="status"
                aria-hidden="true"
              ></span>
              Logging in...
            </>
          ) : (
            "Login"
          )}
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
